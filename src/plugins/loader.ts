import type { LoadedPlugin, PluginApi, PluginManifest } from './types'

/** Базовая папка плагинов. В проде это `dist/plugins`, в dev — `public/plugins`. */
export const PLUGINS_URL = '/plugins'

/**
 * Загружает все плагины из `dist/plugins` в рантайме.
 *
 * Формат:
 *   /plugins/index.json  -> { "plugins": ["hello.js", ...] }
 *   /plugins/<file>.js   -> ESM-модуль, экспортирующий `register(api)`.
 *
 * Ничего не бандлится: файлы подтягиваются браузером как обычные ES-модули,
 * поэтому новые плагины можно добавлять без пересборки основного приложения.
 */
export async function loadPlugins(api: PluginApi): Promise<LoadedPlugin[]> {
  const res = await fetch(`${PLUGINS_URL}/index.json`)
  if (!res.ok) {
    throw new Error(
      `Не удалось прочитать манифест плагинов (${PLUGINS_URL}/index.json): ${res.status}`,
    )
  }

  const manifest = (await res.json()) as { plugins?: string[] }
  const files = manifest.plugins ?? []
  const loaded: LoadedPlugin[] = []

  for (const file of files) {
    const url = `${PLUGINS_URL}/${file}`
    try {
      // Vite пытается преобразовывать `import()` статически, поэтому для
      // рантайм-загрузки внешних модулей из /public используем new Function,
      // который Vite не анализирует.
      const importer = new Function('u', 'return import(u)')
      const mod = (await importer(url)) as {
        register?: (api: PluginApi) => PluginManifest
      }
      if (typeof mod.register !== 'function') {
        console.warn(`[plugins] ${file} не экспортирует register(api) — пропущен`)
        continue
      }
      const def = mod.register(api)
      if (!def || !Array.isArray(def.routes)) {
        console.warn(`[plugins] ${file} вернул некорректный манифест — пропущен`)
        continue
      }
      loaded.push({ file, ...def })
    } catch (err) {
      console.error(`[plugins] не удалось загрузить ${url}`, err)
    }
  }

  return loaded
}
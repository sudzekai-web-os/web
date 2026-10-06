import type { ComponentType, ReactNode } from 'react'
import React from 'react'

/** Один маршрут, который плагин добавляет в приложение. */
export interface PluginRoute {
  /** URL страницы, например `/docker`, `/files`. */
  path: string
  /** Название кнопки в боковой панели. */
  name: string
  /** Необязательная иконка (emoji/символ) перед названием. */
  icon?: string
  /** Компонент страницы или готовый React-узел. */
  element: ComponentType | ReactNode
}

/** То, что плагин возвращает из `register(api)`. */
export interface PluginManifest {
  /** Уникальный id плагина. */
  id: string
  /** Отображаемое имя. */
  name: string
  /** Маршруты, которые плагин добавляет. */
  routes: PluginRoute[]
}

/** Загруженный плагин с информацией об источнике. */
export interface LoadedPlugin extends PluginManifest {
  file: string
}

/**
 * API, которое система передаёт плагину в `register(api)`.
 * Плагины пишутся без сборки, поэтому получают React отсюда
 * и создают разметку через `h` (React.createElement).
 */
export interface PluginApi {
  React: typeof React
  h: typeof React.createElement
}
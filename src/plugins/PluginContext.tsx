import { createContext, createElement, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import React from 'react'
import type { LoadedPlugin, PluginApi } from './types'
import { loadPlugins } from './loader'

// Отдаём плагинам тот же инстанс React, что рендерит хост.
// Стабы сборщика плагинов читают его вместо встраивания своей копии React.
;(globalThis as Record<string, unknown>).__SUDZEKAI_REACT__ = React

interface PluginState {
  plugins: LoadedPlugin[]
  loading: boolean
  error: string | null
}

const PluginContext = createContext<PluginState>({
  plugins: [],
  loading: true,
  error: null,
})

/** API, которое передаётся каждому плагину в `register(api)`. */
const api: PluginApi = {
  React,
  h: createElement,
}

export function PluginProvider({ children }: { children: ReactNode }) {
  const [plugins, setPlugins] = useState<LoadedPlugin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    loadPlugins(api)
      .then((loaded) => {
        if (!cancelled) setPlugins(loaded)
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <PluginContext.Provider value={{ plugins, loading, error }}>
      {children}
    </PluginContext.Provider>
  )
}

export function usePlugins() {
  return useContext(PluginContext)
}
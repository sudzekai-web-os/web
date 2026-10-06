import { isValidElement } from 'react'
import type { ComponentType, ReactNode } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { usePlugins } from '../plugins/PluginContext'
import HomePage from '../pages/HomePage'
import ButtonsPage from '../pages/ButtonsPage'
import InputsPage from '../pages/InputsPage'
import FramesPage from '../pages/FramesPage'
import TextPage from '../pages/TextPage'

const nav = [
    { to: '/', label: 'Главная', end: true },
    { to: '/buttons', label: 'Кнопки' },
    { to: '/inputs', label: 'Поля ввода' },
    { to: '/frames', label: 'Рамки' },
    { to: '/text', label: 'Текст' },
]

const systemRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/buttons', element: <ButtonsPage /> },
    { path: '/inputs', element: <InputsPage /> },
    { path: '/frames', element: <FramesPage /> },
    { path: '/text', element: <TextPage /> },
]

function renderElement(element: ComponentType | ReactNode) {
    if (element == null || isValidElement(element)) return element
    const Component = element as ComponentType
    return <Component />
}

function AppLayout() {
    const { plugins } = usePlugins()

    const pluginRoutes = plugins.flatMap((plugin) =>
        plugin.routes.map((route) => ({
            path: route.path,
            element: renderElement(route.element),
        })),
    )

    const pluginButtons = plugins.flatMap((plugin) =>
        plugin.routes.map((route) => ({
            to: route.path,
            label: route.name,
            icon: route.icon,
        })),
    )

    return (
        <div className="h-screen overflow-hidden flex flex-col">
            <header className="p-3 flex items-center bg-white/2">
                <img src="/favicon.svg" alt="s. web os" className="h-8 w-8" />

                <span className="text text-bold whitespace-nowrap text-xl ms-2">
                    s. web os
                </span>

                <div className="mx-auto w-full max-w-md">
                    <input className="input input-md" type="search" placeholder="Поиск..." />
                </div>

                <div className="flex items-center gap-3 whitespace-nowrap">
                    <span className="text hidden sm:inline">Гость</span>
                    <button className="bg-(--btn-primary-bg) flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white">
                        Г
                    </button>
                </div>
            </header>

            <div className="flex min-h-0 flex-1">
                <aside className="w-40 flex flex-col bg-white/2 min-h-0">
                    <span className='text-muted tracking-wider text-xs px-1'>
                        SYSTEM
                    </span>
                    <hr className='m-1'/>

                    {nav.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `btn border-0 btn-md btn-start ${isActive ? 'btn-state-active' : 'bg-transparent'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <span className='text-muted tracking-wider text-xs mt-3 px-1'>
                        PLUGINS
                    </span>
                    <hr className='m-1'/>

                    {pluginButtons.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `btn border-0 btn-md btn-start ${isActive ? 'btn-state-active' : 'bg-transparent'}`
                            }
                        >
                            {item.icon ? <span className="mr-2">{item.icon}</span> : null}
                            {item.label}
                        </NavLink>
                    ))}
                </aside>

                <main className="scroll-y flex-1 p-6">
                    <Routes>
                        {systemRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        {pluginRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        <Route
                            path="*"
                            element={
                                <div className="frame frame-p-6">
                                    <span className="text text-bold text-2xl">
                                        404 — страница не найдена
                                    </span>
                                </div>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default AppLayout
import type { ReactNode } from 'react'

export function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="text text-semibold mb-4 text-lg">{title}</h2>
      <div className="frame frame-elevated frame-p-6 flex flex-col gap-6">
        {children}
      </div>
    </section>
  )
}

export function Row({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>
}

export function Label({ children }: { children: ReactNode }) {
  return <div className="text text-muted mb-1 text-sm">{children}</div>
}
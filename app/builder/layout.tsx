import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Website Builder",
    description: "Create amazing websites with drag and drop",
}
export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className="w-full min-h-screen">{children}</main>
}

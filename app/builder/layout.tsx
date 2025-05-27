//metadata for the website builder with og support
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Crackheads - Free Website Builder",
    description:
        "Create your own website with our free easy-to-use website builder.",
    openGraph: {
        title: "Crackheads - Free Website Builder",
        description:
            "Create your own website with our free easy-to-use website builder.",
        siteName: "Crackheads",
        images: [
            {
                url: `${process.env.BASE_URL}/covers/site-builder.jpg`,
                width: 1200,
                height: 630,
                alt: "Crackheads - Free Website Builder",
            },
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Crackheads - Free Website Builder",
        description:
            "Create your own website with our free easy-to-use website builder.",
        images: [`${process.env.BASE_URL}/covers/site-builder.jpg`],
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className="min-h-screen bg-gray-100 dark:bg-gray-900">{children}</main>
}

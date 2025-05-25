import { Metadata } from "next"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Features from "@/components/features"
import Services from "@/components/services"
import CircleFeatures from "@/components/circle-features"
import FooterCTA from "@/components/footer-cta"
import Footer from "@/components/footer"
import StarField from "@/components/star-field"
import { Button } from "@/components/ui/button"
import { SiteDemo } from "@/components/demo/demo-sites"
import { BlogPreview } from "@/components/blogs/blog-preview"
import { AboutSection } from "@/components/about/about-section"

export const metadata: Metadata = {
    title: "Crackheads Studio",
    keywords: [
        "Crackheads Studio",
        "Creative Studio",
        "Web Design",
        "Development",
    ],
    description:
        "Your creative digital studio specializing in web design and development.",
    authors: [{ name: "Crackheads Studio" }],
    creator: "Crackheads Studio",
    openGraph: {
        title: "Crackheads Studio",
        description:
            "Your creative digital studio specializing in web design and development.",
    },
}

export default function Home() {
    return (
        <main className="min-h-screen cosmic-bg">
            <StarField />

            <Navbar />

            <Hero />

            <AboutSection/>

            <Features />

            <BlogPreview />

            <SiteDemo />

            <CircleFeatures />

            <Services />

            <FooterCTA />
            
            <Footer />
        </main>
    )
}

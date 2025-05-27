"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const NavItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Product", href: "#" },
    { label: "Clients", href: "#" },
    { label: "Site Builder", href: "/builder" },
    { label: "Contact Us", href: "#" },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
                isScrolled
                    ? "bg-background/80 backdrop-blur-lg shadow-md"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                        <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                                CS
                            </span>
                        </div>
                    </div>
                    <span className="font-bold text-xl hidden sm:inline-block">
                        Crackheads Studio
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {NavItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center">
                    <Button
                        variant="default"
                        size="sm"
                        className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                    >
                        <span>Book a Meeting</span>
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg">
                    <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {NavItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-foreground/80 hover:text-foreground py-2 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button
                            variant="default"
                            size="sm"
                            className="mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                        >
                            <span>Book a Meeting</span>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar

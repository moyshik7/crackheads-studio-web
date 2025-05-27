"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, X, ChevronDown, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface MobileElementSelectorProps {
    onAddElement: (type: { type: string }) => void
}

export function MobileElementSelector({
    onAddElement,
}: MobileElementSelectorProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [expandedSections, setExpandedSections] = useState<string[]>(["hero"])

    const toggleSection = (section: string) => {
        setExpandedSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        )
    }

    const sections = [
        {
            id: "hero",
            title: "Hero Sections",
            color: "bg-purple-500",
            components: [
                { type: "hero-classic", label: "Classic Hero" },
                { type: "hero-split", label: "Split Screen" },
                { type: "hero-centered", label: "Centered" },
                { type: "hero-video", label: "Video Hero" },
                { type: "hero-gradient", label: "Gradient" },
                { type: "hero-minimal", label: "Minimal" },
            ],
        },
        {
            id: "headings",
            title: "Headings",
            color: "bg-blue-500",
            components: [
                { type: "h1", label: "Heading 1" },
                { type: "h2", label: "Heading 2" },
                { type: "h3", label: "Heading 3" },
                { type: "h4", label: "Heading 4" },
                { type: "h5", label: "Heading 5" },
                { type: "h6", label: "Heading 6" },
            ],
        },
        {
            id: "paragraphs",
            title: "Paragraphs",
            color: "bg-green-500",
            components: [
                { type: "paragraph-full", label: "Full Width" },
                { type: "paragraph-left-image", label: "Left Image" },
                { type: "paragraph-right-image", label: "Right Image" },
            ],
        },
        {
            id: "images",
            title: "Images",
            color: "bg-orange-500",
            components: [{ type: "image", label: "Single Image" }],
        },
        {
            id: "dividers",
            title: "Dividers",
            color: "bg-gray-500",
            components: [
                { type: "divider-line", label: "Solid Line" },
                { type: "divider-dashed", label: "Dashed Line" },
                { type: "divider-wavy", label: "Wavy Line" },
                { type: "divider-dots", label: "Dotted Line" },
                { type: "divider-zigzag", label: "Zigzag Line" },
            ],
        },
        {
            id: "shop",
            title: "Shop",
            color: "bg-indigo-500",
            components: [
                { type: "shop-latest", label: "Latest Products" },
                { type: "shop-bestsellers", label: "Best Sellers" },
                { type: "shop-featured", label: "Featured" },
            ],
        },
        {
            id: "cards",
            title: "Cards",
            color: "bg-pink-500",
            components: [
                { type: "cards-carousel", label: "Card Carousel" },
                { type: "cards-4-grid", label: "4 Cards Grid" },
                { type: "cards-6-grid", label: "6 Cards Grid" },
                { type: "card-full-width", label: "Full Width Card" },
            ],
        },
    ]

    const handleAddElement = (type: string) => {
        onAddElement({ type })
        setIsOpen(false)
    }

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="lg"
                    className="h-14 w-14 rounded-full shadow-lg"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Plus className="h-6 w-6" />
                    )}
                </Button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 500,
                            }}
                            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                Add Element
                            </h3>

                            <div className="space-y-4">
                                {sections.map((section, sectionIndex) => (
                                    <motion.div
                                        key={section.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: sectionIndex * 0.1,
                                        }}
                                    >
                                        <button
                                            onClick={() =>
                                                toggleSection(section.id)
                                            }
                                            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`${section.color} w-4 h-4 rounded-full`}
                                                />
                                                <span className="font-medium">
                                                    {section.title}
                                                </span>
                                            </div>
                                            {expandedSections.includes(
                                                section.id
                                            ) ? (
                                                <ChevronDown className="h-4 w-4" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4" />
                                            )}
                                        </button>

                                        {expandedSections.includes(
                                            section.id
                                        ) && (
                                            <div className="mt-2 grid grid-cols-2 gap-2">
                                                {section.components.map(
                                                    (component, index) => (
                                                        <motion.button
                                                            key={component.type}
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.9,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    index *
                                                                    0.05,
                                                            }}
                                                            onClick={() =>
                                                                handleAddElement(
                                                                    component.type
                                                                )
                                                            }
                                                            className="p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                                                        >
                                                            <span className="text-sm font-medium">
                                                                {
                                                                    component.label
                                                                }
                                                            </span>
                                                        </motion.button>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

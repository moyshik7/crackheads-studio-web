"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const BlogPreview = () => {
    const portfolioItems = [
        {
            title: "Our Approach to Creating Corporate Websites That Drive Results",
            category: `When creating a corporate website. Must need to focus on it. It needs to work. It should not only look professional but also help your business grow.`,
            image: "https://www.roopokar.com/wp-content/uploads/2025/04/Our-Approach-to-Creating-Corporate-Websites-That-Drive-Results.jpg",
        }, {
            title: "The Impact of a Professional Website on Small Business Growth",
            category: "As a new business, a website helps them for online presence. Think about it. When was the last time you trusted a company without checking its website?",
            image: "https://www.roopokar.com/wp-content/uploads/2025/04/The-Impact-of-a-Professional-Website-on.jpg",
        }, {
            title: "How to Increase Conversions by a Website Redesign",
            category: "Every business owner knows that. A website is one of the most critical assets for growing your business online. People first see it when they want to...",
            image: "https://www.roopokar.com/wp-content/uploads/2025/04/How-to-Increase-Conversions-by-a-Website-Redesign.jpg",
        },
    ]

    return (
        <section id="portfolio" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-lg bg-card/30 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-shadow"
                        >
                            <AspectRatio ratio={16 / 9} className="bg-muted">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </AspectRatio>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const SiteDemo = () => {
    const portfolioItems = [
        {
            title: "Clothing Store",
            category: `E - Commerce Website`,
            image: "/images/ss/clothing-example.webp",
        }, {
            title: "Vape Store",
            category: "E - Commerce Website",
            image: "/images/ss/vape-example.webp",
        }, {
            title: "Pet Shop",
            category: "E - Commerce Website",
            image: "/images/ss/pet-example.webp",
        },
    ]

    return (
        <section id="portfolio" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-16 w-full text-center"
                >
                    Demo Apps
                </motion.h2>
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

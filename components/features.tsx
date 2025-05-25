"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const Features = () => {
    const features = [
        {
            title: "Search Engine Optimization",
            description:
                "Boost your website visibility and ranking on search engines with our proven SEO strategies.",
            buttonText: "Learn More",
            color: "from-purple-600 to-blue-500",
        },
        {
            title: "Software Development",
            description:
                "Custom software solutions tailored to your business needs and requirements.",
            buttonText: "Learn More",
            color: "from-pink-500 to-purple-600",
        },
        {
            title: "Website Design & Development",
            description:
                "Beautiful, responsive websites that convert visitors into customers.",
            buttonText: "Learn More",
            color: "from-indigo-500 to-purple-600",
        },
    ]

    return (
        <section id="features" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-16 w-full text-center"
                >
                    Our Services
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="feature-card bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                {feature.description}
                            </p>
                            <Button
                                className={`bg-gradient-to-r ${feature.color} hover:opacity-90 transition-opacity px-6`}
                            >
                                {feature.buttonText}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features

"use client"

import { motion } from "framer-motion"
import { Activity, BarChart, Zap, Shield } from "lucide-react"

const CircleFeatures = () => {
    return (
        <section id="circle-features" className="py-20 relative">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-16"
                >
                    Our Work Process
                </motion.h2>

                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-xl"></div>

                    <div className="relative mt-8 grid grid-cols-2 gap-6">
                        {[
                            {
                                icon: "We analyze your requirements and market research",
                                title: "Research & Development",
                                delay: 0.1,
                            },
                            {
                                icon: "Creating wireframes and mockups for your approval",
                                title: "Wire & Mockup",
                                delay: 0.2,
                            },
                            {
                                icon: "Designing the final product with validation",
                                title: "Design & Validation",
                                delay: 0.3,
                            },
                            {
                                icon: "Development and deployment of your project",
                                title: "Develop & Deploy",
                                delay: 0.4,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: item.delay,
                                }}
                                viewport={{ once: true }}
                                className="pt-10 pb-10 bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-lg hover:bg-card/80 transition-colors"
                                
                            >
                                <h3 className="text-sm font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {item.icon}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CircleFeatures

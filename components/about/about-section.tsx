"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export const AboutSection = () => {
    return (
        <section className="px-4 md:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold mb-6">
                            About Crackheads Studio
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Crackheads Studio is a leading web design and
                            development agency based in Bangladesh. We
                            specialize in creating innovative digital solutions
                            that help businesses grow and succeed in the digital
                            landscape.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Our team of experienced designers and developers
                            work closely with clients to deliver exceptional
                            results that exceed expectations. We pride ourselves
                            on our commitment to quality, creativity, and
                            customer satisfaction.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            Learn More
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4 comic-relief-bold">
                                Crackheads Studio
                            </h3>
                            <p className="mb-6">
                                Prestigious clients we have worked with
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 bg-blue-600 rounded-full"
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

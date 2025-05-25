"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-20 pb-32 flex items-center">
            <div className="container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary/70">
                            Crackheads
                            <br />
                            Studio
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
                            We create stunning, responsive websites that drive
                            results for your business. Our expert team delivers
                            cutting-edge web solutions tailored to your needs.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button className="glow-button bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity px-8 py-6 rounded-full">
                                <span className="relative z-10">
                                    Create a Website
                                </span>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Blue glowing spot */}
                            <div className="absolute -right-20 top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

                            {/* Pink glowing spot */}
                            <div className="absolute left-20 -top-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

                            {/* Main content */}
                            <div className="relative">
                                <div className="absolute top-10 right-10 w-20 h-20">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80 animate-pulse"></div>
                                </div>

                                <div className="relative w-full h-96 bg-gradient-to-br from-muted/20 to-card/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-2xl">
                                    <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>

                                    <div className="absolute top-1/3 right-8 w-3/5 h-40 bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center shadow-lg">
                                        <div className="text-center">
                                            <div className="uppercase text-xs tracking-wider text-muted-foreground mb-1">
                                                Dashboard Report
                                            </div>
                                            <div className="w-full h-6 bg-primary/20 rounded-md mb-2"></div>
                                            <div className="w-4/5 mx-auto h-4 bg-secondary/20 rounded-md"></div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 flex items-center">
                                        <div className="w-20 h-32 bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-md rounded-lg border border-white/10 mr-4"></div>
                                        <div className="h-32 flex flex-col justify-between">
                                            <div className="w-16 h-4 bg-white/20 rounded-md"></div>
                                            <div className="w-24 h-4 bg-white/20 rounded-md"></div>
                                            <div className="w-20 h-4 bg-white/20 rounded-md"></div>
                                        </div>
                                    </div>

                                    {/* Microphone */}
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                        <div className="w-2 h-20 bg-gray-700 rounded-full"></div>
                                        <div className="w-10 h-14 bg-gray-800 rounded-t-xl mt-1"></div>
                                        <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full border-2 border-gray-600 -mt-2 mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="hero-wave"></div>

            {/* Colorful plants on right side */}
            <div className="absolute right-0 bottom-0 h-96 w-64 overflow-hidden opacity-80 hidden lg:block">
                <div className="relative w-full h-full">
                    <div className="absolute bottom-0 right-0 w-60 h-72 bg-gradient-to-t from-purple-500/30 to-blue-500/30 blur-md rounded-tl-[100px]"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-60 bg-gradient-to-t from-pink-500/40 to-purple-500/40 blur-md rounded-tl-[70px]"></div>
                    <div className="absolute bottom-20 right-20 w-20 h-40 bg-gradient-to-t from-blue-500/50 to-cyan-400/50 blur-md rounded-tl-[40px]"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero

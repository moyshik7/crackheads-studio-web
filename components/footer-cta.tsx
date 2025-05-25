"use client"

import { motion } from "framer-motion"

const FooterCTA = () => {
    const reviews = [{
        name: "Siam Rahman",
        content: "Said something",
        delay: 0,
    }, {
        name: "Prodipta Dey",
        content: "Said something",
        delay: 0.1,
    }, {
        name: "Tasnim Tithi",
        content: "Said something",
        delay: 0.2,
    }, {
        name: "Nafisa Rijhum",
        content: "Said something",
        delay: 0.3,
    }, {
        name: "Haydar Subodh",
        content: "Said something",
        delay: 0.4,
    }, {
        name: "Aunon Roy",
        content: "Said something",
        delay: 0.5,
    }, {
        name: "Inayah Rahman",
        content: "Said something",
        delay: 0.6,
    }, {
        name: "Rina",
        content: "Said something",
        delay: 0.7,
    }, {
        name: "Sadia",
        content: "Said something",
        delay: 0.8,
    }, {
        name: "Vamika",
        content: "Said something",
        delay: 0.9,
    }, {
        name: "Keya",
        content: "Said something",
        delay: 1,
    }, {
        name: "Neha",
        content: "Said something",
        delay: 1.1,
    }]
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Reviews
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: review.delay }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl font-bold mb-2">
                                        {review.name}
                                    </h3>
                                    <div className="border-t border-white/10 my-4"></div>
                                    <p className="text-sm text-muted-foreground">
                                        {review.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                    <div className="text-center mt-12 text-sm text-muted-foreground">
                        Ein jeder kehr’ vor seiner Tür, und rein ist jedes Stadtquartier<br/>
                        (If everyone sweeps in front of their own door, every part of town will be clean)
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterCTA

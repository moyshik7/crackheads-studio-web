"use client"

import { motion } from "framer-motion"

const FooterCTA = () => {
    const reviews = [{
        name: "Mir Mamun",
        content: "ওয়েবসাইট এর quality দেখে আমার মাথা ক্র্যাক হয়ে গেলো (Get that? crack--heads😉) (sorry for lame joke)",
        delay: 0,
    }, {
        name: "Sayed Ishak Miah",
        content: "কিরে ভাই, ওয়েবসাইট এত ফাস্ট কেন?",
        delay: 0.1,
    }, {
        name: "IDK Who",
        content: "Vaiyaaa, ekta review dibooo, oita plz website e dekhaben 🥺 (this was actually sent on ngl)",
        delay: 0.2,
    }, {
        name: "Nafisa Rijhum",
        content: "২৫ গ্রাম এর দামে একটা ওয়েবসাইট পাইলাম। ভালোই তো",
        delay: 0.3,
    }, {
        name: "Muhammad Naiem",
        content: "চিপি চাপায় পট করতেছিলাম, কয়েকটা পোলাপান আইসা কি ওয়েবসাইট ধরায়ে দিলো।",
        delay: 0.4,
    }, {
        name: "Muhammad Al-amin",
        content: "সেক্সি সেক্সি ওয়েবসাইট, সেক্সি সেক্সি এনিমেশন।",
        delay: 0.5,
    }, {
        name: "Inayah Rahman",
        content: "এদের ওয়েবসাইটের ডিজাইন আর এনিমেশন দ্দেখলে orgasm হয়ে যায় 😅",
        delay: 0.6,
    }, {
        name: "Saif",
        content: "আসলাম ক্র্যাক কিনতে, ধরায়ে দিল ওয়েবসাইট, Satisfaction 100%",
        delay: 0.7,
    }, {
        name: "Sadia",
        content: "আমার bf Gay ছিল কিন্তু Crackheads Studio এর কাজ দেখার পর Straight হয়ে গেছে।",
        delay: 0.8,
    }]
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Reviews
                    </h2>

                    <div className="text-center mt-12 text-sm text-muted-foreground mb-5">
                        (Not kidding, these was actual messages from our clients)
                    </div>

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

"use client"

import { motion } from "framer-motion"
import { Briefcase, LockIcon, Clock10Icon, DollarSign } from "lucide-react"

const Services = () => {
    const services = [
        {
            title: "Saips In Sore Sryulaing",
            items: [
                {
                    icon: <LockIcon className="w-6 h-6" />,
                    title: "Trusted",
                    description:
                        "Your website is your first impression.an opportunity to show the world what you offer",
                },
                {
                    icon: <Briefcase className="w-6 h-6" />,
                    title: "High Experience",
                    description: "8+ yrs experience, 90% client retention rate",
                },
                {
                    icon: <Clock10Icon className="w-6 h-6" />,
                    title: "Timely Work",
                    description: "We beat deadlines and you don’t have to wait",
                },
                {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: "Affordable",
                    description: "Pay no more. Pay no Less. No hidden fees.",
                },
            ],
        },
        {
            title: "Office Location",
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            details: [
                { title: "Dhanmondi 14/A", description: "Dhaka, Bangladesh" },
            ],
        },
    ]

    return (
        <section id="services" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-10">
                            {services[0].title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services[0].items?.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-card/50 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-10">
                            {services[1].title}
                        </h2>
                        <div className="relative h-96 rounded-xl overflow-hidden mb-6">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${services[1].image})`,
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                {services[1].details?.map((detail, index) => (
                                    <div key={index} className="mb-4">
                                        <h3 className="text-lg font-semibold">
                                            {detail.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {detail.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services

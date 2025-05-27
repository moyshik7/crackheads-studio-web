"use client"

interface CardData {
    id: string
    title: string
    description: string
    image: string
    action?: string
}

const sampleCards: CardData[] = [
    {
        id: "1",
        title: "Amazing Product",
        description: "This is a great product with amazing features",
        image: "/placeholder.svg?height=200&width=300",
        action: "Learn More",
    },
    {
        id: "2",
        title: "Best Service",
        description: "We provide the best service in the industry",
        image: "/placeholder.svg?height=200&width=300",
        action: "Get Started",
    },
    {
        id: "3",
        title: "Quality Assured",
        description: "All our products come with quality guarantee",
        image: "/placeholder.svg?height=200&width=300",
        action: "Shop Now",
    },
    {
        id: "4",
        title: "Fast Delivery",
        description: "Get your orders delivered in 24 hours",
        image: "/placeholder.svg?height=200&width=300",
        action: "Order Now",
    },
    {
        id: "5",
        title: "Customer Support",
        description: "24/7 customer support for all your needs",
        image: "/placeholder.svg?height=200&width=300",
        action: "Contact Us",
    },
    {
        id: "6",
        title: "Money Back",
        description: "100% money back guarantee on all purchases",
        image: "/placeholder.svg?height=200&width=300",
        action: "Learn More",
    },
]

interface CardComponentProps {
    type: "carousel" | "4-grid" | "6-grid" | "full-width"
    theme?: any
}

export function CardComponent({ type, theme }: CardComponentProps) {
    const getCards = () => {
        switch (type) {
            case "4-grid":
                return sampleCards.slice(0, 4)
            case "6-grid":
                return sampleCards.slice(0, 6)
            case "full-width":
                return sampleCards.slice(0, 1)
            default:
                return sampleCards.slice(0, 4)
        }
    }

    const getGridClass = () => {
        switch (type) {
            case "4-grid":
                return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            case "6-grid":
                return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            case "full-width":
                return "grid-cols-1"
            default:
                return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }
    }

    const cards = getCards()

    if (type === "carousel") {
        return (
            <div
                className="p-6 rounded-lg"
                style={{
                    backgroundColor: theme?.colors.background || "#f9fafb",
                }}
            >
                <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: theme?.colors.text || "#374151" }}
                >
                    Featured Cards
                </h2>
                <div className="flex gap-4 overflow-x-auto pb-4">
                    {sampleCards.map((card) => (
                        <div
                            key={card.id}
                            className="flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border"
                        >
                            <img
                                src={card.image || "/placeholder.svg"}
                                alt={card.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {card.description}
                                </p>
                                <button
                                    className="px-4 py-2 rounded-lg text-white font-medium"
                                    style={{
                                        backgroundColor:
                                            theme?.colors.primary || "#3b82f6",
                                    }}
                                >
                                    {card.action}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: theme?.colors.background || "#f9fafb" }}
        >
            <h2
                className="text-2xl font-bold mb-6"
                style={{ color: theme?.colors.text || "#374151" }}
            >
                {type === "full-width" ? "Featured Card" : "Card Collection"}
            </h2>
            <div className={`grid ${getGridClass()} gap-4`}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden"
                    >
                        <img
                            src={card.image || "/placeholder.svg"}
                            alt={card.title}
                            className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                            <h3
                                className={`font-semibold mb-2 ${
                                    type === "6-grid" ? "text-sm" : "text-lg"
                                }`}
                            >
                                {card.title}
                            </h3>
                            <p
                                className={`text-gray-600 mb-3 ${
                                    type === "6-grid" ? "text-xs" : "text-sm"
                                }`}
                            >
                                {card.description}
                            </p>
                            <button
                                className={`px-3 py-1 rounded text-white font-medium ${
                                    type === "6-grid" ? "text-xs" : "text-sm"
                                }`}
                                style={{
                                    backgroundColor:
                                        theme?.colors.primary || "#3b82f6",
                                }}
                            >
                                {card.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

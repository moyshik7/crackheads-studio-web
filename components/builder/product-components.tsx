"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
    id: string
    name: string
    price: string
    image: string
    brand?: string
}

interface ProductGridProps {
    products: Product[]
    isEditing: boolean
    onEdit?: (products: Product[]) => void
}

export function ProductGrid({ products, isEditing, onEdit }: ProductGridProps) {
    const [editProducts, setEditProducts] = useState(products)

    const defaultProducts: Product[] = [
        {
            id: "1",
            name: "Popular Shoe Trends",
            price: "$236.00",
            image: "/placeholder.svg?height=200&width=200",
        },
        {
            id: "2",
            name: "Popular Shoe Trends",
            price: "$236.00",
            image: "/placeholder.svg?height=200&width=200",
        },
        {
            id: "3",
            name: "Popular Shoe Trends",
            price: "$236.00",
            image: "/placeholder.svg?height=200&width=200",
        },
        {
            id: "4",
            name: "Popular Shoe Trends",
            price: "$236.00",
            image: "/placeholder.svg?height=200&width=200",
        },
        {
            id: "5",
            name: "Popular Shoe Trends",
            price: "$236.00",
            image: "/placeholder.svg?height=200&width=200",
        },
        {
            id: "6",
            name: "Popular Shoe Trends",
            price: "$236.00",
            image: "/placeholder.svg?height=200&width=200",
        },
    ]

    const displayProducts = products.length > 0 ? products : defaultProducts

    if (isEditing) {
        return (
            <div className="space-y-4">
                <h3 className="font-semibold">Edit Products</h3>
                {editProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className="grid grid-cols-3 gap-2 p-2 border rounded"
                    >
                        <Input
                            placeholder="Product name"
                            value={product.name}
                            onChange={(e) => {
                                const newProducts = [...editProducts]
                                newProducts[index].name = e.target.value
                                setEditProducts(newProducts)
                            }}
                        />
                        <Input
                            placeholder="Price"
                            value={product.price}
                            onChange={(e) => {
                                const newProducts = [...editProducts]
                                newProducts[index].price = e.target.value
                                setEditProducts(newProducts)
                            }}
                        />
                        <Input
                            placeholder="Image URL"
                            value={product.image}
                            onChange={(e) => {
                                const newProducts = [...editProducts]
                                newProducts[index].image = e.target.value
                                setEditProducts(newProducts)
                            }}
                        />
                    </div>
                ))}
                <Button onClick={() => onEdit?.(editProducts)} size="sm">
                    Save Changes
                </Button>
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-2xl">
            <div className="bg-white rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Shop</h2>
                    <div className="text-sm text-gray-600">
                        Showing 1-6 of 24 results
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border"
                        >
                            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl p-4 mb-4 relative overflow-hidden">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-32 object-contain relative z-10"
                                />
                            </div>
                            <h3 className="font-medium text-gray-800 mb-2">
                                {product.name}
                            </h3>
                            <div className="text-lg font-bold text-gray-900">
                                {product.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function ProductShowcase({
    products,
    isEditing,
    onEdit,
}: ProductGridProps) {
    const defaultProducts: Product[] = [
        {
            id: "1",
            name: "Sacai x LDWaffle",
            price: "$399",
            image: "/placeholder.svg?height=150&width=150",
        },
        {
            id: "2",
            name: "Travis Scott x AJ 1",
            price: "$975",
            image: "/placeholder.svg?height=150&width=150",
        },
        {
            id: "3",
            name: "Dior x AJ 1",
            price: "$25,000",
            image: "/placeholder.svg?height=150&width=150",
        },
        {
            id: "4",
            name: "OFF-WHITE x Dunk Low",
            price: "$440",
            image: "/placeholder.svg?height=150&width=150",
        },
    ]

    const displayProducts = products.length > 0 ? products : defaultProducts
    const colors = [
        "bg-green-500",
        "bg-amber-600",
        "bg-gray-400",
        "bg-green-600",
    ]

    if (isEditing) {
        return (
            <div className="space-y-4">
                <h3 className="font-semibold">Edit Best Sellers</h3>
                {displayProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className="grid grid-cols-3 gap-2 p-2 border rounded"
                    >
                        <Input
                            placeholder="Product name"
                            defaultValue={product.name}
                        />
                        <Input
                            placeholder="Price"
                            defaultValue={product.price}
                        />
                        <Input
                            placeholder="Image URL"
                            defaultValue={product.image}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {displayProducts.map((product, index) => (
                    <div key={product.id} className="relative">
                        <div
                            className={`${
                                colors[index % colors.length]
                            } rounded-2xl p-6 text-white relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-32 object-contain relative z-10 mb-4"
                            />
                            <div className="relative z-10">
                                <h3 className="font-medium text-sm mb-1">
                                    {product.name}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold">
                                        {product.price}
                                    </span>
                                    <div className="bg-orange-400 rounded-full p-2">
                                        <span className="text-white text-xs font-bold">
                                            $
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function ProductCollection({
    products,
    isEditing,
    onEdit,
}: ProductGridProps) {
    const defaultProducts: Product[] = [
        {
            id: "1",
            name: "Pump Omni Zone II",
            brand: "Reebok",
            price: "$235",
            image: "/placeholder.svg?height=150&width=150",
        },
        {
            id: "2",
            name: "ULTRABOOST 22",
            brand: "Adidas",
            price: "$190",
            image: "/placeholder.svg?height=150&width=150",
        },
        {
            id: "3",
            name: "Air Zoom Pegasus",
            brand: "Nike",
            price: "$150",
            image: "/placeholder.svg?height=150&width=150",
        },
        {
            id: "4",
            name: "Air Zoom Alphafly",
            brand: "Nike",
            price: "$275",
            image: "/placeholder.svg?height=150&width=150",
        },
    ]

    const displayProducts = products.length > 0 ? products : defaultProducts

    if (isEditing) {
        return (
            <div className="space-y-4">
                <h3 className="font-semibold">Edit Collection</h3>
                {displayProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className="grid grid-cols-4 gap-2 p-2 border rounded"
                    >
                        <Input
                            placeholder="Product name"
                            defaultValue={product.name}
                        />
                        <Input
                            placeholder="Brand"
                            defaultValue={product.brand}
                        />
                        <Input
                            placeholder="Price"
                            defaultValue={product.price}
                        />
                        <Input
                            placeholder="Image URL"
                            defaultValue={product.image}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="bg-gray-100 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    2022 Collection
                </h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {displayProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl p-4 shadow-sm"
                    >
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-32 object-contain"
                            />
                        </div>
                        <div className="space-y-1">
                            <div className="text-lg font-bold text-gray-900">
                                {product.price}
                            </div>
                            <h3 className="font-medium text-gray-800 text-sm">
                                {product.name}
                            </h3>
                            <p className="text-gray-500 text-xs">
                                {product.brand}
                            </p>
                        </div>
                        <div className="flex justify-end mt-3">
                            <Heart className="h-5 w-5 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

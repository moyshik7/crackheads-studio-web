"use client"

interface ShopProduct {
  id: string
  name: string
  price: string
  image: string
  badge?: string
}

const latestProducts: ShopProduct[] = [
  { id: "1", name: "Modern Sneakers", price: "$129", image: "/placeholder.svg?height=200&width=200", badge: "New" },
  { id: "2", name: "Classic Boots", price: "$189", image: "/placeholder.svg?height=200&width=200", badge: "New" },
  { id: "3", name: "Sport Shoes", price: "$99", image: "/placeholder.svg?height=200&width=200", badge: "New" },
  { id: "4", name: "Casual Loafers", price: "$149", image: "/placeholder.svg?height=200&width=200", badge: "New" },
]

const bestsellerProducts: ShopProduct[] = [
  { id: "1", name: "Ultra Boost", price: "$180", image: "/placeholder.svg?height=200&width=200", badge: "Bestseller" },
  { id: "2", name: "Air Max", price: "$160", image: "/placeholder.svg?height=200&width=200", badge: "Bestseller" },
  { id: "3", name: "Stan Smith", price: "$85", image: "/placeholder.svg?height=200&width=200", badge: "Bestseller" },
  { id: "4", name: "Chuck Taylor", price: "$65", image: "/placeholder.svg?height=200&width=200", badge: "Bestseller" },
]

const featuredProducts: ShopProduct[] = [
  {
    id: "1",
    name: "Limited Edition",
    price: "$299",
    image: "/placeholder.svg?height=200&width=200",
    badge: "Featured",
  },
  {
    id: "2",
    name: "Designer Collab",
    price: "$399",
    image: "/placeholder.svg?height=200&width=200",
    badge: "Featured",
  },
  {
    id: "3",
    name: "Premium Leather",
    price: "$249",
    image: "/placeholder.svg?height=200&width=200",
    badge: "Featured",
  },
  { id: "4", name: "Eco Friendly", price: "$179", image: "/placeholder.svg?height=200&width=200", badge: "Featured" },
]

interface ShopSectionProps {
  type: "latest" | "bestsellers" | "featured"
  theme?: any
}

export function ShopSection({ type, theme }: ShopSectionProps) {
  const getProducts = () => {
    switch (type) {
      case "latest":
        return latestProducts
      case "bestsellers":
        return bestsellerProducts
      case "featured":
        return featuredProducts
      default:
        return latestProducts
    }
  }

  const getTitle = () => {
    switch (type) {
      case "latest":
        return "Latest Products"
      case "bestsellers":
        return "Best Sellers"
      case "featured":
        return "Featured Products"
      default:
        return "Products"
    }
  }

  const products = getProducts()

  return (
    <div className="p-6 rounded-lg" style={{ backgroundColor: theme?.colors.background || "#f9fafb" }}>
      <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.colors.text || "#374151" }}>
        {getTitle()}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm border relative">
            {product.badge && (
              <span
                className="absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full text-white"
                style={{ backgroundColor: theme?.colors.accent || "#3b82f6" }}
              >
                {product.badge}
              </span>
            )}
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
            <p className="text-lg font-bold" style={{ color: theme?.colors.primary || "#3b82f6" }}>
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

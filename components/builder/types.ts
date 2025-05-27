export interface PageElement {
  id: string
  type:
    | "hero-classic"
    | "hero-split"
    | "hero-centered"
    | "hero-video"
    | "hero-gradient"
    | "hero-minimal"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "paragraph-full"
    | "paragraph-left-image"
    | "paragraph-right-image"
    | "image"
    | "carousel"
    | "divider-line"
    | "divider-dashed"
    | "divider-wavy"
    | "divider-dots"
    | "divider-zigzag"
    | "shop-latest"
    | "shop-bestsellers"
    | "shop-featured"
    | "cards-carousel"
    | "cards-4-grid"
    | "cards-6-grid"
    | "card-full-width"
    | "product-grid"
    | "product-showcase"
    | "product-collection"
  content: any
  styles?: Record<string, any>
}

export interface PageData {
  elements: PageElement[]
  meta: {
    title: string
    description: string
    url: string
    keywords: string
    author: string
  }
  theme: string
}

export interface DragItem {
  type: string
  id?: string
}

export interface Theme {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
  }
}

export interface CardData {
    id: string
    title: string
    description: string
    image: string
    action?: string
}

export interface CardComponentProps {
    type: "carousel" | "4-grid" | "6-grid" | "full-width"
    theme?: any
}
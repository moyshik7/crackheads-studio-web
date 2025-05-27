"use client"

import { HeroClassic } from "./classic"
import { HeroSplit } from "./split"
import { HeroCentered } from "./centered"
import { HeroVideo } from "./video"
import { HeroGradient } from "./gradient"
import { HeroMinimal } from "./minimal"

interface HeroProps {
  type: "classic" | "split" | "centered" | "video" | "gradient" | "minimal"
  content: any
  isEditing: boolean
  onEdit?: (content: any) => void
  theme?: any
}

export function HeroComponent({ type, content, isEditing, onEdit, theme }: HeroProps) {
  const props = { content, isEditing, onEdit, theme }

  switch (type) {
    case "classic":
      return <HeroClassic {...props} />
    case "split":
      return <HeroSplit {...props} />
    case "centered":
      return <HeroCentered {...props} />
    case "video":
      return <HeroVideo {...props} />
    case "gradient":
      return <HeroGradient {...props} />
    case "minimal":
      return <HeroMinimal {...props} />
    default:
      return null
  }
}

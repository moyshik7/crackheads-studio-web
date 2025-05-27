"use client"

import { useState } from "react"
import type { PageElement } from "./types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, Edit, Check } from "lucide-react"
import { ShopSection } from "./shop-components"
import { CardComponent } from "./card-components"
import { HeroComponent } from "./hero"
import { DividerComponent } from "./divider-components"
import { ImageUpload } from "@/components/builder/upload/images"
import { themes } from "./themes"
import type { JSX } from "react"

interface EditableElementProps {
  element: PageElement
  onUpdate: (id: string, content: any) => void
  onDelete: (id: string) => void
  onMove: (dragIndex: number, hoverIndex: number) => void
  index: number
  theme: string
}

export function EditableElement({ element, onUpdate, onDelete, index, theme }: EditableElementProps) {
  const [isEditing, setIsEditing] = useState(false)

  const currentTheme = themes.find((t) => t.id === theme)

  const handleContentUpdate = (content: any) => {
    console.log("EditableElement - Content update for element:", element.id, content)
    onUpdate(element.id, content)
  }

  const renderElement = () => {
    switch (element.type) {
      case "hero-classic":
      case "hero-split":
      case "hero-centered":
      case "hero-video":
      case "hero-gradient":
      case "hero-minimal":
        const heroType = element.type.replace("hero-", "") as
          | "classic"
          | "split"
          | "centered"
          | "video"
          | "gradient"
          | "minimal"

        console.log(`EditableElement - Rendering ${element.type} with content:`, element.content)

        return (
          <HeroComponent
            type={heroType}
            content={element.content}
            isEditing={isEditing}
            onEdit={handleContentUpdate}
            theme={currentTheme}
          />
        )

      case "divider-line":
      case "divider-dashed":
      case "divider-wavy":
      case "divider-dots":
      case "divider-zigzag":
        const dividerType = element.type.replace("divider-", "") as "line" | "dashed" | "wavy" | "dots" | "zigzag"
        return (
          <DividerComponent
            type={dividerType}
            content={element.content}
            isEditing={isEditing}
            onEdit={handleContentUpdate}
            theme={currentTheme}
          />
        )

      case "image":
        return (
          <div>
            {isEditing ? (
              <div className="space-y-2">
                <Label>Image</Label>
                <ImageUpload
                  value={element.content.src || ""}
                  onChange={(url) => handleContentUpdate({ ...element.content, src: url })}
                  placeholder="Upload image"
                />
                <Label>Alt Text</Label>
                <Input
                  value={element.content.alt || ""}
                  onChange={(e) => handleContentUpdate({ ...element.content, alt: e.target.value })}
                  placeholder="Alt text"
                />
              </div>
            ) : (
              <img
                src={element.content.src || "/placeholder.svg?height=200&width=400"}
                alt={element.content.alt || "Image"}
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
          </div>
        )

      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        const headingLevel = element.type.charAt(1)
        const HeadingTag = element.type as keyof JSX.IntrinsicElements
        return (
          <div>
            {isEditing ? (
              <Input
                value={element.content.text || ""}
                onChange={(e) => handleContentUpdate({ ...element.content, text: e.target.value })}
                placeholder={`Heading ${headingLevel} text`}
                className={`font-bold ${
                  headingLevel === "1"
                    ? "text-4xl"
                    : headingLevel === "2"
                      ? "text-3xl"
                      : headingLevel === "3"
                        ? "text-2xl"
                        : headingLevel === "4"
                          ? "text-xl"
                          : headingLevel === "5"
                            ? "text-lg"
                            : "text-base"
                }`}
              />
            ) : (
              <HeadingTag
                className={`font-bold ${
                  headingLevel === "1"
                    ? "text-4xl"
                    : headingLevel === "2"
                      ? "text-3xl"
                      : headingLevel === "3"
                        ? "text-2xl"
                        : headingLevel === "4"
                          ? "text-xl"
                          : headingLevel === "5"
                            ? "text-lg"
                            : "text-base"
                }`}
              >
                {element.content.text || `Heading ${headingLevel}`}
              </HeadingTag>
            )}
          </div>
        )

      case "paragraph-full":
        return (
          <div>
            {isEditing ? (
              <Textarea
                value={element.content.text || ""}
                onChange={(e) => handleContentUpdate({ ...element.content, text: e.target.value })}
                placeholder="Full width paragraph text"
                rows={4}
              />
            ) : (
              <p className="text-gray-700 leading-relaxed w-full">
                {element.content.text || "This is a full width paragraph. Click edit to customize."}
              </p>
            )}
          </div>
        )

      case "paragraph-left-image":
        return (
          <div className="flex gap-6 items-start">
            <div className="w-48 h-32 flex-shrink-0">
              {isEditing ? (
                <ImageUpload
                  value={element.content.imageSrc || ""}
                  onChange={(url) => handleContentUpdate({ ...element.content, imageSrc: url })}
                  placeholder="Upload image"
                />
              ) : (
                <img
                  src={element.content.imageSrc || "/placeholder.svg?height=128&width=192"}
                  alt="Content"
                  className="w-full h-full object-cover rounded"
                />
              )}
            </div>
            <div className="flex-1">
              {isEditing ? (
                <Textarea
                  value={element.content.text || ""}
                  onChange={(e) => handleContentUpdate({ ...element.content, text: e.target.value })}
                  placeholder="Paragraph text"
                  rows={3}
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {element.content.text || "This is a paragraph with an image on the left."}
                </p>
              )}
            </div>
          </div>
        )

      case "paragraph-right-image":
        return (
          <div className="flex gap-6 items-start">
            <div className="flex-1">
              {isEditing ? (
                <Textarea
                  value={element.content.text || ""}
                  onChange={(e) => handleContentUpdate({ ...element.content, text: e.target.value })}
                  placeholder="Paragraph text"
                  rows={3}
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {element.content.text || "This is a paragraph with an image on the right."}
                </p>
              )}
            </div>
            <div className="w-48 h-32 flex-shrink-0">
              {isEditing ? (
                <ImageUpload
                  value={element.content.imageSrc || ""}
                  onChange={(url) => handleContentUpdate({ ...element.content, imageSrc: url })}
                  placeholder="Upload image"
                />
              ) : (
                <img
                  src={element.content.imageSrc || "/placeholder.svg?height=128&width=192"}
                  alt="Content"
                  className="w-full h-full object-cover rounded"
                />
              )}
            </div>
          </div>
        )

      case "shop-latest":
        return <ShopSection type="latest" theme={currentTheme} />

      case "shop-bestsellers":
        return <ShopSection type="bestsellers" theme={currentTheme} />

      case "shop-featured":
        return <ShopSection type="featured" theme={currentTheme} />

      case "cards-carousel":
        return <CardComponent type="carousel" theme={currentTheme} />

      case "cards-4-grid":
        return <CardComponent type="4-grid" theme={currentTheme} />

      case "cards-6-grid":
        return <CardComponent type="6-grid" theme={currentTheme} />

      case "card-full-width":
        return <CardComponent type="full-width" theme={currentTheme} />

      default:
        return <div>Unknown element type</div>
    }
  }

  return (
    <div className="group relative bg-white rounded-lg border hover:border-blue-300 transition-colors overflow-hidden">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 z-50">
        <Button
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="h-6 w-6 p-0 bg-white text-black hover:bg-gray-100 shadow-lg"
        >
          {isEditing ? <Check className="h-3 w-3" /> : <Edit className="h-3 w-3" />}
        </Button>
        <Button size="sm" variant="destructive" onClick={() => onDelete(element.id)} className="h-6 w-6 p-0 shadow-lg">
          <X className="h-3 w-3" />
        </Button>
      </div>
      {renderElement()}
    </div>
  )
}

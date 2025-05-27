"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "../upload/images"

interface HeroSplitProps {
  content: any
  isEditing: boolean
  onEdit?: (content: any) => void
  theme?: any
}

export function HeroSplit({ content, isEditing, onEdit, theme }: HeroSplitProps) {
  const defaultContent = {
    title: "Build Amazing Websites",
    subtitle: "Create stunning, responsive websites with our powerful drag-and-drop builder",
    buttonText: "Get Started",
    buttonLink: "#",
    image: "/placeholder.svg?height=400&width=600",
  }

  const currentContent = { ...defaultContent, ...content }

  const updateContent = (field: string, value: any) => {
    const newContent = { ...currentContent, [field]: value }
    onEdit?.(newContent)
  }

  return (
    <div className="relative min-h-screen flex">
      <div
        className="flex-1 flex items-center justify-center p-12"
        style={{ backgroundColor: theme?.colors.primary || "#1f2937" }}
      >
        {isEditing ? (
          <div className="space-y-4 w-full max-w-md">
            <div>
              <Label className="text-white">Hero Title</Label>
              <Input
                value={currentContent.title || ""}
                onChange={(e) => updateContent("title", e.target.value)}
                placeholder="Hero Title"
                className="text-white bg-white/20"
              />
            </div>
            <div>
              <Label className="text-white">Subtitle</Label>
              <Textarea
                value={currentContent.subtitle || ""}
                onChange={(e) => updateContent("subtitle", e.target.value)}
                placeholder="Hero Subtitle"
                className="text-white bg-white/20"
                rows={3}
              />
            </div>
            <div>
              <Label className="text-white">Button Text</Label>
              <Input
                value={currentContent.buttonText || ""}
                onChange={(e) => updateContent("buttonText", e.target.value)}
                placeholder="Button Text"
                className="text-white bg-white/20"
              />
            </div>
            <div>
              <Label className="text-white">Button Link</Label>
              <Input
                value={currentContent.buttonLink || ""}
                onChange={(e) => updateContent("buttonLink", e.target.value)}
                placeholder="Button Link"
                className="text-white bg-white/20"
              />
            </div>
            <div>
              <Label className="text-white">Background Image</Label>
              <ImageUpload
                value={currentContent.image || ""}
                onChange={(url) => updateContent("image", url)}
                placeholder="Upload background image"
              />
            </div>
          </div>
        ) : (
          <div className="text-white space-y-8 max-w-md">
            <h1 className="text-5xl font-bold leading-tight">{currentContent.title}</h1>
            <p className="text-xl opacity-90">{currentContent.subtitle}</p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg"
              onClick={() => window.open(currentContent.buttonLink, "_blank")}
            >
              {currentContent.buttonText}
            </Button>
          </div>
        )}
      </div>
      <div
        className="flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${currentContent.image})`,
          backgroundColor: "#f3f4f6",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  )
}

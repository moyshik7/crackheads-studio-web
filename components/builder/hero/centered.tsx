"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface HeroCenteredProps {
  content: any
  isEditing: boolean
  onEdit?: (content: any) => void
  theme?: any
}

export function HeroCentered({ content, isEditing, onEdit, theme }: HeroCenteredProps) {
  const defaultContent = {
    title: "Build Amazing Websites",
    subtitle: "Create stunning, responsive websites with our powerful drag-and-drop builder",
    buttonText: "Get Started",
    buttonLink: "#",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "#",
  }

  const currentContent = { ...defaultContent, ...content }

  const updateContent = (field: string, value: any) => {
    const newContent = { ...currentContent, [field]: value }
    onEdit?.(newContent)
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center px-6"
      style={{
        background: `linear-gradient(135deg, ${theme?.colors.primary || "#3b82f6"}, ${theme?.colors.secondary || "#8b5cf6"})`,
      }}
    >
      <div className="max-w-4xl space-y-8 text-white">
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <Label className="text-white">Hero Title</Label>
              <Input
                value={currentContent.title || ""}
                onChange={(e) => updateContent("title", e.target.value)}
                placeholder="Hero Title"
                className="text-white bg-white/20 text-center text-2xl"
              />
            </div>
            <div>
              <Label className="text-white">Subtitle</Label>
              <Textarea
                value={currentContent.subtitle || ""}
                onChange={(e) => updateContent("subtitle", e.target.value)}
                placeholder="Hero Subtitle"
                className="text-white bg-white/20 text-center"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-white">Primary Button Text</Label>
                <Input
                  value={currentContent.buttonText || ""}
                  onChange={(e) => updateContent("buttonText", e.target.value)}
                  placeholder="Button Text"
                  className="text-white bg-white/20"
                />
              </div>
              <div>
                <Label className="text-white">Primary Button Link</Label>
                <Input
                  value={currentContent.buttonLink || ""}
                  onChange={(e) => updateContent("buttonLink", e.target.value)}
                  placeholder="Button Link"
                  className="text-white bg-white/20"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-white">Secondary Button Text</Label>
                <Input
                  value={currentContent.secondaryButtonText || ""}
                  onChange={(e) => updateContent("secondaryButtonText", e.target.value)}
                  placeholder="Secondary Button Text"
                  className="text-white bg-white/20"
                />
              </div>
              <div>
                <Label className="text-white">Secondary Button Link</Label>
                <Input
                  value={currentContent.secondaryButtonLink || ""}
                  onChange={(e) => updateContent("secondaryButtonLink", e.target.value)}
                  placeholder="Secondary Button Link"
                  className="text-white bg-white/20"
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">{currentContent.title}</h1>
            <p className="text-2xl opacity-90 max-w-2xl mx-auto">{currentContent.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg"
                onClick={() => window.open(currentContent.buttonLink, "_blank")}
              >
                {currentContent.buttonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => window.open(currentContent.secondaryButtonLink, "_blank")}
              >
                {currentContent.secondaryButtonText}
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

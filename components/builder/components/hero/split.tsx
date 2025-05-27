"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/builder/upload/image"

interface HeroSplitProps {
    content: any
    isEditing: boolean
    onEdit?: (content: any) => void
    theme?: any
}

export function HeroSplit({
    content,
    isEditing,
    onEdit,
    theme,
}: HeroSplitProps) {
    const [editContent, setEditContent] = useState(content)

    useEffect(() => {
        setEditContent({ ...content })
    }, [content])

    const defaultContent = {
        title: "Build Amazing Websites",
        subtitle:
            "Create stunning, responsive websites with our powerful drag-and-drop builder",
        buttonText: "Get Started",
        buttonLink: "#",
        image: "/placeholder.svg?height=400&width=600",
    }

    const currentContent = { ...defaultContent, ...editContent }

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
                                value={editContent.title || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        title: e.target.value,
                                    })
                                }
                                placeholder="Hero Title"
                                className="text-white bg-white/20"
                            />
                        </div>
                        <div>
                            <Label className="text-white">Subtitle</Label>
                            <Textarea
                                value={editContent.subtitle || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        subtitle: e.target.value,
                                    })
                                }
                                placeholder="Hero Subtitle"
                                className="text-white bg-white/20"
                                rows={3}
                            />
                        </div>
                        <div>
                            <Label className="text-white">Button Text</Label>
                            <Input
                                value={editContent.buttonText || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        buttonText: e.target.value,
                                    })
                                }
                                placeholder="Button Text"
                                className="text-white bg-white/20"
                            />
                        </div>
                        <div>
                            <Label className="text-white">Button Link</Label>
                            <Input
                                value={editContent.buttonLink || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        buttonLink: e.target.value,
                                    })
                                }
                                placeholder="Button Link"
                                className="text-white bg-white/20"
                            />
                        </div>
                        <div>
                            <Label className="text-white">
                                Background Image
                            </Label>
                            <ImageUpload
                                value={editContent.image || ""}
                                onChange={(url) => {
                                    const newContent = {
                                        ...editContent,
                                        image: url,
                                    }
                                    setEditContent(newContent)
                                    onEdit?.(newContent)
                                }}
                                placeholder="Upload background image"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="text-white space-y-8 max-w-md">
                        <h1 className="text-5xl font-bold leading-tight">
                            {currentContent.title}
                        </h1>
                        <p className="text-xl opacity-90">
                            {currentContent.subtitle}
                        </p>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="px-8 py-4 text-lg"
                            onClick={() =>
                                window.open(currentContent.buttonLink, "_blank")
                            }
                        >
                            {currentContent.buttonText}
                        </Button>
                    </div>
                )}
            </div>
            <div
                className="flex-1 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${currentContent.image})` }}
                key={currentContent.image}
            >
                <div className="absolute inset-0 bg-black/20" />
            </div>
        </div>
    )
}

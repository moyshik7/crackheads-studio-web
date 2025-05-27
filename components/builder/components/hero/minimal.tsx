"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/builder/upload/image"

interface HeroMinimalProps {
    content: any
    isEditing: boolean
    onEdit?: (content: any) => void
    theme?: any
}

export function HeroMinimal({
    content,
    isEditing,
    onEdit,
    theme,
}: HeroMinimalProps) {
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
        <div
            className="relative min-h-screen flex items-center justify-center px-6"
            style={{ backgroundColor: theme?.colors.background || "#ffffff" }}
        >
            <div className="max-w-4xl text-center space-y-12">
                {isEditing ? (
                    <div className="space-y-4">
                        <div>
                            <Label>Hero Title</Label>
                            <Input
                                value={editContent.title || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        title: e.target.value,
                                    })
                                }
                                placeholder="Hero Title"
                                className="text-center text-2xl"
                            />
                        </div>
                        <div>
                            <Label>Subtitle</Label>
                            <Textarea
                                value={editContent.subtitle || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        subtitle: e.target.value,
                                    })
                                }
                                placeholder="Hero Subtitle"
                                className="text-center"
                                rows={3}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Button Text</Label>
                                <Input
                                    value={editContent.buttonText || ""}
                                    onChange={(e) =>
                                        setEditContent({
                                            ...editContent,
                                            buttonText: e.target.value,
                                        })
                                    }
                                    placeholder="Button Text"
                                />
                            </div>
                            <div>
                                <Label>Button Link</Label>
                                <Input
                                    value={editContent.buttonLink || ""}
                                    onChange={(e) =>
                                        setEditContent({
                                            ...editContent,
                                            buttonLink: e.target.value,
                                        })
                                    }
                                    placeholder="Button Link"
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Hero Image</Label>
                            <ImageUpload
                                value={editContent.image || ""}
                                onChange={(url: string) => {
                                    const newContent = {
                                        ...editContent,
                                        image: url,
                                    }
                                    setEditContent(newContent)
                                    onEdit?.(newContent)
                                }}
                                placeholder="Upload hero image"
                            />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-6">
                            <h1
                                className="text-6xl lg:text-7xl font-light leading-tight"
                                style={{
                                    color: theme?.colors.text || "#1f2937",
                                }}
                            >
                                {currentContent.title}
                            </h1>
                            <p
                                className="text-xl max-w-2xl mx-auto"
                                style={{
                                    color: theme?.colors.text || "#6b7280",
                                }}
                            >
                                {currentContent.subtitle}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-12 py-4 text-lg rounded-full border-2"
                                style={{
                                    borderColor:
                                        theme?.colors.primary || "#3b82f6",
                                    color: theme?.colors.primary || "#3b82f6",
                                }}
                                onClick={() =>
                                    window.open(
                                        currentContent.buttonLink,
                                        "_blank"
                                    )
                                }
                            >
                                {currentContent.buttonText}
                            </Button>
                        </div>
                        <div className="pt-12">
                            <img
                                src={currentContent.image || "/placeholder.svg"}
                                alt="Hero"
                                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
                                key={currentContent.image}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

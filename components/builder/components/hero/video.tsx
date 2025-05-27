"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Play } from "lucide-react"
import { ImageUpload } from "@/components/builder/upload/image"

interface HeroVideoProps {
    content: any
    isEditing: boolean
    onEdit?: (content: any) => void
    theme?: any
}

export function HeroVideo({
    content,
    isEditing,
    onEdit,
    theme,
}: HeroVideoProps) {
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
        <div className="relative min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentContent.image})` }}
                key={currentContent.image}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
                <div className="max-w-4xl space-y-8 text-white">
                    {isEditing ? (
                        <div className="space-y-4">
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
                                    className="text-white bg-white/20 text-center text-2xl"
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
                                    className="text-white bg-white/20 text-center"
                                    rows={3}
                                />
                            </div>
                            <div>
                                <Label className="text-white">
                                    Button Text
                                </Label>
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
                                <Label className="text-white">
                                    Button Link
                                </Label>
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
                        <>
                            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                                {currentContent.title}
                            </h1>
                            <p className="text-2xl opacity-90 max-w-2xl mx-auto">
                                {currentContent.subtitle}
                            </p>
                            <div className="flex items-center justify-center gap-6">
                                <Button
                                    size="lg"
                                    className="px-8 py-4 text-lg"
                                    onClick={() =>
                                        window.open(
                                            currentContent.buttonLink,
                                            "_blank"
                                        )
                                    }
                                >
                                    {currentContent.buttonText}
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="text-white hover:bg-white/20"
                                >
                                    <Play className="h-6 w-6 mr-2" />
                                    Watch Demo
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

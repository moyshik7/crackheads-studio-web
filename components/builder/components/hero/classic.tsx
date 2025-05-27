"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Star } from "lucide-react"
import { ImageUpload } from "@/components/builder/upload/image"

interface HeroClassicProps {
    content: any
    isEditing: boolean
    onEdit?: (content: any) => void
    theme?: any
}

export function HeroClassic({
    content,
    isEditing,
    onEdit,
    theme,
}: HeroClassicProps) {
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
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "#",
        image: "/placeholder.svg?height=400&width=600",
        stats: [
            { label: "Happy Customers", value: "10K+" },
            { label: "Projects Built", value: "50K+" },
            { label: "Success Rate", value: "99%" },
        ],
    }

    const currentContent = { ...defaultContent, ...editContent }

    return (
        <div
            className="relative overflow-hidden rounded-2xl"
            style={{ backgroundColor: theme?.colors.background || "#f8fafc" }}
        >
            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
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
                                        className="text-2xl font-bold"
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
                                        rows={3}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Primary Button Text</Label>
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
                                        <Label>Primary Button Link</Label>
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
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Secondary Button Text</Label>
                                        <Input
                                            value={
                                                editContent.secondaryButtonText ||
                                                ""
                                            }
                                            onChange={(e) =>
                                                setEditContent({
                                                    ...editContent,
                                                    secondaryButtonText:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder="Secondary Button Text"
                                        />
                                    </div>
                                    <div>
                                        <Label>Secondary Button Link</Label>
                                        <Input
                                            value={
                                                editContent.secondaryButtonLink ||
                                                ""
                                            }
                                            onChange={(e) =>
                                                setEditContent({
                                                    ...editContent,
                                                    secondaryButtonLink:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder="Secondary Button Link"
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
                                <div className="space-y-4">
                                    <h1
                                        className="text-5xl lg:text-6xl font-bold leading-tight"
                                        style={{
                                            color:
                                                theme?.colors.text || "#1f2937",
                                        }}
                                    >
                                        {currentContent.title}
                                    </h1>
                                    <p
                                        className="text-xl leading-relaxed"
                                        style={{
                                            color:
                                                theme?.colors.text || "#6b7280",
                                        }}
                                    >
                                        {currentContent.subtitle}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="px-8 py-4 text-lg"
                                        style={{
                                            backgroundColor:
                                                theme?.colors.primary ||
                                                "#3b82f6",
                                        }}
                                        onClick={() =>
                                            window.open(
                                                currentContent.buttonLink,
                                                "_blank"
                                            )
                                        }
                                    >
                                        {currentContent.buttonText}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="px-8 py-4 text-lg"
                                        onClick={() =>
                                            window.open(
                                                currentContent.secondaryButtonLink,
                                                "_blank"
                                            )
                                        }
                                    >
                                        {currentContent.secondaryButtonText}
                                    </Button>
                                </div>
                                <div className="flex items-center gap-8 pt-8">
                                    {currentContent.stats.map(
                                        (stat: any, index: number) => (
                                            <div
                                                key={index}
                                                className="text-center"
                                            >
                                                <div
                                                    className="text-2xl font-bold"
                                                    style={{
                                                        color:
                                                            theme?.colors
                                                                .primary ||
                                                            "#3b82f6",
                                                    }}
                                                >
                                                    {stat.value}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="relative">
                        <img
                            src={currentContent.image || "/placeholder.svg"}
                            alt="Hero"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                            key={currentContent.image}
                        />
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                            <Star className="h-12 w-12 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

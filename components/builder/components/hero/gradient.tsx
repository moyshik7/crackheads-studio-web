"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Users, Award, Zap, Star } from "lucide-react"

interface HeroGradientProps {
    content: any
    isEditing: boolean
    onEdit?: (content: any) => void
    theme?: any
}

export function HeroGradient({
    content,
    isEditing,
    onEdit,
    theme,
}: HeroGradientProps) {
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
    }

    const currentContent = { ...defaultContent, ...editContent }

    return (
        <div
            className="relative min-h-screen overflow-hidden"
            style={{
                background: `linear-gradient(45deg, ${
                    theme?.colors.primary || "#3b82f6"
                }, ${theme?.colors.accent || "#8b5cf6"}, ${
                    theme?.colors.secondary || "#f59e0b"
                })`,
                backgroundSize: "400% 400%",
                animation: "gradient 15s ease infinite",
            }}
        >
            <style jsx>{`
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-8 text-white">
                        {isEditing ? (
                            <div className="space-y-4">
                                <div>
                                    <Label className="text-white">
                                        Hero Title
                                    </Label>
                                    <Input
                                        value={editContent.title || ""}
                                        onChange={(e) =>
                                            setEditContent({
                                                ...editContent,
                                                title: e.target.value,
                                            })
                                        }
                                        placeholder="Hero Title"
                                        className="text-white bg-white/20 text-2xl"
                                    />
                                </div>
                                <div>
                                    <Label className="text-white">
                                        Subtitle
                                    </Label>
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
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-white">
                                            Primary Button Text
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
                                            Primary Button Link
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
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-white">
                                            Secondary Button Text
                                        </Label>
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
                                            className="text-white bg-white/20"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-white">
                                            Secondary Button Link
                                        </Label>
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
                                            className="text-white bg-white/20"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                    {currentContent.title}
                                </h1>
                                <p className="text-xl opacity-90">
                                    {currentContent.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        variant="secondary"
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
                                        variant="outline"
                                        className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900"
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
                            </>
                        )}
                    </div>
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center text-white">
                                    <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
                                    <div className="text-2xl font-bold">
                                        10K+
                                    </div>
                                    <div className="text-sm opacity-80">
                                        Users
                                    </div>
                                </div>
                                <div className="text-center text-white">
                                    <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                                    <div className="text-2xl font-bold">
                                        99%
                                    </div>
                                    <div className="text-sm opacity-80">
                                        Success
                                    </div>
                                </div>
                                <div className="text-center text-white">
                                    <Zap className="h-12 w-12 mx-auto mb-4 opacity-80" />
                                    <div className="text-2xl font-bold">
                                        Fast
                                    </div>
                                    <div className="text-sm opacity-80">
                                        Performance
                                    </div>
                                </div>
                                <div className="text-center text-white">
                                    <Star className="h-12 w-12 mx-auto mb-4 opacity-80" />
                                    <div className="text-2xl font-bold">
                                        5.0
                                    </div>
                                    <div className="text-sm opacity-80">
                                        Rating
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

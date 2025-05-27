"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Play, ArrowRight, Star, Users, Award, Zap } from "lucide-react"
import { ImageUpload } from "@/components/builder/upload/image"

interface HeroProps {
    type: "classic" | "split" | "centered" | "video" | "gradient" | "minimal"
    content: any
    isEditing: boolean
    onEdit?: (content: any) => void
    theme?: any
}

export function HeroComponent({
    type,
    content,
    isEditing,
    onEdit,
    theme,
}: HeroProps) {
    const [editContent, setEditContent] = useState(content)

    useEffect(() => {
        setEditContent({ ...defaultContent, ...content })
    }, [content])

    const handleSave = () => {
        onEdit?.(editContent)
        // Force component re-render by updating local state
        setEditContent({ ...editContent })
    }

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

    const currentContent = { ...defaultContent, ...content }

    if (type === "classic") {
        return (
            <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                    backgroundColor: theme?.colors.background || "#f8fafc",
                }}
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
                                                value={
                                                    editContent.buttonText || ""
                                                }
                                                onChange={(e) =>
                                                    setEditContent({
                                                        ...editContent,
                                                        buttonText:
                                                            e.target.value,
                                                    })
                                                }
                                                placeholder="Button Text"
                                            />
                                        </div>
                                        <div>
                                            <Label>Primary Button Link</Label>
                                            <Input
                                                value={
                                                    editContent.buttonLink || ""
                                                }
                                                onChange={(e) =>
                                                    setEditContent({
                                                        ...editContent,
                                                        buttonLink:
                                                            e.target.value,
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
                                            onChange={(url) =>
                                                setEditContent({
                                                    ...editContent,
                                                    image: url,
                                                })
                                            }
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
                                                    theme?.colors.text ||
                                                    "#1f2937",
                                            }}
                                        >
                                            {currentContent.title}
                                        </h1>
                                        <p
                                            className="text-xl leading-relaxed"
                                            style={{
                                                color:
                                                    theme?.colors.text ||
                                                    "#6b7280",
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

    if (type === "split") {
        return (
            <div className="relative min-h-screen flex">
                <div
                    className="flex-1 flex items-center justify-center p-12"
                    style={{
                        backgroundColor: theme?.colors.primary || "#1f2937",
                    }}
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
                                    onChange={(url) =>
                                        setEditContent({
                                            ...editContent,
                                            image: url,
                                        })
                                    }
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
                                    window.open(
                                        currentContent.buttonLink,
                                        "_blank"
                                    )
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
                >
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </div>
        )
    }

    if (type === "centered") {
        return (
            <div
                className="relative min-h-screen flex items-center justify-center text-center px-6"
                style={{
                    background: `linear-gradient(135deg, ${
                        theme?.colors.primary || "#3b82f6"
                    }, ${theme?.colors.secondary || "#8b5cf6"})`,
                }}
            >
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
                            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                                {currentContent.title}
                            </h1>
                            <p className="text-2xl opacity-90 max-w-2xl mx-auto">
                                {currentContent.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </div>
        )
    }

    if (type === "video") {
        return (
            <div className="relative min-h-screen overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentContent.image})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
                    <div className="max-w-4xl space-y-8 text-white">
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
                                        className="text-white bg-white/20 text-center text-2xl"
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
                                        onChange={(url) =>
                                            setEditContent({
                                                ...editContent,
                                                image: url,
                                            })
                                        }
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

    if (type === "gradient") {
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
                                                value={
                                                    editContent.buttonText || ""
                                                }
                                                onChange={(e) =>
                                                    setEditContent({
                                                        ...editContent,
                                                        buttonText:
                                                            e.target.value,
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
                                                value={
                                                    editContent.buttonLink || ""
                                                }
                                                onChange={(e) =>
                                                    setEditContent({
                                                        ...editContent,
                                                        buttonLink:
                                                            e.target.value,
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

    if (type === "minimal") {
        return (
            <div
                className="relative min-h-screen flex items-center justify-center px-6"
                style={{
                    backgroundColor: theme?.colors.background || "#ffffff",
                }}
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
                                    onChange={(url) =>
                                        setEditContent({
                                            ...editContent,
                                            image: url,
                                        })
                                    }
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
                                        color:
                                            theme?.colors.primary || "#3b82f6",
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
                                    src={
                                        currentContent.image ||
                                        "/placeholder.svg"
                                    }
                                    alt="Hero"
                                    className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    }

    return null
}

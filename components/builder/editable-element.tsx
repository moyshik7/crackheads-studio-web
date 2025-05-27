"use client"

import { useState, useEffect } from "react"
import type { PageElement } from "@/types/main"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Edit, Check } from "lucide-react"
import {
    ProductGrid,
    ProductShowcase,
    ProductCollection,
} from "./product-components"
import { ShopSection } from "./shop-components"
import { CardComponent } from "./card-components"
import { HeroComponent } from "./hero-components"
import { DividerComponent } from "./divider-components"
import { ImageUpload } from "@/components/builder/upload/image"
import { Label } from "@/components/ui/label"
import { themes } from "@/data/themes"
import type { JSX } from "react"

interface EditableElementProps {
    element: PageElement
    onUpdate: (id: string, content: any) => void
    onDelete: (id: string) => void
    onMove: (dragIndex: number, hoverIndex: number) => void
    index: number
    theme: string
}

export function EditableElement({
    element,
    onUpdate,
    onDelete,
    index,
    theme,
}: EditableElementProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editContent, setEditContent] = useState(element.content)

    useEffect(() => {
        setEditContent(element.content)
    }, [element.content])

    const currentTheme = themes.find((t) => t.id === theme)

    const handleSave = () => {
        onUpdate(element.id, editContent)
        setIsEditing(false)
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
                return (
                    <HeroComponent
                        type={heroType}
                        content={element.content}
                        isEditing={isEditing}
                        onEdit={(content) => {
                            setEditContent(content)
                            onUpdate(element.id, content)
                        }}
                        theme={currentTheme}
                    />
                )

            case "divider-line":
            case "divider-dashed":
            case "divider-wavy":
            case "divider-dots":
            case "divider-zigzag":
                const dividerType = element.type.replace("divider-", "") as
                    | "line"
                    | "dashed"
                    | "wavy"
                    | "dots"
                    | "zigzag"
                return (
                    <DividerComponent
                        type={dividerType}
                        content={element.content}
                        isEditing={isEditing}
                        onEdit={(content) => setEditContent(content)}
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
                                    value={editContent.src || ""}
                                    onChange={(url) =>
                                        setEditContent({
                                            ...editContent,
                                            src: url,
                                        })
                                    }
                                    placeholder="Upload image"
                                />
                                <Label>Alt Text</Label>
                                <Input
                                    value={editContent.alt || ""}
                                    onChange={(e) =>
                                        setEditContent({
                                            ...editContent,
                                            alt: e.target.value,
                                        })
                                    }
                                    placeholder="Alt text"
                                />
                            </div>
                        ) : (
                            <img
                                src={
                                    element.content.src ||
                                    "/placeholder.svg?height=200&width=400"
                                }
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
                                value={editContent.text || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        text: e.target.value,
                                    })
                                }
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
                                {element.content.text ||
                                    `Heading ${headingLevel}`}
                            </HeadingTag>
                        )}
                    </div>
                )

            case "paragraph-full":
                return (
                    <div>
                        {isEditing ? (
                            <Textarea
                                value={editContent.text || ""}
                                onChange={(e) =>
                                    setEditContent({
                                        ...editContent,
                                        text: e.target.value,
                                    })
                                }
                                placeholder="Full width paragraph text"
                                rows={4}
                            />
                        ) : (
                            <p className="text-gray-700 leading-relaxed w-full">
                                {element.content.text ||
                                    "This is a full width paragraph. Click edit to customize."}
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
                                    value={editContent.imageSrc || ""}
                                    onChange={(url) =>
                                        setEditContent({
                                            ...editContent,
                                            imageSrc: url,
                                        })
                                    }
                                    placeholder="Upload image"
                                />
                            ) : (
                                <img
                                    src={
                                        element.content.imageSrc ||
                                        "/placeholder.svg?height=128&width=192"
                                    }
                                    alt="Content"
                                    className="w-full h-full object-cover rounded"
                                />
                            )}
                        </div>
                        <div className="flex-1">
                            {isEditing ? (
                                <Textarea
                                    value={editContent.text || ""}
                                    onChange={(e) =>
                                        setEditContent({
                                            ...editContent,
                                            text: e.target.value,
                                        })
                                    }
                                    placeholder="Paragraph text"
                                    rows={3}
                                />
                            ) : (
                                <p className="text-gray-700 leading-relaxed">
                                    {element.content.text ||
                                        "This is a paragraph with an image on the left."}
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
                                    value={editContent.text || ""}
                                    onChange={(e) =>
                                        setEditContent({
                                            ...editContent,
                                            text: e.target.value,
                                        })
                                    }
                                    placeholder="Paragraph text"
                                    rows={3}
                                />
                            ) : (
                                <p className="text-gray-700 leading-relaxed">
                                    {element.content.text ||
                                        "This is a paragraph with an image on the right."}
                                </p>
                            )}
                        </div>
                        <div className="w-48 h-32 flex-shrink-0">
                            {isEditing ? (
                                <ImageUpload
                                    value={editContent.imageSrc || ""}
                                    onChange={(url) =>
                                        setEditContent({
                                            ...editContent,
                                            imageSrc: url,
                                        })
                                    }
                                    placeholder="Upload image"
                                />
                            ) : (
                                <img
                                    src={
                                        element.content.imageSrc ||
                                        "/placeholder.svg?height=128&width=192"
                                    }
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
                {isEditing ? (
                    <Button
                        size="sm"
                        onClick={handleSave}
                        className="h-6 w-6 p-0 bg-white text-black hover:bg-gray-100 shadow-lg"
                    >
                        <Check className="h-3 w-3" />
                    </Button>
                ) : (
                    <Button
                        size="sm"
                        onClick={() => setIsEditing(true)}
                        className="h-6 w-6 p-0 bg-white text-black hover:bg-gray-100 shadow-lg"
                    >
                        <Edit className="h-3 w-3" />
                    </Button>
                )}
                <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(element.id)}
                    className="h-6 w-6 p-0 shadow-lg"
                >
                    <X className="h-3 w-3" />
                </Button>
            </div>
            {renderElement()}
        </div>
    )
}

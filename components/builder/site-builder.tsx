"use client"

import { useState, useCallback } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { LeftSidebar } from "./left-sidebar"
import { RightSidebar } from "./right-sidebar"
import { DroppableCanvas } from "./droppable-canvas"
import { EditableElement } from "./editable-element"
import type { PageData, PageElement, DragItem } from "@/types/main"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { MobileElementSelector } from "./mobile-element-selector"
import { MobileSaveDialog } from "./mobile-save-dialog"
import { MobileSaveButton } from "./mobile-save-button"

export default function WebsiteBuilder() {
    const [pageData, setPageData] = useState<PageData>({
        elements: [],
        meta: {
            title: "My New Page",
            description: "A page created with the website builder",
            url: "/my-new-page",
            keywords: "",
            author: "",
        },
        theme: "soft-pink",
    })

    const [isSaving, setIsSaving] = useState(false)
    const [isPreview, setIsPreview] = useState(false)
    const [showMobileSaveDialog, setShowMobileSaveDialog] = useState(false)

    const generateId = () => Math.random().toString(36).substr(2, 9)

    const handleDrop = useCallback((item: DragItem | { type: string }) => {
        const elementType = typeof item === "string" ? item : item.type
        const newElement: PageElement = {
            id: generateId(),
            type: elementType as any,
            content: getDefaultContent(elementType),
        }

        setPageData((prev) => ({
            ...prev,
            elements: [...prev.elements, newElement],
        }))
    }, [])

    const getDefaultContent = (type: string) => {
        switch (type) {
            case "hero-classic":
            case "hero-split":
            case "hero-centered":
            case "hero-video":
            case "hero-gradient":
            case "hero-minimal":
                return {
                    title: "Build Amazing Websites",
                    subtitle:
                        "Create stunning, responsive websites with our powerful drag-and-drop builder",
                    buttonText: "Get Started",
                    secondaryButtonText: "Learn More",
                    image: "/placeholder.svg?height=400&width=600",
                }
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
                return { text: `Heading ${type.charAt(1)}` }
            case "paragraph-full":
                return {
                    text: "This is a full width paragraph. Click edit to customize.",
                }
            case "paragraph-left-image":
            case "paragraph-right-image":
                return {
                    text: "This is a paragraph with an image.",
                    imageSrc: "/placeholder.svg?height=128&width=192",
                }
            case "image":
                return {
                    src: "/placeholder.svg?height=200&width=400",
                    alt: "Placeholder image",
                }
            case "shop-latest":
            case "shop-bestsellers":
            case "shop-featured":
            case "cards-carousel":
            case "cards-4-grid":
            case "cards-6-grid":
            case "card-full-width":
                return {}
            default:
                return {}
        }
    }

    const handleElementUpdate = useCallback((id: string, content: any) => {
        setPageData((prev) => ({
            ...prev,
            elements: prev.elements.map((el) =>
                el.id === id ? { ...el, content } : el
            ),
        }))
    }, [])

    const handleElementDelete = useCallback((id: string) => {
        setPageData((prev) => ({
            ...prev,
            elements: prev.elements.filter((el) => el.id !== id),
        }))
    }, [])

    const handleMetaUpdate = useCallback((meta: PageData["meta"]) => {
        setPageData((prev) => ({ ...prev, meta }))
    }, [])

    const handleThemeChange = useCallback((themeId: string) => {
        setPageData((prev) => ({ ...prev, theme: themeId }))
    }, [])

    const handleSave = async () => {
        setIsSaving(true)
        try {
            const response = await fetch("/api/save-page", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pageData),
            })

            if (response.ok) {
                console.log("Page saved successfully!")
            } else {
                console.error("Failed to save page")
            }
        } catch (error) {
            console.error("Error saving page:", error)
        } finally {
            setIsSaving(false)
        }
    }

    const moveElement = useCallback((dragIndex: number, hoverIndex: number) => {
        setPageData((prev) => {
            const newElements = [...prev.elements]
            const draggedElement = newElements[dragIndex]
            newElements.splice(dragIndex, 1)
            newElements.splice(hoverIndex, 0, draggedElement)
            return { ...prev, elements: newElements }
        })
    }, [])

    const isMobile = useIsMobile()

    if (isPreview) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-white border-b p-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold">
                        Preview: {pageData.meta.title}
                    </h1>
                    <Button onClick={() => setIsPreview(false)}>
                        Exit Preview
                    </Button>
                </div>
                <div className="space-y-0">
                    {pageData.elements.map((element) => (
                        <div key={element.id}>
                            <EditableElement
                                element={element}
                                onUpdate={() => {}}
                                onDelete={() => {}}
                                onMove={() => {}}
                                index={0}
                                theme={pageData.theme}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex min-h-screen bg-gray-100 font-sans">
                {/* Desktop Layout */}
                {!isMobile && (
                    <>
                        <LeftSidebar />
                        <div className="flex-1 flex flex-col">
                            <div className="bg-white border-b p-4 flex justify-between items-center">
                                <h1 className="text-xl font-semibold text-gray-800">
                                    Website Builder
                                </h1>
                                <Button
                                    onClick={() => setIsPreview(true)}
                                    variant="outline"
                                >
                                    <Eye className="h-4 w-4 mr-2" />
                                    Preview
                                </Button>
                            </div>
                            <DroppableCanvas
                                onDrop={handleDrop}
                                className="flex-1 p-6 pb-40 bg-slate-500"
                            >
                                <div className="max-w-6xl mx-auto space-y-4">
                                    {pageData.elements.length === 0 ? (
                                        <div className="text-center py-20 text-gray-500">
                                            <p className="text-lg">
                                                Drag components from the sidebar
                                                to start building your page
                                            </p>
                                        </div>
                                    ) : (
                                        pageData.elements.map(
                                            (element, index) => (
                                                <EditableElement
                                                    key={element.id}
                                                    element={element}
                                                    index={index}
                                                    onUpdate={
                                                        handleElementUpdate
                                                    }
                                                    onDelete={
                                                        handleElementDelete
                                                    }
                                                    onMove={moveElement}
                                                    theme={pageData.theme}
                                                />
                                            )
                                        )
                                    )}
                                </div>
                            </DroppableCanvas>
                        </div>
                        <RightSidebar
                            pageData={pageData}
                            onMetaUpdate={handleMetaUpdate}
                            onThemeChange={handleThemeChange}
                            onSave={handleSave}
                            isSaving={isSaving}
                        />
                    </>
                )}

                {/* Mobile Layout */}
                {isMobile && (
                    <div className="flex-1 flex flex-col">
                        <div className="bg-white border-b p-4 flex justify-between items-center">
                            <h1 className="text-lg font-semibold text-gray-800">
                                Website Builder
                            </h1>
                            <Button
                                onClick={() => setIsPreview(true)}
                                variant="outline"
                                size="sm"
                            >
                                <Eye className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto">
                            <div className="space-y-4 pb-20">
                                {pageData.elements.length === 0 ? (
                                    <div className="text-center py-20 text-gray-500">
                                        <p className="text-base">
                                            Tap the + button to add components
                                        </p>
                                    </div>
                                ) : (
                                    pageData.elements.map((element, index) => (
                                        <EditableElement
                                            key={element.id}
                                            element={element}
                                            index={index}
                                            onUpdate={handleElementUpdate}
                                            onDelete={handleElementDelete}
                                            onMove={moveElement}
                                            theme={pageData.theme}
                                        />
                                    ))
                                )}
                            </div>
                        </div>

                        <MobileElementSelector onAddElement={handleDrop} />
                        <MobileSaveButton
                            onClick={() => setShowMobileSaveDialog(true)}
                            isSaving={isSaving}
                        />
                        <MobileSaveDialog
                            isOpen={showMobileSaveDialog}
                            onClose={() => setShowMobileSaveDialog(false)}
                            pageData={pageData}
                            onMetaUpdate={handleMetaUpdate}
                            onThemeChange={handleThemeChange}
                            onSave={handleSave}
                            isSaving={isSaving}
                        />
                    </div>
                )}
            </div>
        </DndProvider>
    )
}

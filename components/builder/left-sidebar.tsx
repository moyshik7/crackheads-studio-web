"use client"

import { useState } from "react"
import { DraggableComponent } from "./draggable-component"
import {
  Type,
  ImageIcon,
  Layout,
  ShoppingBag,
  CreditCard,
  ChevronDown,
  ChevronRight,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  Grid3X3,
  RotateCcw,
  Square,
  Sparkles,
  Monitor,
  Play,
  Palette,
  Minus,
  SeparatorVerticalIcon as Separator,
} from "lucide-react"

export function LeftSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["hero"])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const sections = [
    {
      id: "hero",
      title: "Hero Sections",
      icon: Sparkles,
      components: [
        { type: "hero-classic", icon: Layout, label: "Classic Hero" },
        { type: "hero-split", icon: Monitor, label: "Split Screen" },
        { type: "hero-centered", icon: Sparkles, label: "Centered" },
        { type: "hero-video", icon: Play, label: "Video Hero" },
        { type: "hero-gradient", icon: Palette, label: "Gradient" },
        { type: "hero-minimal", icon: Minus, label: "Minimal" },
      ],
    },
    {
      id: "headings",
      title: "Headings",
      icon: Heading1,
      components: [
        { type: "h1", icon: Heading1, label: "Heading 1" },
        { type: "h2", icon: Heading2, label: "Heading 2" },
        { type: "h3", icon: Heading3, label: "Heading 3" },
        { type: "h4", icon: Type, label: "Heading 4" },
        { type: "h5", icon: Type, label: "Heading 5" },
        { type: "h6", icon: Type, label: "Heading 6" },
      ],
    },
    {
      id: "paragraphs",
      title: "Paragraphs",
      icon: AlignLeft,
      components: [
        { type: "paragraph-full", icon: AlignLeft, label: "Full Width" },
        { type: "paragraph-left-image", icon: Layout, label: "Left Image" },
        { type: "paragraph-right-image", icon: Layout, label: "Right Image" },
      ],
    },
    {
      id: "images",
      title: "Images",
      icon: ImageIcon,
      components: [{ type: "image", icon: ImageIcon, label: "Single Image" }],
    },
    {
      id: "dividers",
      title: "Dividers",
      icon: Separator,
      components: [
        { type: "divider-line", icon: Minus, label: "Solid Line" },
        { type: "divider-dashed", icon: Minus, label: "Dashed Line" },
        { type: "divider-wavy", icon: Minus, label: "Wavy Line" },
        { type: "divider-dots", icon: Minus, label: "Dotted Line" },
        { type: "divider-zigzag", icon: Minus, label: "Zigzag Line" },
      ],
    },
    {
      id: "shop",
      title: "Shop",
      icon: ShoppingBag,
      components: [
        { type: "shop-latest", icon: ShoppingBag, label: "Latest Products" },
        { type: "shop-bestsellers", icon: ShoppingBag, label: "Best Sellers" },
        { type: "shop-featured", icon: ShoppingBag, label: "Featured" },
      ],
    },
    {
      id: "cards",
      title: "Cards",
      icon: CreditCard,
      components: [
        { type: "cards-carousel", icon: RotateCcw, label: "Card Carousel" },
        { type: "cards-4-grid", icon: Grid3X3, label: "4 Cards Grid" },
        { type: "cards-6-grid", icon: Grid3X3, label: "6 Cards Grid" },
        { type: "card-full-width", icon: Square, label: "Full Width Card" },
      ],
    },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Components</h2>
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2">
                <section.icon className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{section.title}</span>
              </div>
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>

            {expandedSections.includes(section.id) && (
              <div className="ml-4 mt-2 space-y-2">
                {section.components.map((component) => (
                  <DraggableComponent key={component.type} type={component.type}>
                    <div className="flex items-center gap-3">
                      <component.icon className="h-4 w-4 text-gray-500" />
                      <span className="text-xs font-medium text-gray-600">{component.label}</span>
                    </div>
                  </DraggableComponent>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

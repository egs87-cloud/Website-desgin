"use client"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="mb-8">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 pb-2 justify-center md:justify-center">
        <div className="flex gap-2 min-w-max">
          <Button
            variant={activeTab === "home" ? "default" : "outline"}
            onClick={() => onTabChange("home")}
            className="px-4 md:px-6 whitespace-nowrap"
          >
            Home
          </Button>
          <Button
            variant={activeTab === "experience" ? "default" : "outline"}
            onClick={() => onTabChange("experience")}
            className="px-4 md:px-6 whitespace-nowrap"
          >
            Experience
          </Button>
          <Button
            variant={activeTab === "education" ? "default" : "outline"}
            onClick={() => onTabChange("education")}
            className="px-4 md:px-6 whitespace-nowrap"
          >
            Education
          </Button>
          <Button
            variant={activeTab === "involvements" ? "default" : "outline"}
            onClick={() => onTabChange("involvements")}
            className="px-4 md:px-6 whitespace-nowrap"
          >
            Campus Involvements
          </Button>
          <Button
            variant={activeTab === "photos" ? "default" : "outline"}
            onClick={() => onTabChange("photos")}
            className="px-4 md:px-6 whitespace-nowrap"
          >
            Life Photos
          </Button>
        </div>
      </div>
    </nav>
  )
}

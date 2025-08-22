"use client"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="flex justify-center gap-2 mb-8">
      <Button
        variant={activeTab === "home" ? "default" : "outline"}
        onClick={() => onTabChange("home")}
        className="px-6"
      >
        Home
      </Button>
      <Button
        variant={activeTab === "experience" ? "default" : "outline"}
        onClick={() => onTabChange("experience")}
        className="px-6"
      >
        Experience
      </Button>
      <Button
        variant={activeTab === "education" ? "default" : "outline"}
        onClick={() => onTabChange("education")}
        className="px-6"
      >
        Education
      </Button>
      <Button
        variant={activeTab === "involvements" ? "default" : "outline"}
        onClick={() => onTabChange("involvements")}
        className="px-6"
      >
        Campus Involvements
      </Button>
      <Button
        variant={activeTab === "projects" ? "default" : "outline"}
        onClick={() => onTabChange("projects")}
        className="px-6"
      >
        Projects
      </Button>
    </nav>
  )
}

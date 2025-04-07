import type { Project } from "../types/project"

export async function fetchNotionDatabase(): Promise<Project[]> {
  try {
    const response = await fetch("/api/projects")

    if (!response.ok) {
      throw new Error("Failed to fetch projects")
    }

    const projects: Project[] = await response.json()
    return projects
  } catch (error) {
    console.error("Error fetching Notion database:", error)
    throw error
  }
}


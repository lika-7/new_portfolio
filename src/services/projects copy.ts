import type { Project } from "../types/project"
import { dummyProjects } from "../data/dummy-projects"

// 실제 API 호출을 시뮬레이션하기 위한 지연 함수
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchProjects(): Promise<Project[]> {
  try {
    // API 호출을 시뮬레이션하기 위해 1초 지연
    await delay(1000)

    // 더미 데이터 반환
    return dummyProjects
  } catch (error) {
    console.error("Error fetching projects:", error)
    throw error
  }
}


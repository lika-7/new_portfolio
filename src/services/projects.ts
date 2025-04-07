import type { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects");

  if (!res.ok) {
    throw new Error("프로젝트 데이터를 가져오는 데 실패했습니다.");
  }

  const data = await res.json();
  return data;
}

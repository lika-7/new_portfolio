"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProjects } from "../redux/features/projects/projectsSlice"
import type { AppDispatch, RootState } from "../redux/store"
import ProjectCard from "./project-card"
import type { Project } from "../types/project"

export default function ProjectGrid() {
  const dispatch = useDispatch<AppDispatch>()
  const { projects, loading, error } = useSelector((state: RootState) => state.projects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  if (loading) {
    return (
      <div className="grid place-items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}


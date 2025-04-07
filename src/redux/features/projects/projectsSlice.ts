import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Project } from "../../../types/project"

interface ProjectsState {
  projects: Project[]
  loading: boolean
  error: string | null
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
}

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects: (state) => {
      state.loading = true
      state.error = null
    },
    fetchProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload
      state.loading = false
    },
    fetchProjectsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchProjects, fetchProjectsSuccess, fetchProjectsFailure } = projectsSlice.actions
export default projectsSlice.reducer


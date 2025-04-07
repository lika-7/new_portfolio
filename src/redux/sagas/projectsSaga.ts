import { call, put, takeLatest } from "redux-saga/effects"
import { fetchProjects, fetchProjectsSuccess, fetchProjectsFailure } from "../features/projects/projectsSlice"
import { fetchProjects as fetchProjectsService } from "../../services/projects"
import type { Project } from "../../types/project"

function* fetchProjectsSaga() {
  try {
    const projects: Project[] = yield call(fetchProjectsService)
    yield put(fetchProjectsSuccess(projects))
  } catch (error) {
    yield put(fetchProjectsFailure(error instanceof Error ? error.message : "An unknown error occurred"))
  }
}

export default function* projectsSaga() {
  yield takeLatest(fetchProjects.type, fetchProjectsSaga)
}


import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "./sagas"
import projectsReducer from "./features/projects/projectsSlice"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


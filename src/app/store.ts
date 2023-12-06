import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import examsReducer from "../components/examsSlice"

export const store = configureStore({
  reducer: {
    exam: examsReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './api'
import telegramSlice from './feautures/telegram.slice';
// import auth from './feautures/auth.slice'
// ...

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    telegram: telegramSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
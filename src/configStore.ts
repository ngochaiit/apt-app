import { configureStore, combineReducers } from '@reduxjs/toolkit'
import reducers from './store/rootReducer'


export const _combineReducers = combineReducers({
  ...reducers,
})

export const store = configureStore({
  reducer: _combineReducers,
})
  

export type Reducers = ReturnType<typeof _combineReducers>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
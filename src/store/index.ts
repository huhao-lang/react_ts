import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import conuterReducers from './modules/counter'
import recommendReducers from '@/views/discover/c-views/recommend/store/recommend'
const store = configureStore({
  reducer: {
    counter: conuterReducers,
    recommend: recommendReducers
  }
})
type GetStoreType = typeof store.getState
type GetDispatch = typeof store.dispatch

export type StoreType = ReturnType<GetStoreType>

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector

export const useAppDispatch: () => GetDispatch = useDispatch
export const appShallowEqual = shallowEqual
export default store

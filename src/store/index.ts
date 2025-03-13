import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import CurrenciesSlice from './currencies'
import AssetsSlice from './assets'

const store = configureStore({
    reducer: {
        [CurrenciesSlice.name]: CurrenciesSlice.reducer,
        [AssetsSlice.name]: AssetsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store

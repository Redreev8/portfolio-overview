import { RootState } from '..'
import CurrenciesAssetsSlice from './currencies.slice'

export const selectFiles = (state: RootState) => state.currencies
export const { changeActive, changeCurrencies } = CurrenciesAssetsSlice.actions

export default CurrenciesAssetsSlice

import { RootState } from '..'
import CurrenciesAssetsSlice from './currencies.slice'

export const selectFiles = (state: RootState) => state.currencies

export default CurrenciesAssetsSlice

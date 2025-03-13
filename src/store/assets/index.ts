import { RootState } from '..'
import AssetsSlice from './assets.slice'

export const selectFiles = (state: RootState) => state.currencies
export const { addAsset, removeAsset } = AssetsSlice.actions

export default AssetsSlice

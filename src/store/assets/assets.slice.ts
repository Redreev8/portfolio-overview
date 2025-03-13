import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import socketAssets from './socket-assets'

export interface assets {
    list: { [key: string]: number }
    count: number
}

const localStor = localStorage.getItem('assets')

const initialState: assets = localStor
    ? JSON.parse(localStor)
    : { list: {}, count: 0 }

let socketReset = socketAssets(initialState.list)

const AssetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addAsset: (
            state,
            { payload }: PayloadAction<{ [key: string]: number }>,
        ) => {
            socketReset()
            state.list = { ...state.list, ...payload }
            const key = Object.keys(payload)[0]
            state.count += payload[key]
            localStorage.setItem('assets', JSON.stringify(state))
            socketReset = socketAssets(state.list)
            return state
        },
        removeAsset: (state, { payload }: PayloadAction<string>) => {
            socketReset()
            state.count -= state.list[payload]
            delete state.list[payload]
            localStorage.setItem('assets', JSON.stringify(state))
            socketReset = socketAssets(state.list)
            return state
        },
    },
})

export default AssetsSlice

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface assets {
    list: { [key: string]: number }
    count: number
}

const localStor = localStorage.getItem('assets')

const initialState: assets = localStor
    ? JSON.parse(localStor)
    : { list: {}, count: 0 }

const AssetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addAsset: (
            state,
            { payload }: PayloadAction<{ [key: string]: number }>,
        ) => {
            state.list = { ...state.list, ...payload }
            const key = Object.keys(payload)[0]
            state.count += payload[key]
            localStorage.setItem('assets', JSON.stringify(state))
            return state
        },
        removeAsset: (state, { payload }: PayloadAction<string>) => {
            state.count -= state.list[payload]
            delete state.list[payload]
            localStorage.setItem('assets', JSON.stringify(state))
            return state
        },
    },
})

export default AssetsSlice

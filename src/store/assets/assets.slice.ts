import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface assets {
    [key: string]: number
}

const localStor = localStorage.getItem('assets')

const initialState: assets = localStor ? JSON.parse(localStor) : {}

const AssetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addAsset: (
            state,
            { payload }: PayloadAction<{ [key: string]: number }>,
        ) => {
            state = { ...state, ...payload }
            localStorage.setItem('assets', JSON.stringify(state))
            return state
        },
        removeAsset: (state, { payload }: PayloadAction<string>) => {
            delete state[payload]
            localStorage.setItem('assets', JSON.stringify(state))
            return state
        },
    },
})

export default AssetsSlice

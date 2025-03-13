import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Currency {
    symbol: string
    priceChangePercent: number
    lastPrice: number
}

interface assets {
    [key: string]: number
}

const initialState: assets = {}

const AssetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addAsset: (
            state,
            { payload }: PayloadAction<{ [key: string]: number }>,
        ) => {
            state = { ...state, ...payload }
        },
        removeAsset: (state, { payload }: PayloadAction<string>) => {
            delete state[payload]
        },
    },
})

export default AssetsSlice

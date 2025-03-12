import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getTickek from '../../api/binance/get-tickek'

interface Currencies {
    currencies: File[]
    loading: 'idle' | 'pending' | 'failed'
}

const initialState: Currencies = {
    currencies: [],
    loading: 'idle',
}

export const fetchCurrencies = createAsyncThunk(
    'currencies/fetch',
    async () => {
        const response = await getTickek()
        return response.data
    },
)

const CurrenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
            state.loading = 'idle'
            state.currencies = action.payload
        })
        builder.addCase(fetchCurrencies.rejected, (state) => {
            state.loading = 'failed'
            state.currencies = []
        })
        builder.addCase(fetchCurrencies.pending, (state) => {
            state.loading = 'pending'
            state.currencies = []
        })
    },
})

export default CurrenciesSlice

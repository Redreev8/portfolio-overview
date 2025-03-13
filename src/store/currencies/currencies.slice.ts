import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import getTickek from '../../api/binance/get-tickek'

export interface Currency {
    symbol: string
    priceChangePercent: number
    lastPrice: number
}

interface Currencies {
    currencies: Currency[]
    keys: { [key: string]: number }
    activeKey: keyof Currencies['keys'] | null
    loading: 'idle' | 'pending' | 'failed'
}

const initialState: Currencies = {
    currencies: [],
    keys: {},
    activeKey: null,
    loading: 'idle',
}

export const fetchCurrencies = createAsyncThunk(
    'currencies/fetch',
    async () => {
        const response = await getTickek()
        return response.data.filter((el) => {
            el.priceChangePercent = parseFloat(el.priceChangePercent).toFixed(2)
            el.lastPrice = parseFloat(el.lastPrice).toFixed(2)
            return el.lastPrice !== parseFloat('0').toFixed(2)
        }) as unknown as Currency[]
    },
)

const CurrenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        changeActive: (
            state,
            { payload }: PayloadAction<keyof Currencies['keys'] | null>,
        ) => {
            state.activeKey = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
            state.loading = 'idle'
            state.currencies = action.payload
            state.keys = action.payload.reduce(
                (obj, el, i) => {
                    obj[el.symbol] = i
                    return obj
                },
                {} as Currencies['keys'],
            )
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

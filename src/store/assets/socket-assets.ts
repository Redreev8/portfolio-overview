import store from '..'
import socket from '../../api/binance/socket'
import { changeCurrencies } from '../currencies'
import { assets } from './assets.slice'

const handelSocket = (e: MessageEvent) => {
    const { currencies } = store.getState()
    const { data } = JSON.parse(e.data as string)
    store.dispatch(
        changeCurrencies({
            currency: {
                priceChangePercent: +parseFloat(data.P as string).toFixed(2),
                lastPrice: +parseFloat(data.a).toFixed(2),
            },
            i: currencies.keys[data.s],
        }),
    )
}

export default (list: assets['list']) => socket(Object.keys(list), handelSocket)

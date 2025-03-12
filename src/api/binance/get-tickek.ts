import { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from './axios'

interface Currencies {
    symbol: string
    priceChangePercent: string
    lastPrice: string
}

const getTickek = async (
    config?: AxiosRequestConfig,
): Promise<AxiosResponse<Currencies[]>> => {
    const res = await axios<Currencies[]>('ticker/24hr', config)
    return res
}

export default getTickek

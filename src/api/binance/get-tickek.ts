import { AxiosRequestConfig } from 'axios'
import axios from './axios'

const getTickek = async (config?: AxiosRequestConfig) => {
    return await axios('ticker/24hr', config)
}

export default getTickek

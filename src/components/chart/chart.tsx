import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import { useAppSelector } from '../../store'
import { useEffect, useState } from 'react'

interface Data {
    name: string
    'my-active': number
    decreased?: number
    increased?: number
}

const Chart = () => {
    const assets = useAppSelector((store) => store.assets.list)
    const { currencies, keys } = useAppSelector((store) => store.currencies)
    const [data, setData] = useState<Data[]>([])
    useEffect(() => {
        setData(() => {
            const res: Data[] = []
            const keysAssets = Object.keys(assets)
            for (let i = 0; i < keysAssets.length; i++) {
                const key = keysAssets[i]
                const index = keys[key]
                const currency = currencies[index]
                console.log(assets[key] * currency.lastPrice)
                const el: Data = {
                    name: key,
                    'my-active': assets[key] * currency.lastPrice,
                }
                console.log(el['my-active'])
                if (currencies[index].priceChangePercent < 0) {
                    el.decreased =
                        (el['my-active'] /
                            (currencies[index].priceChangePercent * -1)) *
                        100
                }
                if (currencies[index].priceChangePercent > 0) {
                    el.increased =
                        (el['my-active'] * 100) /
                        (100 + currencies[index].priceChangePercent)
                }

                res.push(el)
            }
            return res
        })
    }, [assets, currencies])
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 8,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="my-active" stackId="a" fill="#EF8209" />
                <Bar dataKey="decreased" stackId="a" fill="#AF0F31" />
                <Bar dataKey="increased" stackId="a" fill="#0faf5a" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart

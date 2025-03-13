import { FC, useEffect, useRef, useState } from 'react'
import useVirtualList from '../../hooks/useVirtualList'
import { useAppSelector } from '../../store'
import styles from './assets.module.scss'
import CardAssets from './card-assets'

const GridAssets: FC = () => {
    const { list, count } = useAppSelector((store) => store.assets)
    const [keys, setKeys] = useState<string[]>([])
    const ref = useRef<HTMLUListElement>(null)
    const { getTopHeight, getBottomHeight, virtualArr } = useVirtualList<
        HTMLUListElement,
        string
    >({ initial: keys, ref, heightRow: 200, columns: 3 })
    useEffect(() => {
        setKeys(Object.keys(list))
    }, [list])
    return (
        <ul
            style={{
                marginBottom: getBottomHeight(),
                marginTop: getTopHeight(),
            }}
            className={styles.grid}
            ref={ref}
        >
            {virtualArr.map((key: string) => (
                <li className={styles['grid__item']} key={key}>
                    <CardAssets symbol={key} value={list[key]} count={count} />
                </li>
            ))}
        </ul>
    )
}

export default GridAssets

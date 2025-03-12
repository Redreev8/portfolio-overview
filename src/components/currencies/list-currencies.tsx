import { FC, useRef } from 'react'
import useVirtualList from '../../hooks/useVirtualList'
import { useAppSelector } from '../../store'
import styles from './currencies.module.scss'
import classNames from 'classnames'
import { Currency } from '../../store/currencies/currencies.slice'

export const ItemCurrencies: FC<Currency> = ({
    symbol,
    priceChangePercent,
    lastPrice,
}) => {
    const clPercent = classNames(styles['list__percent'], {
        [styles['list__percent--red']]: priceChangePercent < 0,
        [styles['list__percent--green']]: priceChangePercent > 0,
    })
    return (
        <li className={styles['list__item']}>
            <button
                className={styles['list__btn']}
                aria-label={`Добавить актив ${symbol}`}
            >
                <span className={styles['list__symbol']}>{symbol}</span>
                <span className={clPercent}>{priceChangePercent}</span>
                <span className={styles['list__price']}>{lastPrice}</span>
            </button>
        </li>
    )
}

const ListCurrencies = () => {
    const currencies = useAppSelector((store) => store.currencies.currencies)
    const ref = useRef<HTMLUListElement>(null)
    const { getTopHeight, getBottomHeight, virtualArr } = useVirtualList<
        HTMLUListElement,
        Currency
    >({ arr: currencies, ref, heightRow: 40 })
    return (
        <ul
            style={{
                marginBottom: getBottomHeight(),
                marginTop: getTopHeight(),
            }}
            className={styles.list}
            ref={ref}
        >
            {virtualArr.map((el: Currency) => (
                <ItemCurrencies {...el} key={el.symbol} />
            ))}
        </ul>
    )
}

export default ListCurrencies

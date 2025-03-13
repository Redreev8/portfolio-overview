import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../store'
import styles from './assets.module.scss'
import { removeAsset } from '../../store/assets'
import { FC } from 'react'
import Title from '../../ui/title'

interface CardAssetsProps {
    symbol: string
    value: number
    count: number
}

const CardAssets: FC<CardAssetsProps> = ({ symbol, value, count }) => {
    const currencie = useAppSelector((state) => {
        const i = state.currencies.keys[symbol]
        if (!i && i === null) return
        return state.currencies.currencies[i]
    })
    const dispatch = useAppDispatch()
    if (!currencie) return
    const clPercent = classNames(styles['card__percent'], {
        [styles['card__percent--red']]: currencie.priceChangePercent < 0,
        [styles['card__percent--green']]: currencie.priceChangePercent > 0,
    })

    const handelClick = () => {
        dispatch(removeAsset(symbol))
    }

    return (
        <div
            onClick={handelClick}
            className={styles.card}
            aria-label={`Карточка актива ${symbol}, при нажатие удалит актив`}
            tabIndex={0}
        >
            <div className={styles['card__wrap']}>
                <Title as={'h3'} className={styles['card__symbol']}>
                    {symbol}
                </Title>
                <span
                    className={styles['card__percent-active']}
                    aria-label={`Доля в портфелел ${parseFloat(`${(value / count) * 100}`).toFixed(2)}%`}
                >
                    {parseFloat(`${(value / count) * 100}`).toFixed(2)}%
                </span>
            </div>
            <ul className={styles['card__list']}>
                <li className={styles['card__item']}>
                    <span className={styles['card__info']}>Количество:</span>
                    <span>{value}</span>
                </li>
                <li className={styles['card__item']}>
                    <span className={styles['card__info']}>Текущая цена:</span>
                    <span className={styles['card__price']}>
                        {parseFloat(`${currencie.lastPrice}`).toFixed(2)}
                    </span>
                </li>
                <li className={styles['card__item']}>
                    <span className={styles['card__info']}>
                        Общая стоимость:
                    </span>
                    <span className={styles['card__price']}>
                        {currencie.lastPrice * value}
                    </span>
                </li>
                <li className={styles['card__item']}>
                    <span className={styles['card__info']}>
                        Изменение за 24 часа:
                    </span>
                    <span className={clPercent}>
                        {currencie.priceChangePercent}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default CardAssets

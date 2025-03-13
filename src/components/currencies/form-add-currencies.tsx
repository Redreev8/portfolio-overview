import { FC } from 'react'
import { useAppSelector } from '../../store'
import Btn from '../../ui/btn'
import Input from '../../ui/input'
import Title from '../../ui/title'
import styles from './currencies.module.scss'

interface FormAddCurrenciesProps {
    onCancellation: () => void
}

export const FormAddCurrencies: FC<FormAddCurrenciesProps> = ({
    onCancellation,
}) => {
    const { currencies, keys, activeKey } = useAppSelector(
        (store) => store.currencies,
    )
    if (!activeKey) return
    console.log(styles)
    return (
        <form className={styles.form}>
            <Title className={styles['form__title']} as={'h3'}>
                {currencies[keys[activeKey!]].symbol}
            </Title>
            <Input className={styles['form__input']} type="number" />
            <Btn>Добавить</Btn>
            <Btn onClick={onCancellation}>Отмена</Btn>
        </form>
    )
}

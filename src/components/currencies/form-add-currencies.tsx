import { FC, useRef, useState, FormEvent } from 'react'
import { useAppSelector } from '../../store'
import Btn from '../../ui/btn'
import Input from '../../ui/input'
import Title from '../../ui/title'
import styles from './currencies.module.scss'
import Error from '../../ui/error'

interface FormAddCurrenciesProps {
    onCancellation: () => void
}

export const FormAddCurrencies: FC<FormAddCurrenciesProps> = ({
    onCancellation,
}) => {
    const { currencies, keys, activeKey } = useAppSelector(
        (store) => store.currencies,
    )
    const [error, setError] = useState<string | null>(null)
    const ref = useRef<HTMLInputElement>(null)
    const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!ref.current) return
        setError('')
        const value = ref.current.value
        if (!value) {
            setError('Нужно заполнить')
            return
        }
        if (+value < 0 || +value > 100) {
            setError('Актив не может быть меньше 0 и больше 100')
            return
        }
        onCancellation()
    }
    if (!activeKey) return
    return (
        <form className={styles.form} onSubmit={handelSubmit}>
            <Title className={styles['form__title']} as={'h3'}>
                {currencies[keys[activeKey!]].symbol}
            </Title>
            <Input ref={ref} className={styles['form__input']} type="number" />
            <Error className={styles['form__error']}>{error}</Error>
            <Btn>Добавить</Btn>
            <Btn onClick={onCancellation}>Отмена</Btn>
        </form>
    )
}

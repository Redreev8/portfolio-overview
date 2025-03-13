import classNames from 'classnames'
import { FC, InputHTMLAttributes } from 'react'
import Ref from '../../helper/ts/ref-type'
import styles from './input.module.scss'

const Input: FC<
    InputHTMLAttributes<HTMLInputElement> & Ref<HTMLInputElement>
> = ({ className, ...props }) => {
    const cl = classNames(className, styles.input)

    return <input className={cl} {...props} />
}

export default Input

import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'
import Ref from '../../helper/ts/ref-type'
import styles from './error.module.scss'

const Error: FC<AreaHTMLAttributes<HTMLSpanElement> & Ref<HTMLSpanElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, styles.error)
    if (!children) return
    return (
        <span className={cl} {...props}>
            {children}
        </span>
    )
}

export default Error

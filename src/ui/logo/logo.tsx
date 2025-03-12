import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'
import Ref from '../../helper/ts/ref-type'
import styles from './logo.module.scss'

const Logo: FC<AreaHTMLAttributes<HTMLSpanElement> & Ref<HTMLSpanElement>> = ({
    className,
    ...props
}) => {
    const cl = classNames(className, styles.logo)

    return (
        <span className={cl} {...props}>
            Portfolio Overview
        </span>
    )
}

export default Logo

import classNames from 'classnames'
import { AreaHTMLAttributes, createElement, FC } from 'react'
import Ref from '../../helper/ts/ref-type'
import styles from './title.module.scss'

interface TitleProps
    extends AreaHTMLAttributes<HTMLAnchorElement>,
        Ref<HTMLAnchorElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: FC<TitleProps> = ({
    className,
    children,
    as = 'h2',
    size = as,
    ...props
}) => {
    const cl = classNames(className, styles[size])

    return createElement(
        as,
        {
            className: cl,
            ...props,
        },
        children,
    )
}

export default Title

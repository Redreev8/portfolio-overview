import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'
import Ref from '../../helper/ts/ref-type'
import styles from './section.module.scss'

type tag = HTMLElement

const Section: FC<AreaHTMLAttributes<tag> & Ref<tag>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, styles.box)

    return (
        <section className={cl} {...props}>
            {children}
        </section>
    )
}

export default Section

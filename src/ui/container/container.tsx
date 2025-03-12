import Ref from '../../helper/ts/ref-type'
import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'
import styles from './container.module.scss'

const Container: FC<
    AreaHTMLAttributes<HTMLDivElement> & Ref<HTMLDivElement>
> = ({ className, children, ...props }) => {
    const cl = classNames(className, styles.box)

    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default Container

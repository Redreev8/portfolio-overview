import { AreaHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import styles from './modal.module.scss'
import Ref from '../../helper/ts/ref-type'

const ModalBox: FC<
    AreaHTMLAttributes<HTMLDivElement> & Ref<HTMLDivElement>
> = ({ className, children, ...props }) => {
    const cl = classNames(className, styles.modal)

    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default ModalBox

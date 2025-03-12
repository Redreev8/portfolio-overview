import Ref from '../../helper/ts/ref-type'
import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, AnchorHTMLAttributes } from 'react'
import styles from './btn.module.scss'

type HTMLProps = AnchorHTMLAttributes<HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement>

export interface BtnProps
    extends Ref<HTMLButtonElement | HTMLAnchorElement>,
        HTMLProps {
    isCircle?: boolean
}

const Btn: FC<BtnProps> = ({
    className,
    children,
    href,
    isCircle = false,
    ...props
}) => {
    const cl = classNames(className, styles.btn, {
        [styles['btn--circle']]: isCircle,
    })

    if (href) {
        return (
            <a
                href={href}
                className={cl}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        )
    }
    return (
        <button
            className={cl}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    )
}

export default Btn

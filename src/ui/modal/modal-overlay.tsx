import {
    AreaHTMLAttributes,
    FC,
    MouseEvent,
    TransitionEvent,
    useContext,
} from 'react'
import classNames from 'classnames'
import styles from './modal.module.scss'
import Ref from '../../helper/ts/ref-type'
import { ModalContext } from './modal'

const ModalOverlay: FC<
    AreaHTMLAttributes<HTMLDivElement> & Ref<HTMLDivElement>
> = ({ className, children, onClick, onTransitionEnd, ...props }) => {
    const { isOpen, isHidden, setIsRender } = useContext(ModalContext)
    const cl = classNames(className, styles.overlay, {
        [styles['overlay--hidden']]: isHidden,
    })
    const handelClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        if (!('overlay' in target.dataset)) return
        if (onClick) onClick(e)
    }
    const handelTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
        const target = e.target! as HTMLDivElement
        if (!('overlay' in target.dataset)) return
        if (isOpen) return
        setIsRender(false)
        if (onTransitionEnd) onTransitionEnd(e)
    }
    return (
        <div
            onTransitionEnd={handelTransitionEnd}
            onClick={handelClick}
            className={cl}
            {...props}
            data-overlay
        >
            {children}
        </div>
    )
}

export default ModalOverlay

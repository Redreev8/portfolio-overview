import Ref from '../../helper/ts/ref-type'
import classNames from 'classnames'
import { AreaHTMLAttributes, FC } from 'react'
import styles from './loading.module.scss'

interface LoadingProps
    extends AreaHTMLAttributes<HTMLDivElement>,
        Ref<HTMLDivElement> {
    isOpen: boolean
}

const Loading: FC<LoadingProps> = ({ className, isOpen, ...props }) => {
    const cl = classNames(className, styles.loading, {
        [styles['loading--hidden']]: !isOpen,
    })

    return (
        <div className={cl} {...props}>
            <span className={styles.spinners}></span>
        </div>
    )
}

export default Loading

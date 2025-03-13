import { FC, TransitionEvent, useEffect, useState } from 'react'
import styles from './currencies.module.scss'
import Modal, {
    ModalBox,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from '../../ui/modal'
import ListCurrencies from './list-currencies'
import { useAppSelector } from '../../store'
import classNames from 'classnames'
import { FormAddCurrencies } from './form-add-currencies'

interface ModalCurrenciesProps {
    isOpen: boolean
    closeModal: () => void
}

const ModalCurrencies: FC<ModalCurrenciesProps> = ({ isOpen, closeModal }) => {
    const [isForm, setIsForm] = useState<boolean>(false)
    const activeKey = useAppSelector((store) => store.currencies.activeKey)
    const clWrap = classNames(styles['modal__wrap'], {
        [styles['modal__wrap--hidden']]: activeKey,
    })
    const clForm = classNames(styles['modal__form'], {
        [styles['modal__form--hidden']]: !isForm,
    })
    const handelTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        if (!target.classList.contains(styles['modal__wrap'])) return
        setIsForm(true)
    }
    useEffect(() => {
        if (activeKey === null) setIsForm(false)
    }, [activeKey])
    return (
        <Modal isOpen={isOpen}>
            <ModalOverlay
                onClick={closeModal}
                aria-label="закрыть список криптовалют"
            >
                <ModalBox className={styles.modal}>
                    <div
                        onTransitionEnd={handelTransitionEnd}
                        className={clWrap}
                    >
                        <ModalHeader></ModalHeader>
                        <ModalContent className={styles['modal__content']}>
                            <ListCurrencies />
                        </ModalContent>
                    </div>
                    <div className={clForm}>
                        <ModalContent
                            className={styles['modal__content--form']}
                        >
                            <FormAddCurrencies onCancellation={closeModal} />
                        </ModalContent>
                    </div>
                </ModalBox>
            </ModalOverlay>
        </Modal>
    )
}

export default ModalCurrencies

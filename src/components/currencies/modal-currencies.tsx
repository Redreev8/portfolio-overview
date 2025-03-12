import { FC } from 'react'
import styles from './currencies.module.scss'
import Modal, {
    ModalBox,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '../../ui/modal'
import ListCurrencies from './list-currencies'

interface ModalCurrenciesProps {
    isOpen: boolean
    closeModal: () => void
}

const ModalCurrencies: FC<ModalCurrenciesProps> = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen}>
            <ModalOverlay
                onClick={closeModal}
                aria-label="закрыть список криптовалют"
            >
                <ModalBox className={styles.modal}>
                    <div className={styles['modal__wrap']}>
                        <ModalHeader></ModalHeader>
                        <ModalContent className={styles['modal__content']}>
                            <ListCurrencies />
                        </ModalContent>
                        <ModalFooter></ModalFooter>
                    </div>
                </ModalBox>
            </ModalOverlay>
        </Modal>
    )
}

export default ModalCurrencies

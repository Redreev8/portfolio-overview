import { FC } from 'react'
import styles from './chart.module.scss'
import Modal, {
    ModalBox,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from '../../ui/modal'
import Title from '../../ui/title'
import Chart from './chart'

interface ModalChartProps {
    isOpen: boolean
    closeModal: () => void
}

const ModalChart: FC<ModalChartProps> = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen}>
            <ModalOverlay onClick={closeModal} aria-label="закрыть график">
                <ModalBox className={styles.modal}>
                    <ModalHeader>
                        <Title as="h3">Chart</Title>
                    </ModalHeader>
                    <ModalContent className={styles['modal__content']}>
                        <Chart />
                    </ModalContent>
                </ModalBox>
            </ModalOverlay>
        </Modal>
    )
}

export default ModalChart

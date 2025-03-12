import { useState } from 'react'
import styles from './header.module.scss'
import Btn from '../../ui/btn'
import Container from '../../ui/container'
import Logo from '../../ui/logo'
import ModalCurrencies from '../currencies/modal-currencies'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />
            </Container>
            <Container className={styles.wrap}>
                <Btn onClick={openModal} className={styles.btn} isCircle>
                    Добавить актив
                </Btn>
            </Container>
            <ModalCurrencies isOpen={isOpen} closeModal={closeModal} />
        </header>
    )
}

export default Header

import { useState } from 'react'
import styles from './header.module.scss'
import Btn from '../../ui/btn'
import Container from '../../ui/container'
import Logo from '../../ui/logo'
import ModalCurrencies from '../currencies/modal-currencies'
import { useAppDispatch } from '../../store'
import { changeActive } from '../../store/currencies'
import ModalChart from '../chart'

const Header = () => {
    const [isOpenList, setIsOpenList] = useState<boolean>(false)
    const [isOpenChart, setIsOpenChart] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const openModalListActive = () => setIsOpenList(true)
    const closeModalListActive = () => {
        dispatch(changeActive(null))
        setIsOpenList(false)
    }
    const openModalChart = () => setIsOpenChart(true)
    const closeModalChart = () => {
        setIsOpenChart(false)
    }
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />
            </Container>
            <Container className={styles.wrap}>
                <nav className={styles.nav}>
                    <Btn onClick={openModalChart} className={styles.btn}>
                        Посметреть график
                    </Btn>
                    <Btn
                        onClick={openModalListActive}
                        className={styles.btn}
                        isCircle
                    >
                        Добавить актив
                    </Btn>
                </nav>
            </Container>
            <ModalCurrencies
                isOpen={isOpenList}
                closeModal={closeModalListActive}
            />
            <ModalChart isOpen={isOpenChart} closeModal={closeModalChart} />
        </header>
    )
}

export default Header

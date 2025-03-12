import styles from './header.module.scss'
import Btn from '../../ui/btn'
import Container from '../../ui/container'
import Logo from '../../ui/logo'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />
            </Container>
            <Container className={styles.wrap}>
                <Btn className={styles.btn} isCircle>
                    Добавить
                </Btn>
            </Container>
        </header>
    )
}

export default Header

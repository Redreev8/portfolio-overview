import styles from './portfolio-overview.module.scss'
import Container from '../../ui/container'
import Section from '../../ui/section'
import Title from '../../ui/title'

const idTitle = 'Portfolio-Overview'

const PortfolioOverview = () => {
    return (
        <Section aria-labelledby={idTitle}>
            <Container>
                <Title className={styles.title} id={idTitle}>
                    Portfolio Overview
                </Title>
            </Container>
        </Section>
    )
}

export default PortfolioOverview

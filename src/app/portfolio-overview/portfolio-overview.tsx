import styles from './portfolio-overview.module.scss'
import Container from '../../ui/container'
import Section from '../../ui/section'
import Title from '../../ui/title'
import { useAppDispatch } from '../../store'
import { useLayoutEffect } from 'react'
import { fetchCurrencies } from '../../store/currencies/currencies.slice'

const idTitle = 'Portfolio-Overview'

const PortfolioOverview = () => {
    const dispatch = useAppDispatch()
    useLayoutEffect(() => {
        dispatch(fetchCurrencies())
    }, [])
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

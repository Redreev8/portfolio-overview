import styles from './portfolio-overview.module.scss'
import Container from '../../ui/container'
import Section from '../../ui/section'
import Title from '../../ui/title'
import { useAppDispatch, useAppSelector } from '../../store'
import { useLayoutEffect } from 'react'
import { fetchCurrencies } from '../../store/currencies/currencies.slice'
import GridAssets from '../../components/assets/grid-assets'
import Loading from '../../ui/loading'

const idTitle = 'Portfolio-Overview'

const PortfolioOverview = () => {
    const loading = useAppSelector((store) => store.currencies.loading)
    const dispatch = useAppDispatch()
    useLayoutEffect(() => {
        dispatch(fetchCurrencies())
    }, [])
    return (
        <>
            <Loading
                className={styles.loading}
                isOpen={loading === 'pending'}
            />
            <Section className={styles.section} aria-labelledby={idTitle}>
                <Container className={styles.container}>
                    <Title className={styles.title} id={idTitle}>
                        Portfolio Overview
                    </Title>
                    {loading === 'idle' && <GridAssets />}
                </Container>
            </Section>
        </>
    )
}

export default PortfolioOverview

import styles from './portfolio-overview.module.scss'
import Container from '../../ui/container'
import Section from '../../ui/section'
import Title from '../../ui/title'
import { useAppSelector } from '../../store'
import GridAssets from '../../components/assets/'
import Loading from '../../ui/loading'

const idTitle = 'Portfolio-Overview'

const PortfolioOverview = () => {
    const loading = useAppSelector((store) => store.currencies.loading)
    const list = useAppSelector((store) => store.assets.list)
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
                    {loading === 'idle' &&
                        (Object.keys(list).length === 0 ? (
                            <Title
                                className={styles['title-no-assets']}
                                as="h3"
                            >
                                Нет активов
                            </Title>
                        ) : (
                            <GridAssets />
                        ))}
                </Container>
            </Section>
        </>
    )
}

export default PortfolioOverview

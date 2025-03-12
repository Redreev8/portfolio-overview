import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioOverview from './app/portfolio-overview/portfolio-overview.tsx'
import Header from './components/header/header.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header />
        <PortfolioOverview />
    </StrictMode>,
)

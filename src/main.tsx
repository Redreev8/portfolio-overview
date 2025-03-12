import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioOverview from './app/portfolio-overview/portfolio-overview.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PortfolioOverview />
    </StrictMode>,
)

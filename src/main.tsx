import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import PortfolioOverview from './app/portfolio-overview/portfolio-overview.tsx'
import Header from './components/header'
import store from './store'
import './style/globals.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Header />
            <main>
                <PortfolioOverview />
            </main>
        </Provider>
    </StrictMode>,
)

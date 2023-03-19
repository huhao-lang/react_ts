import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'
import routes from '@/router'
import { Provider } from 'react-redux'
import store from './store'
import AppHeader from './components/app-header'
import '@/assets/css/index.less'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppHeader />
          <Suspense fallback="">{useRoutes(routes)}</Suspense>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App

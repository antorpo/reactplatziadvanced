import React from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { GlobalStyle } from './styles/globalStyles'
import { Router } from '@reach/router'

const App = () => {
  // Obtener parametros usando QueryString y URLParams
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
      </Router>
    </>
  )
}

export default App

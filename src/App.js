import React, { useContext } from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { GlobalStyle } from './styles/globalStyles'
import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const App = () => {
  // Obtener parametros usando QueryString y URLParams
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </>
  )
}

export default App

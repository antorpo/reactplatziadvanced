import React from 'react'
import { ListCategories } from './components/ListCategories'
import { ListPhotoCard } from './components/ListPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListCategories />
      <ListPhotoCard />
    </>
  )
}

export default App

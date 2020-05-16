import React from 'react'
import { ListCategories } from './components/ListCategories'
import { GlobalStyle } from './globalStyles'

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <ListCategories />
    </>
  )
}

export default App

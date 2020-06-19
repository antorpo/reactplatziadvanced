import React from 'react'
import { ListCategories } from './components/ListCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/globalStyles'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
      )}
    </>
  )
}

export default App

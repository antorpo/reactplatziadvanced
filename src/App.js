import React from 'react'
import { ListCategories } from './components/ListCategories'
import { ListPhotoCard } from './components/ListPhotoCard'
import { GlobalStyle } from './globalStyles'


// const PHOTOCARD_ELEMENT = {
//   id: 0,
//   categoryId: 2,
//   src: 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png',
//   userId: 100,
//   likes: 7
// }

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListCategories />
      <ListPhotoCard />
    </>
  )
}

export default App

import React from 'react'
import { ListCategories } from '../components/ListCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

// Home recibe este parametro gracias a Reach Router en el path='/pet/:id' se le inyecta como prop.
export const Home = ({ id }) => (
  <>
    <ListCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
)

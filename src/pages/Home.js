import React from 'react'
import { ListCategories } from '../components/ListCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

// Home recibe este parametro gracias a Reach Router en el path='/pet/:id' se le inyecta como prop.
// Helmet recibe como children las estiquetas del head que deben cambiar (title, meta, etc).
export const Home = ({ id }) => (
  <>
    <Layout
      title='Tu app de fotos de mascotas'
      content='Con Petgram puedes encontrar fotos de animales'
    >
      <ListCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  </>
)

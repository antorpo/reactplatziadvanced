import React from 'react'
import { ListCategories } from '../components/ListCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

// Home recibe este parametro gracias a Reach Router en el path='/pet/:id' se le inyecta como prop.
// Helmet recibe como children las estiquetas del head que deben cambiar (title, meta, etc).
const HomePage = ({ id }) => (
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

// Usamos React.memo() para evitar re-renders, solo lo hara cuando detecte cambios en sus props como lo hace los PureComponents.
// Podemos ejecutar una funcion como segundo parametro para elegir que props dominan frente al renderizado.
export const Home = React.memo(HomePage, (prevProps, props) => {
  // Si las props se conservan iguales memorizar, es decir no renderizar.
  return prevProps.id === props.id
})

import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

// Quitamos el export nombrado debido al uso de React.lazy() que no lo toma asi.
export default () => (
  <>
    <Layout title='Tus favoritos' content='Aca puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  </>
)

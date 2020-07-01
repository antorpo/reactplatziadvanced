import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ id }) => {
  return (
    <Layout title={`Photo ${id}`}>
      <PhotoCardWithQuery id={id} />
    </Layout>
  )
}

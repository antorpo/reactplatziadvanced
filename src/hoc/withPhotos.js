import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// HOC => High Order Component
// Query para obtener las fotos:
export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const PhotoCardWithQuery = ({ id }) => {
  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>{`Error: ${error}`}</h3>
  }

  return <PhotoCard {...data.photo} />
}

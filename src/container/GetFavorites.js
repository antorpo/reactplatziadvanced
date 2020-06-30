import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListFavs } from '../components/ListFavs'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>{`Error: ${error}`}</p>

  const { favs } = data
  return <ListFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVORITES} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)

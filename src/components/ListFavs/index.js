import React from 'react'
import { Link, Grid, Image } from './styles'
import PropTypes from 'prop-types'

export const ListFavs = ({ favs }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>
      ))}
    </Grid>
  )
}

// Indicamos que favs es un array que contiene objetos dentro:
ListFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}

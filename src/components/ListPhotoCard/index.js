import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'

const ListPhotoCardComponent = ({ data: { photos = [] } } = {}) => (
  <ul>
    {photos.map((_photocard) => (
      <li key={_photocard.id}>
        <PhotoCard {..._photocard} />
      </li>
    ))}
  </ul>
)

/*
      HOC (High Order Components)
      Componentes de orden superior:
      Funciones que reciben como parametro un component y devuelve otro componente con mejoras
      o con props inyectados.
*/
export const ListPhotoCard = withPhotos(ListPhotoCardComponent)

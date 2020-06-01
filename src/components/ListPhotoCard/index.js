import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListPhotoCard = ({ photocards = [1, 2, 3, 4] }) => (
  <ul>
    {photocards.map((_photocard) => (
      <li key={_photocard}>
        <PhotoCard id={_photocard} />
      </li>
    ))}
  </ul>
)

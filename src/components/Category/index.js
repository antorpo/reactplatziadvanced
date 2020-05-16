import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

/* Utilizamos export nombrado: Nos obliga a importar con el mismo nombre de la constante ya que
 debemos desestructurar. */
export const Category = ({ cover = DEFAULT_IMG, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt='categoryImg' />
    {emoji}
  </Anchor>
)

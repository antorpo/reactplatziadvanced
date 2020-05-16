import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListCategories = ({ categories = [1, 2, 3, 4] }) => {
  return (
    <List>
      {categories.map((_category) => (
        <Item key={_category}>
          <Category />
        </Item>
      ))}
    </List>
  )
}

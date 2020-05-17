import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListCategories = () => {
  return (
    <List>
      {categories.map((_category) => (
        <Item key={_category.id}>
          <Category {..._category} />
        </Item>
      ))}
    </List>
  )
}

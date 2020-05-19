import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories as categoriesEndPoint } from '../../../endpoints.json'

export const ListCategories = () => {
  const [categories, setCategories] = useState({
    data: [],
    loading: true,
    error: null
  })

  // // Sin usar async/await por problemas con Babel 7.
  useEffect(() => {
    setCategories({
      loading: true,
      error: null
    })

    try {
      axios.get(categoriesEndPoint).then((res) => {
        setCategories({
          loading: false,
          data: res.data
        })
      })
    } catch (error) {
      setCategories({
        loading: false,
        error: error
      })
    }
  }, []) // El array vacio le indica que solo se llamara al montarse el componente es decir el primer renderizado. (componentDidMount)

  if (categories.loading) {
    return <h3>Loading...</h3>
  }

  if (categories.error) {
    return <h3>{`Error: ${categories.error}`}</h3>
  }

  return (
    <List>
      {categories.data.map((_category) => (
        <Item key={_category.id}>
          <Category {..._category} />
        </Item>
      ))}
    </List>
  )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories as categoriesEndPoint } from '../../../endpoints.json'

// Crecion de un custom-hook:
const useCategoriesData = () => {
  const [categories, setCategories] = useState({
    data: [],
    loading: true,
    error: null
  })

  // Sin usar async/await por problemas con Babel 7.
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

  return { categories }
}

export const ListCategories = () => {
  const { categories } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      // Cuando el scroll pase la posicion de 200
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  if (categories.loading) {
    return <h3>Loading...</h3>
  }

  if (categories.error) {
    return <h3>{`Error: ${categories.error}`}</h3>
  }

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.data.map((_category) => (
        <Item key={_category.id}>
          <Category {..._category} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

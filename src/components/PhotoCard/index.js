import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import useNearScreen from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({ variables: { input: { id } } }) // Sino nos gusta la foto entonces
              }

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              )
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}

// Para el caso de likes que es un numero, pero no un numero cualquiera sino positivo podemos
// crear nuestro propia custom propType validation, usando funciones.
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`Value ${propName} must be defined`)
    }

    if (propValue < 0) {
      return new Error(`Value ${propName} must be positive`)
    }
  }
}

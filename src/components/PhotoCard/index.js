import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)

  /*
    ref es una prop de React que nos va a permitir capturar un elemento del DOM
    para poder manipularlo especificamente.
  */
  const element = useRef(null)

  useEffect(() => {
    /* 
      Con la condicion del ternario miramos si el navegador soporta IntersectionObserver, en caso de hacerlo
      lo devolvemos en caso contrario utilizamos la libreria (polyfill) que automaticamente le llena la opcion a window
      todo esto dentro de Promise.resolve() que nos permite crear una promesa.

     Import dinamico que devuelve una promesa, sirve para solo utilizar la libreria en un momento dado y no en todo al archivo.
    */
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      /*
      El Viewport hace referencia al area poligonal que el usuario esta observando en el momento de la pagina.
    */
      const observer = new window.IntersectionObserver((entries) => {
        // Podremos saber si el elemento a observar esta en el viewport o no.
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
          observer.disconnect() // Evitar que el observador se actualice (Lo hace por ejemplo al hacer scroll)
        }
      })

      observer.observe(element.current)
    })
  }, [element])

  /*
    Lo que hace el efecto es mirar si el elemento al cual estamos haciendo referencia esta siendo
    mostrado en el viewport, dependiendo de esto mostraremos su contenido o no, solo en caso de estar
    intersectando el viewport, para esto con styled-components le damos una altura minima al articulo ya que
    porque defecto su altura es cero dando que siempre esta visible en el viewport.

    Esto es un estilo de lazy-load (carga perezosa).
  */
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='25px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}

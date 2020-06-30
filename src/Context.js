import React, { createContext, useState } from 'react'

/* 
  React Context nos permite compartir valores entre componentes, sin seguir
  el flujo padre-hijo, es mas como un almacen de datos globales similar a Redux 
  la principal diferencia entre estos es que Context es de la API nativo de React y 
  Redux lo utiliza para funcionar.

  Para saber cual elegir debemos tener en cuenta la complejidad de la informacion a almacenar,
  ya que Redux se penso para aplicaciones grandes, en cambio Context funciona mejor con
  menores datos es decir con algo mas sencillo.

  Redux -> Gestionar el estado de una aplicacion.
  Context -> Pasar propiedaades a diferentes componentes de un mismo arbol.
*/

export const Context = createContext()
const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}

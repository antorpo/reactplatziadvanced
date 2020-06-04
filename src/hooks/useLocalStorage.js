import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      // Usamos try-catch ya que algunos navegadores al usar modo incognito no permiten escribir/leer el localStorage.
      const item = window.localStorage.getItem(key)
      return item != null ? JSON.parse(item) : initialValue
    } catch (e) {
      // En caso de un fallo devolvemos el valor inicial.
      return initialValue
    }
  })

  // Guardamos datos en el localStorage.
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  // Creamos nuestro propio custom hook.
  return [storedValue, setLocalStorage]
}

export default useLocalStorage

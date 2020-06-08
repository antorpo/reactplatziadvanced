import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Implementacion de React Apollo:
import ApolloClient from 'apollo-boost' // Forma rapida de inicializar react apollo.
import { ApolloProvider } from 'react-apollo' // Proveedor del servicio.

const client = new ApolloClient({
  uri: 'https://petgram-server-antorpo.antorpo.now.sh/graphql'
})

const container = document.getElementById('app')

// Al cubrir toda la aplicacion con el proveedor garantizamos que apollo tendra acceso a toda la App.
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  container
)

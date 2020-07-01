import React from 'react'
import { Div, Title } from './styles'
import { Helmet } from 'react-helmet'

export const Layout = ({ title, content, children }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} - PetGram</title>}
        {content && <meta name='description' content={content} />}
      </Helmet>

      <Div>
        {title && <Title>{title}</Title>}
        {children}
      </Div>
    </>
  )
}

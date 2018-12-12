import React, { SFC } from 'react'
import { ApolloProvider } from 'react-apollo'
import { apolloClient } from '../../apolloClient'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../Router/Router'

export const App: SFC = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ApolloProvider>
)

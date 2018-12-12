import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import moment, { ISO_8601 } from 'moment'
import isArray from 'lodash/isArray'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import { onError } from 'apollo-link-error'

const transformResponse = (value: any): any => {
  switch (true) {
    case isArray(value):
      return value.map(transformResponse)

    case isPlainObject(value):
      return mapValues(value, transformResponse)

    case moment(value, ISO_8601).isValid():
      return moment(value)

    default:
      return value
  }
}

const TransformDateLink = new ApolloLink((operation, forward) =>
  forward!(operation).map(transformResponse)
)

const ErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ` +
          `${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const link = ApolloLink.from([ErrorLink, TransformDateLink, new HttpLink()])

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

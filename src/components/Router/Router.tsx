import React from 'react'
import { Switch, Route } from 'react-router'
import { DocumentTitle } from '../Misc/DocumentTitle'
import Loadable from 'react-loadable'
import { LoadableLoading } from '../Misc/Loading'
import last from 'lodash/last'

const Defer = (name: string, importName = 'Component') =>
  Loadable({
    loader: () => import(`./${name}`),
    loading: LoadableLoading,
    render(loaded, props) {
      const componentName = last<string>(name.split('/')) || importName
      const Component = loaded[componentName]
      return <Component {...props} />
    },
  })

export const Router = () => (
  <DocumentTitle>
    <Switch>
      <Route path="/" component={Defer('GalleryRoute')} exact />
    </Switch>
  </DocumentTitle>
)

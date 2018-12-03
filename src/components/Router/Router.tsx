import { SFC } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { LoadableLoading } from '../Misc/LoadableLoading'
import last from 'lodash/last'

const Defer = (name: string, importName = 'Component') =>
  Loadable({
    loader: () => import(`./${name}`),
    loading: LoadableLoading,
    render(loaded, props) {
      const componentName = last<string>(name.split('/')) || importName
      const Component = loaded[componentName]
      return <Component {...props} />
    }
  })

export const Router: SFC = () => (
  <Switch>
    <Route path="/" component={Defer('Home')} exact />
  </Switch>
)

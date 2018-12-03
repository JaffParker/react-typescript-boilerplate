import { LoadingComponentProps } from 'react-loadable'

interface LoadableLoadingProps extends LoadingComponentProps {}

export const LoadableLoading: React.SFC<LoadableLoadingProps> = () => (
  <div className="text-center">
    <i>Loading...</i>
  </div>
)

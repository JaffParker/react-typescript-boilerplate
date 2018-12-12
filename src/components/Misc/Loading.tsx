import React, { SFC } from 'react'
import { LoadingComponentProps } from 'react-loadable'
import styles from './Loading.module.scss'
import { Logo } from '../Layout/Logo'

interface LoadableLoadingProps extends LoadingComponentProps {}

export const LoadableLoading: SFC<LoadableLoadingProps> = () => <span />

export const Loading: SFC = () => (
  <div className={styles.Container}>
    <Logo />
    <span>Loading...</span>
  </div>
)

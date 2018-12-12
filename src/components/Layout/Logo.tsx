import React, { SFC } from 'react'
import LogoImg from './logo.png'
import styles from './Logo.module.scss'

export const Logo: SFC = () => (
  <div className={styles.Logo}>
    <img src={LogoImg} alt="Art of Shee" />
  </div>
)

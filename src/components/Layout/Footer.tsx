import React, { SFC } from 'react'

export const Footer: SFC = () => (
  <div style={{ lineHeight: '100vh', padding: '0 50px' }}>
    Art of Shee &copy; {new Date().getFullYear()}
  </div>
)

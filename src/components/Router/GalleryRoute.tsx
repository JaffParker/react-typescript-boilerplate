import React, { SFC } from 'react'
import { DocumentTitle } from '../Misc/DocumentTitle'
import { GalleryContainer } from '../Gallery/Containers/GalleryContainer'

export const GalleryRoute: SFC = () => (
  <DocumentTitle title="Gallery">
    <GalleryContainer />
  </DocumentTitle>
)

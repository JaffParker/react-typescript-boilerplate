import React, { SFC, Fragment } from 'react'
import { Artwork } from 'artofshee-shared/dataTypes/Artwork'

interface GalleryItemProps {
  artwork: Artwork
}

export const GalleryItem: SFC<GalleryItemProps> = ({
  artwork: {
    title,
    image: {
      urls: { thumbnail },
    },
  },
}) => (
  <Fragment>
    <img
      style={{ height: '100%', width: '100%' }}
      src={`/public/${thumbnail}`}
      alt={title}
    />
  </Fragment>
)

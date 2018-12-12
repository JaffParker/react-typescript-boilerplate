import React, { SFC } from 'react'
import { Query } from 'react-apollo'
import { GetGallery } from '../../../graphql/queries/GetGallery'
import { Artwork } from 'artofshee-shared/dataTypes/Artwork'
import { Gallery } from '../Views/Gallery'
import { Loading } from '../../Misc/Loading'

export const GalleryContainer: SFC = () => (
  <Query<{ artworks: Artwork[] }> query={GetGallery}>
    {({ loading, data }) => {
      if (loading) return <Loading />

      if (data) return <Gallery artworks={data.artworks} />

      return <span>Something went wrong...</span>
    }}
  </Query>
)

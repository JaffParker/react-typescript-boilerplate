import React, { SFC } from 'react'
import { Artwork } from 'artofshee-shared/dataTypes/Artwork'
import styles from './Gallery.module.scss'
import { Logo } from '../../Layout/Logo'
import { GalleryItem } from './GalleryItem'
import { Footer } from '../../Layout/Footer'

interface GalleryProps {
  artworks: Artwork[]
}

export const Gallery: SFC<GalleryProps> = ({ artworks }) => (
  <div className={styles.Container}>
    <Logo />
    <h1 className={styles.Header}>Gallery</h1>
    {artworks.map(artwork => (
      <div className={styles.Item} key={artwork.id}>
        <GalleryItem artwork={artwork} />
      </div>
    ))}
    <Footer />
  </div>
)

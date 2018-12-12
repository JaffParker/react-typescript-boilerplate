import React from 'react'
import VDocumentTitle from 'react-document-title'

interface DocumentTitleProps {
  title?: string
}

export const DocumentTitle: React.SFC<DocumentTitleProps> = ({
  title,
  children,
}) => (
  <VDocumentTitle title={`${title ? `${title} | ` : ''}Art of Shee`}>
    {children}
  </VDocumentTitle>
)

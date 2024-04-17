import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-gray-950 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

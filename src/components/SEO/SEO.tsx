import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  url: string
  image?: string
  imageAlt?: string
  type?: 'atricle' | 'website'
}

function SEO({ title, description, url, image, imageAlt, type }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}

      {/* <meta name="theme-color" content="#B1000A" /> */}
      {/* <meta name="Description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type ? type : 'website'} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="TODO CHANGE" />
      <meta name="twitter:image:alt" content={imageAlt} /> */}

      {/* <meta property="fb:app_id" content="your_app_id" />
      <meta name="twitter:site" content="@website-username"/> */}
    </Head>
  )
}

export default SEO

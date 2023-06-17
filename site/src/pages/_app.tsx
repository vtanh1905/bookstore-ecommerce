import '@/styles/global.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useAuth, ComponentMetaData, useMetadata } from '@/hooks'

type CustomAppProps = AppProps & {
  Component: ComponentMetaData
}

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const { user, onLogout } = useAuth()
  const { title, Layout } = useMetadata(Component)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout user={user} onLogout={onLogout}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

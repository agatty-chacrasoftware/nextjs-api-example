import { MainLayout } from '@/layouts'
import { SEO } from '@/components'

const Home = () => {
  return (
    <MainLayout className="container" theme="dark">
      <SEO
        title="TODO"
        description="TODO Description."
        url="todochange.com"
        image=""
        imageAlt=""
      />
    </MainLayout>
  )
}

export default Home

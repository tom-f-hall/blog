// CUSTOM COMPONENTS
import Hero from '../components/hero'
import Container from '../components/container'
import PageTransition from '../components/pageTransition'

// HELPERS
import { fetchAPI } from '../lib/api'


const Home = ({ articles, categories, homepage }) => {
  return (
    <PageTransition>
      <Container>
        <Hero image={`/images/tfh.png`} title={`Hi, I'm Tom 👋🏻`} subtitle='Developer and maker. Recovering accountant. Working out of London 🇬🇧' ctaLink="/blog" ctaText="Browse Blog" />
      </Container>
    </PageTransition>
  )
}

export async function getStaticProps() {

  const [ articles, categories, homepage ] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/categories'),
    fetchAPI('/homepage')
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home

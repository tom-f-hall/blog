// CUSTOM COMPONENTS
import Hero from '../components/hero'
import Container from '../components/container'

// HELPERS
import { fetchAPI } from '../lib/api'


const Home = ({ articles, categories, homepage }) => {
  return (
    <Container>
      <Hero image={`/images/tfh.png`} title={`Hi, I'm Tom 👋🏻`} subtitle='Developer and maker. Born in Milan, Italy 🇮🇹 and now living in London, UK 🇬🇧' ctaLink="/blog" ctaText="Browse Blog" />
    </Container>
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

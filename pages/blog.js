import Section from '../components/section'
import PageTransition from '../components/pageTransition'


const BlogPage = (props) => {
  return(
    <PageTransition>
      <Section>
        <div>
          <h1>Blog</h1>
          <p>Browse or search for articles on my blog</p>
        </div>
      </Section>
    </PageTransition>
  )
}

export default BlogPage

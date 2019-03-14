import Shell from '../components/shell'
import Header from '../components/header'
import { css } from '@emotion/core'

const tableOfContentsItemStyle = css`
  text-decoration: none;

  &:hover h3 {
    color: #343334;
  }

  & > h3 {
    margin-bottom: 0;
    margin-top: 0;
    color: #c0bfc0;
  }
`

function Index () {
  return (
    <Shell>
      <Header />
      <main>
        <section>
          <div>
            <a href="/about.html" css={tableOfContentsItemStyle}>
              <h3>ABOUT</h3>
            </a>
            <a href="https://github.com/caiogondim" rel="noopener noreferrer" target="_blank" css={tableOfContentsItemStyle}>
              <h3>CODE</h3>
            </a>
            <a href="/photos.html" css={tableOfContentsItemStyle}>
              <h3>PHOTOS</h3>
            </a>
            <a href="/posts.html" css={tableOfContentsItemStyle}>
              <h3>POSTS</h3>
            </a>
            <a href="/projects.html" css={tableOfContentsItemStyle}>
              <h3>PROJECTS</h3>
            </a>
            <a href="/publications.html" css={tableOfContentsItemStyle}>
              <h3>PUBLICATIONS</h3>
            </a>
            <a href="https://www.linkedin.com/in/cgondim/" rel="noopener noreferrer" target="_blank" css={tableOfContentsItemStyle}>
              <h3>RÉSUMÉ</h3>
            </a>
            <a href="/talks.html" css={tableOfContentsItemStyle}>
              <h3>TALKS</h3>
            </a>
          </div>
        </section>
      </main>
    </Shell>
  )
}

export default Index

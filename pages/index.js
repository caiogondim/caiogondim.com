import Link from 'next/link'
import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import { css } from '@emotion/core'

const tableOfContentsItemStyle = css`
  text-decoration: none;
  cursor: pointer;

  &:hover h3 {
    color: #343334;
  }

  h3 {
    margin-bottom: 0;
    margin-top: 0;
    color: #c0bfc0;
  }
`

function Index () {
  return (
    <Shell>
      <Header />
      <Content>
        <div>
          <Link prefetch href="/about">
            <a css={tableOfContentsItemStyle}><h3>ABOUT</h3></a>
          </Link>
          <a href="https://github.com/caiogondim" rel="noopener noreferrer" target="_blank" css={tableOfContentsItemStyle}>
            <h3>CODE</h3>
          </a>
          <Link prefetch href="/photos.html">
            <a css={tableOfContentsItemStyle}><h3>PHOTOS</h3></a>
          </Link>
          <Link prefetch href="/posts.html">
            <a css={tableOfContentsItemStyle}><h3>POSTS</h3></a>
          </Link>
          <Link prefetch href="/projects.html">
            <a css={tableOfContentsItemStyle}><h3>PROJECTS</h3></a>
          </Link>
          <Link prefetch href="/publications.html">
            <a css={tableOfContentsItemStyle}><h3>PUBLICATIONS</h3></a>
          </Link>
          <a href="https://www.linkedin.com/in/cgondim/" rel="noopener noreferrer" target="_blank" css={tableOfContentsItemStyle}>
            <h3>RÉSUMÉ</h3>
          </a>
          <Link href="/talks.html">
            <a css={tableOfContentsItemStyle}><h3>TALKS</h3></a>
          </Link>
        </div>
      </Content>
    </Shell>
  )
}

export default Index

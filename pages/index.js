import Link from 'next/link'
import { css } from '@emotion/core'
import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import { gray30, gray90, gray70 } from '../util/colors'

const tableOfContentsItemStyle = css`
  text-decoration: none;
  cursor: pointer;
  tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;

  @media (hover:hover) {
    &:hover h3 {
      color: ${gray90};

      @media (prefers-color-scheme: dark) {
        color: #fff;
      }
    }
  }

  h3 {
    margin-bottom: 0;
    margin-top: 0;
    color: ${gray30};

    @media (prefers-color-scheme: dark) {
      color: ${gray70};
    }
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
          <Link prefetch href="/photos">
            <a css={tableOfContentsItemStyle}><h3>PHOTOS</h3></a>
          </Link>
          <Link prefetch href="/posts">
            <a css={tableOfContentsItemStyle}><h3>POSTS</h3></a>
          </Link>
          <Link prefetch href="/projects">
            <a css={tableOfContentsItemStyle}><h3>PROJECTS</h3></a>
          </Link>
          <Link prefetch href="/publications">
            <a css={tableOfContentsItemStyle}><h3>PUBLICATIONS</h3></a>
          </Link>
          <a href="https://www.linkedin.com/in/cgondim/" rel="noopener noreferrer" target="_blank" css={tableOfContentsItemStyle}>
            <h3>RÉSUMÉ</h3>
          </a>
          <Link href="/talks">
            <a css={tableOfContentsItemStyle}><h3>TALKS</h3></a>
          </Link>
        </div>
      </Content>
    </Shell>
  )
}

export default Index

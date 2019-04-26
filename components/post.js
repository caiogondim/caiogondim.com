import { css } from '@emotion/core'
import Shell from './shell'
import Header from './header'
import Content from './content'
import ListItemHeader from './list-item-header'
import PageIntro from './page-intro'

const postStyle = css`
  /* Looks like h3 */
  h1 {
    font-size: 1.953rem;
    letter-spacing: -0.09rem;
    line-height: 1.2;
  }

  /* Looks like h6 */
  h2 {
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    border-radius: 10px
  }

  video {
    border-radius: 10px;
  }
`

const postHeaderStyle = css`
  margin-bottom: 3.815rem;
`

function Post ({ children, meta }) {
  return (
    <Shell>
      <Header pageName="/ Posts" />
      <Content>
        <PageIntro>
          Random things at random times.
        </PageIntro>
        <div css={postStyle}>
          <ListItemHeader title={meta.title} titleLink={meta.link} innerCss={postHeaderStyle} />
          {children}
        </div>
      </Content>
    </Shell>
  )
}

export default Post

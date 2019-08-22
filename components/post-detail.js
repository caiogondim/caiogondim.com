import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Shell from './shell'
import Header from './header'
import Content from './content'
import ListItemHeader from './list-item-header'

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
    margin-top: 3.815rem;
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

function PostDetail ({ children, meta }) {
  return (
    <Shell>
      <Header pageName="/ Posts" />
      <Content>
        <div css={postStyle}>
          <ListItemHeader
            title={meta.title}
            subtitle={meta.dateString}
            innerCss={postHeaderStyle}
          />
          {children}
        </div>
      </Content>
    </Shell>
  )
}

PostDetail.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string
  })
}

export default PostDetail

import { css } from '@emotion/core'
import formatDateToPost from '../util/format-date-to-post'
import { gray60 } from '../util/colors'

const titleStyle = css`
  margin-top: 0;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const dateStyle = css`
  margin: 0;
  color: ${gray60};
`

function PostHeader ({ meta, innerCss }) {
  const dateFormated = formatDateToPost(meta.date)
  return (
    <div css={innerCss}>
      <p css={dateStyle}>{dateFormated}</p>
      <h3 css={titleStyle}><a href={meta.link}>{meta.title}</a></h3>
    </div>
  )
}

export default PostHeader

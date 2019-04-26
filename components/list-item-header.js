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

const subtitleStyle = css`
  margin: 0;
  color: ${gray60};
`

function ListItemHeader ({ title, subtitle, titleLink, innerCss }) {
  return (
    <div css={innerCss}>
      <p css={subtitleStyle}>{subtitle}</p>
      <h3 css={titleStyle}>
        {titleLink
          ? <a href={titleLink}>{title}</a>
          : title
        }
      </h3>
    </div>
  )
}

export default ListItemHeader

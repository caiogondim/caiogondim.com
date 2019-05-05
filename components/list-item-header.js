import PropTypes from 'prop-types'
import { css } from '@emotion/core'
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

ListItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
  innerCss: PropTypes.shape({})
}

ListItemHeader.defaultProps = {
  titleLink: null,
  innerCss: null
}

export default ListItemHeader

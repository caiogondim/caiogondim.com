import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const style = css`
  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`

function InvertIfDarkMode ({ children, inline }) {
  if (inline) {
    return (
      <span css={style}>
        {children}
      </span>
    )
  }

  return (
    <div css={style}>
      {children}
    </div>
  )
}

InvertIfDarkMode.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool
}

export default InvertIfDarkMode

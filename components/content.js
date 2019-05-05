import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const style = css`
  > *:last-child {
    margin-bottom: 0;
  }
`

function Content ({ children }) {
  return (
    <div className="u-readable" css={style}>
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content

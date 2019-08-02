import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { gray30 } from '../util/colors'

const yearSeparatorStyle = css`
    color: ${gray30};
    margin-bottom: 3.815rem;
    margin-top: 3.815rem;
`

function YearSeparator ({ children }) {
  return <h1 css={yearSeparatorStyle}>{children}</h1>
}

YearSeparator.propTypes = {
  children: PropTypes.node
}

export default YearSeparator

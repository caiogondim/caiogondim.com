import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { gray90, gray10, gray100 } from '../util/colors'

const titleStyle = (sticky) => css`
  ${sticky
    ? `
      position: sticky;
      position: -webkit-sticky;
    `
    : 'position: relative;'}

  top: 0px;
  z-index: 1;
  background-color: #fff;
  border-top: 2px solid ${gray90};
  margin-top: 3.815rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background-color: ${gray100};
    border-color: #fff;
  }
`

const subtitleStyle = css`
  right: 0;
  position: absolute;
  display: inline-block;
  color: ${gray10};
`

function HeaderDivider ({ title, subtitle, sticky }) {
  return (
    <h6 css={titleStyle(sticky)}>
      {title}
      {subtitle && <span css={subtitleStyle}>{subtitle}</span>}
    </h6>
  )
}

HeaderDivider.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sticky: PropTypes.bool
}

HeaderDivider.defaultProps = {
  sticky: false
}

export default HeaderDivider

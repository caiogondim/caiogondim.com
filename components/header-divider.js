import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { gray90, gray30, gray100 } from '../util/colors'

const wrapperStyle = (sticky) => css`
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
  display: flex;

  @media (prefers-color-scheme: dark) {
    background-color: ${gray100};
    border-color: #fff;
  }
`

const titleStyle = css`
  flex: 1 1 auto;
`

const spacer = css`
  min-width: 1ch;
`

const subtitleStyle = css`
  flex: 1 1 auto;
  color: ${gray30};
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
`

function HeaderDivider ({ title, subtitle, sticky, style }) {
  return (
    <h6 css={wrapperStyle(sticky)} style={style}>
      <span css={titleStyle}>{title}</span>
      <span css={spacer} />
      {subtitle && <span css={subtitleStyle}>{subtitle}</span>}
    </h6>
  )
}

HeaderDivider.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sticky: PropTypes.bool,
  style: PropTypes.shape({})
}

HeaderDivider.defaultProps = {
  sticky: false,
  style: {}
}

export default HeaderDivider

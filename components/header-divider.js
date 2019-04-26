import { css, cx } from '@emotion/core'
import { gray90, gray30 } from '../util/colors'

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
`;

const subtitleStyle = css`
  right: 0;
  position: absolute;
  display: inline-block;
  color: ${gray30};
`;

function StickyHeader ({ title, subtitle, sticky, innerCss }) {
  return (
    <h6 css={titleStyle(sticky)}>
      {title}
      {subtitle && <span css={subtitleStyle}>{subtitle}</span>}
    </h6>
  )
}

export default StickyHeader

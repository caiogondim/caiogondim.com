import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const style = css`
  position: relative;
  width: 100%;
  display: block;

  & > * {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

function AspectRatio ({ ratio, children, backgroundColor }) {
  const [width, height] = ratio.split(':').map(Number)
  const paddingBottom = `${(height / width) * 100}%`

  return (
    <span css={style} style={{ paddingBottom, backgroundColor }}>
      {children}
    </span>
  )
}

AspectRatio.propTypes = {
  ratio: PropTypes.string.isRequired,
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}

AspectRatio.defaultProps = {
  backgroundColor: 'transparent'
}

export default AspectRatio

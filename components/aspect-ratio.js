import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { white3 } from '../util/colors'

const style = css`
  position: relative;
  width: 100%;

  & > * {
    position: absolute;
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
    <div css={style} style={{ paddingBottom, backgroundColor }}>
      {children}
    </div>
  )
}

AspectRatio.propTypes = {
  ratio: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

AspectRatio.defaultProps = {
  backgroundColor: white3
}

export default AspectRatio

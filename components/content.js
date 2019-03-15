import { css } from '@emotion/core'

const style = css`
  > *:last-child {
    margin-bottom: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  opacity: 0;
  animation: fadeIn 0.262s 0.1672s forwards;
`

function Content({ children }) {
  return (
    <div className="u-readable" css={style}>
      {children}
    </div>
  )
}

export default Content

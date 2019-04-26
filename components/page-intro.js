import { css } from '@emotion/core'

const style = css`
  margin-bottom: 3.815rem;
`

function PageIntro({ children }) {
  return (
    <p css={style}>{children}</p>
  )
}

export default PageIntro

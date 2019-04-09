import { css } from '@emotion/core'

const style = css`
  border: 0;

  &::before {
    content: "...";
    letter-spacing: 0.64rem;
    display: inline-block;
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
`

function Asterism () {
  return (
    <hr css={style} />
  )
}

export default Asterism

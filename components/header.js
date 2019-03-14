import { css } from '@emotion/core'

const sectionStyle = css`
  display: flex;
  padding-top: 0;
  max-width: 66rem;

  a {
    text-decoration: none;
  }

  h1 {
    margin-top: 0;
  }
`

const logoStyle = css`
  width: 3.052rem;
  height: 3.052rem;
  border-radius: 50%;
  background-color: #F3F3F3;
`

const logoTextStyle = css`
  display: block;
  color: #777677;
  font-weight: bold;
  margin-top: -1rem;
  text-transform: uppercase;
`

function Header ({ pageName = 'CAIO GONDIM' }) {
  return (
    <section css={sectionStyle} className="u-readable">
      <header>
        <a href="/">
          <h1><img src="/static/logo.svg" css={logoStyle} /></h1>
          <h6 css={logoTextStyle}>/ {pageName}</h6>
        </a>
      </header>
    </section>
  )
}

export default Header

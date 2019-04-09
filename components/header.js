import { css } from '@emotion/core'
import Link from 'next/link'
import { gray60, white4 } from '../util/colors'

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
  background-color: ${white4};
`

const logoTextStyle = css`
  display: block;
  color: ${gray60};
  font-weight: bold;
  margin-top: -1rem;
  text-transform: uppercase;
  letter-spacing: -0.023rem;
`

function Header ({ pageName = 'CAIO GONDIM' }) {
  return (
    <section css={sectionStyle} className="u-readable">
      <header>
        <Link prefetch href="/">
          <a>
            <h1><img src="/static/logo.svg" css={logoStyle} /></h1>
            <h6 css={logoTextStyle}>{pageName}</h6>
          </a>
        </Link>
      </header>
    </section>
  )
}

export default Header

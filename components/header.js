import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Link from 'next/link'
import { white4 } from '../util/colors'

const sectionStyle = css`
  display: flex;
  padding-top: 0;
  max-width: 66rem;
  margin-bottom: 3.815rem;

  a {
    text-decoration: none;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
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
  margin-bottom: 1rem;
  font-size: 0px;
  overflow: hidden;
`

const logoDarkStyle = css`
  ${logoStyle};

  @media (prefers-color-scheme: light) {
    display: inline-block;
  }

  @media (prefers-color-scheme: dark) {
    display: none;
  }
`

const logoLightStyle = css`
  ${logoStyle};
  display: none;

  @media (prefers-color-scheme: dark) {
    display: inline-block;
  }

  @media (prefers-color-scheme: light) {
    display: none;
  }
`

const logoTextStyle = css`
  display: block;
  font-weight: bold;
  margin-top: -1rem;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: -0.023rem;
`

function Header ({ pageName }) {
  return (
    <section css={sectionStyle}>
      <header>
        <Link href="/">
          <a>
            <img src="/static/logo-dark.png" css={logoDarkStyle} alt="logo" width={1024} height={1024} />
            <img src="/static/logo-light.png" css={logoLightStyle} alt="logo" width={1024} height={1024} />
            <h6 css={logoTextStyle}>{pageName}</h6>
          </a>
        </Link>
      </header>
    </section>
  )
}

Header.propTypes = {
  pageName: PropTypes.string
}

Header.defaultProps = {
  pageName: 'CAIO GONDIM'
}

export default Header

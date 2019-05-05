import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Link from 'next/link'
import { white4 } from '../util/colors'

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
  font-weight: bold;
  margin-top: -1rem;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: -0.023rem;
`

function Header ({ pageName }) {
  return (
    <section css={sectionStyle} className="u-readable">
      <header>
        <Link prefetch href="/">
          <a>
            <h1>
              <picture>
                <source srcSet="/static/logo-light.svg" media="(prefers-color-scheme: dark)" />
                <img src="/static/logo-dark.svg" css={logoStyle} />
              </picture>
            </h1>
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

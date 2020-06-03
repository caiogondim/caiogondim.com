import PropTypes from 'prop-types'
import Head from 'next/head'
import { Global, css } from '@emotion/core'
import isDarkMode from '../util/is-dark-mode'

const shellStyle = ({ width }) => {
  return css`
    width: ${width};
    max-width: 100%;
  `
}

function Shell ({ children, width }) {
  return (
    <div css={shellStyle({ width })}>
      <Head>
        <link rel="stylesheet" href="/static/superstylin.css" />
        <title>CAIO GONDIM</title>
        {isDarkMode()
          ? <link rel="icon" type="image/png" href="/static/logo-light.png" />
          : <link rel="icon" type="image/png" href="/static/logo-dark.png" />
        }
        <Global
          styles={css`
            body {
              margin: calc((100vh / 25) * 1.563) calc((100vw / 25) * 1.563);
              max-width: 100%;
            }

            section {
              margin: 0 0 3.815rem 0;
            }

            section:last-child {
              margin: 0;
            }

            a {
              -webkit-tap-highlight-color: rgba(243, 243, 243, 0.5);
            }

            // Remove extra line on code blocks
            code::after {
              display: none;
            }
          `}
        />
      </Head>
      {children}
    </div>
  )
}

Shell.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
}

Shell.defaultProps = {
  width: '66ch'
}

export default Shell

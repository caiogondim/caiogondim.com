import PropTypes from 'prop-types'
import Head from 'next/head'
import superstylin from 'superstylin'
import { Global, css } from '@emotion/core'
import isDarkMode from '../util/is-dark-mode'

function Shell ({ children }) {
  return (
    <div>
      <Head>
        <title>CAIO GONDIM</title>
        {isDarkMode()
          ? <link rel="icon" type="image/png" href="/static/logo-light.png" />
          : <link rel="icon" type="image/png" href="/static/logo-dark.png" />
        }
        <Global
          styles={css`
            ${superstylin.toString()}

            body {
              margin: calc((100vw / 25) * 1.563);
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

            main .from-back-forward-cache {
              opacity: 1;
              animation: none;
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
  children: PropTypes.node
}

export default Shell

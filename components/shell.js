import PropTypes from 'prop-types'
import Head from 'next/head'
import superstylin from 'superstylin'
import { Global, css } from '@emotion/core'

function Shell ({ children }) {
  return (
    <div>
      <Head>
        <title>CAIO GONDIM</title>
        <link rel="icon" type="image/png" href="/static/logo.png" />
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

            ::selection {
              filter: invert(100%);
              background-color: #343334;
              color: white;
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
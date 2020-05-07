import PropTypes from 'prop-types'

function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.shape()
}

export default App

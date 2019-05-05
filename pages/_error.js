import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'

class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <Shell>
        <Header pageName="Error" />
        <Content>
          {this.props.statusCode && <h1>{this.props.statusCode}</h1>}
          <p><Link href="/"><a>Go to index page</a></Link></p>
        </Content>
      </Shell>
    )
  }
}

Error.propTypes = {
  statusCode: PropTypes.number
}

export default Error

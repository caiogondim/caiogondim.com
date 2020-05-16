import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'

class FourOhFour extends React.Component {
  render () {
    return (
      <Shell>
        <Header pageName="Error" />
        <Content>
          <h1>404</h1>
          <p><Link href="/"><a>Go to index page</a></Link></p>
        </Content>
      </Shell>
    )
  }
}

FourOhFour.propTypes = {
  statusCode: PropTypes.number
}

export default FourOhFour

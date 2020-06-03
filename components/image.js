import propTypes from 'prop-types'
import { Component } from 'react'
import { css } from '@emotion/core'

const imgStyle = css`
  width: 100%;
  transition: opacity 0.25s ease-in;
`

class Image extends Component {
  constructor (props) {
    super(props)

    this.state = {
      didLoad: false,
      didError: false
    }
  }

  onLoad () {
    this.setState({ didLoad: true })
  }

  onError () {
    this.setState({ didError: true })
  }

  render () {
    const { src, alt = '' } = this.props
    const { didLoad, didError } = this.state
    const opacity = didLoad || didError ? 1 : 0.000001
    return <img src={src} alt={alt} onLoad={this.onLoad.bind(this)} onError={this.onError.bind(this)} css={imgStyle} style={{ opacity }} loading="lazy" />
  }
}

Image.propTypes = {
  src: propTypes.string,
  alt: propTypes.string
}

export default Image

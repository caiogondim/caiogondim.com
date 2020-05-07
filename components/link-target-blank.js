import PropTypes from 'prop-types'

function LinkTargetBlank ({ href, children, css_ }) {
  return <a href={href} css={css_} target="_blank" rel="noopener noreferrer">{children}</a>
}

LinkTargetBlank.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  css_: PropTypes.shape()
}

export default LinkTargetBlank

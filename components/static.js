import { createElement } from 'react'

export default function StaticContent ({ children, element = 'div', ...props }) {
  // if we're in the server or a spa navigation, just render it
  if (typeof window === 'undefined') {
    return createElement(element, {
      ...props,
      children
    })
  }

  // avoid re-render on the client
  return createElement(element, {
    ...props,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: '' }
  })
}

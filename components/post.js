import { css } from '@emotion/core'
import Shell from './shell'
import Header from './header'
import Content from './content'

const postStyle = css`
  /* Looks like h3 */
  h1 {
    font-size: 1.953rem;
    letter-spacing: -0.09rem;
    line-height: 1.2;
  }

  /* Looks like h6 */
  h2 {
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 1.5;
  }
`

export default function Post ({ children }) {
  return (
    <Shell>
      <Header pageName="Post" />
      <Content>
        <div css={postStyle}>
          {children}
        </div>
      </Content>
    </Shell>
  )
}

import { css } from '@emotion/core'
import Shell from '../../components/shell'
import Header from '../../components/header'
import Content from '../../components/content'
import listOfPosts from '../../util/list-of-posts'
import formatDateToPost from '../../util/format-date-to-post'
import { gray60 } from '../../util/colors'

const postsStyle = css`
  list-style: none;

  li {
    margin: 0 0 3.815rem 0;
  }

  h3 {
    margin-top: 0;

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`

const postDateStyle = css`
  margin: 0;
  color: ${gray60};
`

export default function Posts () {
  return (
    <Shell>
      <Header pageName="Posts" />
      <Content>
        <ul css={postsStyle}>
          {listOfPosts.map(post => {
            const postLink = `/posts/${post.path}`
            const dateFormated = formatDateToPost(post.date)

            return (
              <li key={postLink}>
                <p css={postDateStyle}>{dateFormated}</p>
                <h3><a href={postLink}>{post.title}</a></h3>
                <p>{post.summary}</p>
                <p><a href={postLink}>Read more</a></p>
              </li>
            )
          })}
        </ul>
      </Content>
    </Shell>
  )
}

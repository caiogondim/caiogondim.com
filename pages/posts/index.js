import Shell from '../../components/shell'
import Header from '../../components/header'
import Content from '../../components/content'
import listOfPosts from '../../util/list-of-posts'

export default function Posts () {
  return (
    <Shell>
      <Header pageName="Posts" />
      <Content>
        <span>Posts</span>
        {listOfPosts.map(post => {
          return (
            <li>
              <h3><a href={`/posts/${post.path}`}>{post.title}</a></h3>
            </li>
          )
        })}
      </Content>
    </Shell>
  )
}

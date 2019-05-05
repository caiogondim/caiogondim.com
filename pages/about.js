import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import HeaderDivider from '../components/header-divider'

function About () {
  return (
    <Shell>
      <Header pageName="/ About" />
      <Content>
        <p>
          I&#039;m a Brazilian software engineer, passionate about web technologies and currently living in New
          York, working for <a href="https://nytimes.com" target="_blank" rel="noopener noreferrer">The New York Times</a>.
        </p>
        <p>
          My current areas of interest are:
        </p>
        <ul>
          <li>Frontend performance</li>
          <li>Media playback</li>
          <li>Media streaming</li>
          <li>Peer-to-peer</li>
        </ul>
        <HeaderDivider title="Contact" />
        <p>
          <a href="mailto://me@caiogondim.com">me@caiogondim.com</a><br />
          <a href="https://twitter.com/@caio_gondim" target="_blank" rel="noopener noreferrer">Twitter</a><br />
          <a href="https://github.com/caiogondim" target="_blank" rel="noopener noreferrer">GitHub</a><br />
          <a href="https://linkedin.com/in/cgondim" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
          <a href="https://instagram.com/caiogondim" target="_blank" rel="noopener noreferrer">Instagram</a><br />
        </p>
      </Content>
    </Shell>
  )
}

export default About

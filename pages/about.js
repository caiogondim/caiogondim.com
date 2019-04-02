import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'

function About () {
  return (
    <Shell>
      <Header pageName="About" />
      <Content>
        <p>
          I'm a Brazilian software engineer, passionate about web technologies and currently living in New
          York, working for <a href="https://mobile.nytimes.com" target="_blank">The New York Times</a>.
        </p>
        <p>
          My current areas of interest are:
          <ul>
            <li>Frontend performance</li>
            <li>Media playback</li>
            <li>Media streaming</li>
            <li>Peer-to-peer</li>
          </ul>
        </p>
        <h6 className="u-separator">Contact</h6>
        <p>
          <a href="mailto://me@caiogondim.com">me@caiogondim.com</a><br />
          <a href="https://twitter.com/@caio_gondim" target="_blank">Twitter</a><br />
          <a href="https://github.com/caiogondim" target="_blank">GitHub</a><br />
          <a href="https://linkedin.com/in/cgondim" target="_blank">LinkedIn</a><br />
          <a href="https://instagram.com/caiogondim" target="_blank">Instagram</a><br />
        </p>
      </Content>
    </Shell>
  )
}

export default About

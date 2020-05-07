import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import HeaderDivider from '../components/header-divider'
import LinkTargetBlank from '../components/link-target-blank'
import Static from '../components/static'

function About () {
  return (
    <Shell>
      <Header pageName="/ About" />
      <Content>
        <Static>
          <p>
            I&#039;m a software engineer, passionate about web technologies and currently living in New
            York, working for <LinkTargetBlank href="https://nytimes.com">The New York Times</LinkTargetBlank>.
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
            <LinkTargetBlank href="https://twitter.com/@caio_gondim">Twitter</LinkTargetBlank><br />
            <LinkTargetBlank href="https://github.com/caiogondim">GitHub</LinkTargetBlank><br />
            <LinkTargetBlank href="https://linkedin.com/in/cgondim">LinkedIn</LinkTargetBlank><br />
            <LinkTargetBlank href="https://instagram.com/caiogondim">Instagram</LinkTargetBlank><br />
          </p>
        </Static>
      </Content>
    </Shell>
  )
}

export default About

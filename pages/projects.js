import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import ListItemHeader from '../components/list-item-header'
import PageIntro from '../components/page-intro'
import { css } from '@emotion/core'
import { gray30 } from '../util/colors'

const listStyle = css`
  list-style: none;

  li {
    margin-left: 0;
    margin-bottom: 3.815rem;
  }
`

function Projects () {
  return (
    <Shell>
      <Header pageName="/ Projects" />
      <Content>
        <div>
          <PageIntro>
            Some of the projects I was proud to be a part of.
          </PageIntro>

          <ul css={listStyle}>
            <li>
              <ListItemHeader
                title="Front in Amsterdam"
                subtitle="August, 2015"
              />
              <p>
                Front in Amsterdam is a non-profit international conference
                organised by front-end enthusiasts. An organisation working to
                promote front-end technologies such as HTML5, CSS3, JavaScript,
                and UX Design.
              </p>
            </li>
            <li>
              <ListItemHeader
                title="Volunteer work in India"
                subtitle="August, 2015"
              />
              <p>
                Lived in New Delhi, India, for two months to help the
                Commonwealth Human Rights Initiative to build their new website
                and experience a new culture.
              </p>
            </li>
            <li>
              <ListItemHeader
                title="Loop Infinito"
                subtitle="2012 – 2014"
                titleLink="http://loopinfinito.com.br"
              />
              <p>
                Blog about web development written in portuguese for the Brazilian community.
              </p>
              <p>
                <a href="http://loopinfinito.com.br">Website</a>
              </p>
            </li>
          </ul>
        </div>
      </Content>
    </Shell>
  )
}

export default Projects

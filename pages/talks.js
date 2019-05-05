import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import { css } from '@emotion/core'
import { gray30 } from '../util/colors'

const yearSeparatorStyle = css`
    color: ${gray30};
    margin-bottom: 3.815rem;
    margin-top: 3.815rem;
`

const talkContainerStyle = css`
  address {
    font-style: normal;
  }
`

function Talks () {
  return (
    <Shell>
      <Header pageName="/ Talks" />
      <Content>
        <div>
          <p>
            I love to give talks and meet awesome people at conferences. If you want to invite me to an event,
            send me an <a href="mailto:me@caiogondim.com">email</a> and let&#039;s get in touch.
          </p>

          <h1 css={yearSeparatorStyle}>2016</h1>

          <section css={talkContainerStyle}>
            <h3>Hack São Luís</h3>
            <div>
              <time>November, 2016</time>
              <address>São Luís, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/ab-test" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <h1 css={yearSeparatorStyle}>2015</h1>

          <section css={talkContainerStyle}>
            <h3>Node.js meetup</h3>
            <div>
              <time>April, 2015</time>
              <address>Amsterdam, Netherlands 📍</address>
              <a href="https://github.com/caiogondim/logdown.js" target="_blank" rel="noopener noreferrer">Project</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>A/B Test seminar</h3>
            <div>
              <time>April, 2015</time>
              <address>São Luís, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/ab-test" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Conferência CSS Brasil</h3>
            <div>
              <time>May, 2015</time>
              <address>São Paulo, Brazil 📍</address>
              <a href="http://www.slideshare.net/caiogondim/256-shades-of-r-g-and-b" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Hack São Luís</h3>
            <div>
              <time>October, 2015</time>
              <address>São Luís, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/ab-test" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <h1 css={yearSeparatorStyle}>2014</h1>

          <section css={talkContainerStyle}>
            <h3>Front in Fortaleza</h3>
            <div>
              <time>May, 2014</time>
              <address>Fortaleza, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/designing-js-apis" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>W3C Web.br</h3>
            <div>
              <time>September, 2014</time>
              <address>São Paulo, Brazil 📍</address>
              <a href="http://conferenciaweb.w3c.br/2014/" target="_blank" rel="noopener noreferrer">Event</a><br />
              <a href="https://speakerdeck.com/caiogondim/ab-test" target="_blank" rel="noopener noreferrer">Slides</a><br />
              <a href="https://www.youtube.com/watch?v=KcwIh1TfgI0" target="_blank" rel="noopener noreferrer">Video</a><br />
            </div>
          </section>

          <h1 css={yearSeparatorStyle}>2013</h1>

          <section css={talkContainerStyle}>
            <h3>RS.js</h3>
            <div>
              <time>March, 2013</time>
              <address>Porto Alegre, Brazil 📍</address>
              <a href="http://rsjs.org/2013/" target="_blank" rel="noopener noreferrer">Event</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>OlhóSEO</h3>
            <div>
              <time>May, 2013</time>
              <address>Florianópolis, Brazil 📍</address>
              <a href="http://www.olhoseo.com.br/2013/" target="_blank" rel="noopener noreferrer">Event</a><br />
              <a href="https://speakerdeck.com/caiogondim/html5-sensitivo" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Front in Rio</h3>
            <div>
              <time>June, 2013</time>
              <address>Rio de Janeiro, Brazil 📍</address>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Sampa.js</h3>
            <div>
              <time>June, 2013</time>
              <address>São Paulo, Brazil 📍</address>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Front in Sampa</h3>
            <div>
              <time>September, 2013</time>
              <address>São Paulo, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/css-layout-o-ontem-o-hoje-e-o-depois" target="_blank" rel="noopener noreferrer">Slides</a><br />
              <a href="https://www.youtube.com/watch?v=MjK1MCjqmpU" target="_blank" rel="noopener noreferrer">Video</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>FEEC</h3>
            <div>
              <time>November, 2013</time>
              <address>Recife, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/html5-sensitivo" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>W3C Web.br</h3>
            <div>
              <time>November, 2013</time>
              <address>São Paulo, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/html5-sensitivo" target="_blank" rel="noopener noreferrer">Slides</a><br />
              <a href="http://conferenciaweb.w3c.br/2013/" target="_blank" rel="noopener noreferrer">Event</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>CE.js</h3>
            <div>
              <time>November, 2013</time>
              <address>Fortaleza, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/html5-sensitivo" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>Serra do Silício</h3>
            <div>
              <time>November, 2013</time>
              <address>Nova Friburgo, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/html5-sensitivo" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <h1 css={yearSeparatorStyle}>2012</h1>

          <section css={talkContainerStyle}>
            <h3>Front in Maceió</h3>
            <div>
              <time>October, 2012</time>
              <address>Maceió, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/html5-sensitivo" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <h1 css={yearSeparatorStyle}>2011</h1>

          <section css={talkContainerStyle}>
            <h3>3.PHP</h3>
            <div>
              <time>October, 2011</time>
              <address>São Luís, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/html5-seu-navegador-nao-e-mais-o-mesmo" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>

          <section css={talkContainerStyle}>
            <h3>PHP Conf</h3>
            <div>
              <time>December, 2011</time>
              <address>São Paulo, Brazil 📍</address>
              <a href="https://speakerdeck.com/caiogondim/html5-seu-navegador-nao-e-mais-o-mesmo" target="_blank" rel="noopener noreferrer">Slides</a>
            </div>
          </section>
        </div>
      </Content>
    </Shell>
  )
}

export default Talks

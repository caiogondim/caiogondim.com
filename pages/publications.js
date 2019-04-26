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

function Publications () {
  return (
    <Shell>
      <Header pageName="/ Publications" />
      <Content>
        <div>
          <PageIntro>
            Words I wrote elsewhere.
          </PageIntro>

          <ul css={listStyle}>
            <li>
              <ListItemHeader
                title="How I wrote the world's fastest JavaScript memoization library"
                titleLink="https://community.risingstack.com/the-worlds-fastest-javascript-memoization-library/"
                subtitle="Article"
              />
              <p>An in-depth article on how I used the scientific method to create the fastest memoize library in JavaScript.</p>
              <p><a
                href="https://community.risingstack.com/the-worlds-fastest-javascript-memoization-library/"
                target="_blank"
              >Link</a></p>
            </li>
            <li>
              <ListItemHeader
                title="Coletânea Front-end: Uma antologia da comunidade front-end brasileira"
                titleLink="https://www.casadocodigo.com.br/products/livro-coletanea-front-end"
                subtitle="Book"
              />
              <p>A comunidade brasileira de programadores front-end e Web Designers é fantástica. Possui uma força imensa de elevar a qualidade da Web brasileira. Os milhares de representantes dessa comunidade produzem conteúdos ótimos em seus blogs, listas de discussão, Facebook e conversas de boteco. Nós nos encontramos em eventos memoráveis em todo o Brasil. Fazemos a Web progredir.</p>
              <p>Esse livro quer ser uma pequena celebração desse sucesso. Um grupo de 11 autores de renome nacional na comunidade se juntou para escrever artigos que julgamos relevantes para a Web. Os capítulos são independentes, cada um com seu autor. A única regra era: escrever algo memorável, que fizesse a diferença na Web brasileira.</p>
              <p><a
                href="https://www.casadocodigo.com.br/products/livro-coletanea-front-end"
                target="_blank"
              >Link</a></p>
            </li>
          </ul>
        </div>
      </Content>
    </Shell>
  )
}

export default Publications

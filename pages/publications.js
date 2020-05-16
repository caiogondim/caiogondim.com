import Shell from '../components/shell'
import Header from '../components/header'
import Content from '../components/content'
import ListItemHeader from '../components/list-item-header'
import PageIntro from '../components/page-intro'
import LinkTargetBlank from '../components/link-target-blank'
import { css } from '@emotion/core'

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
                titleLink="//community.risingstack.com/the-worlds-fastest-javascript-memoization-library/"
                subtitle="Article"
              />
              <p>An in-depth article on how I used the scientific method to create the fastest memoize library in JavaScript.</p>
            </li>
            <li>
              <ListItemHeader
                title="Coletânea Front-end: Uma antologia da comunidade front-end brasileira"
                titleLink="//www.casadocodigo.com.br/products/livro-coletanea-front-end"
                subtitle="Book"
              />
              <p>A comunidade brasileira de programadores front-end e Web Designers é fantástica. Possui uma força imensa de elevar a qualidade da Web brasileira. Os milhares de representantes dessa comunidade produzem conteúdos ótimos em seus blogs, listas de discussão, Facebook e conversas de boteco. Nós nos encontramos em eventos memoráveis em todo o Brasil. Fazemos a Web progredir.</p>
              <p>Esse livro quer ser uma pequena celebração desse sucesso. Um grupo de 11 autores de renome nacional na comunidade se juntou para escrever artigos que julgamos relevantes para a Web. Os capítulos são independentes, cada um com seu autor. A única regra era: escrever algo memorável, que fizesse a diferença na Web brasileira.</p>
            </li>
            <li>
              <ListItemHeader
                title="O que você pensa sobre o uso da tecnologia na transmissão de um saber?"
                titleLink="//escutatorio.com/blog/2017/6/26/o-que-voc-pensa-sobre-o-uso-da-tecnologia-na-transmisso-de-um-saber-por-caio-gondim"
                subtitle="Article"
              />
              <p>
                Post meu no <LinkTargetBlank href="https://escutatorio.com/">Escutatório</LinkTargetBlank> com
                meus 2 centavos sobre o assunto: &quot;O uso da tecnologia na transmissão de um saber&quot;.
              </p>
            </li>
            <li>
              <ListItemHeader
                title="TW Entrevista 05: Caio Gondim"
                titleLink="//www.treinaweb.com.br/blog/tw-entrevista-05-caio-gondim/"
                subtitle="Interview"
              />
              <p>
                Uma entrevista que dei ao blog <LinkTargetBlank href="https://www.treinaweb.com.br">TreinaWeb</LinkTargetBlank> contando
                um pouco da minha carreira e experiências.
              </p>
            </li>
            <li>
              <ListItemHeader
                title="Como se tornar um desenvolvedor melhor"
                titleLink="//tableless.com.br/pesquisa-como-se-tornar-um-desenvolvedor-melhor/"
                subtitle="Interview"
              />
              <p>
                O <LinkTargetBlank href="https://tableless.com.br">Tableless</LinkTargetBlank> me
                perguntou &quot;Como se tornar um desenvolvedor melhor&quot; e nesse post dei minha opiniao ao lado de varios outros influentes profissionais brasileiros.
              </p>
            </li>
          </ul>
        </div>
      </Content>
    </Shell>
  )
}

export default Publications

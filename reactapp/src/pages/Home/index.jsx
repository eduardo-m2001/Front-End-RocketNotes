import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Home(){
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <ul>
          <li><a href="#">Todos</a></li>
          <li><a href="#">Frontend</a></li>
          <li><a href="#">Node</a></li>
          <li><a href="#">React</a></li>
        </ul>
      </Menu>

      <Search>
        <input type="text" name="" placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
      <Section title="Minhas notas">
        <div>
          <h1>React Modal</h1>
          <div className="tags">
            <Tag title="React" />
          </div>
        </div>

        <div>
          <h1>Exemplo de Middleware</h1>
          <div className="tags">
            <Tag title="express" />
            <Tag title="nodejs" />
          </div>
        </div>
       </Section>
      </Content>

      <NewNote>
        <div>
          <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9844 7.98438H7.98438V13.9844H6.01562V7.98438H0.015625V6.01562H6.01562V0.015625H7.98438V6.01562H13.9844V7.98438Z" fill="#232129"/></svg></span>
          <span>Criar Nota</span>
        </div>
      </NewNote>

    </Container>
  )
}
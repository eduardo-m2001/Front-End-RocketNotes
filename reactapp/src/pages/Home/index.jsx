import { FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
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
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
      <Section title="Minhas notas">
          <Note data={{
            title: 'React Modal',
            tags: [
              { id: '1', name: 'React'},
              ]}}/>

              <Note data={{
            title: 'Exemplo de Middleware',
            tags: [
              { id: '1', name: 'express'},
              { id: '2', name: 'nodejs'}
              ]}}/>
       </Section>
       
      </Content>

      <NewNote to="/new">
        <div>
          <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9844 7.98438H7.98438V13.9844H6.01562V7.98438H0.015625V6.01562H6.01562V0.015625H7.98438V6.01562H13.9844V7.98438Z" fill="#232129"/></svg></span>
          <span>Criar Nota</span>
        </div>
      </NewNote>

    </Container>
  )
}
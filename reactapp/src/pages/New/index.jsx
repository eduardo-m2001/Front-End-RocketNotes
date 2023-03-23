import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> 4bc4b3b56954c7335085bfe358e4078bcc83d055

import { Container, Form } from './styles'


export function New() {
  return (
    <Container>
      <Header />

      <main>

        <Form>
          <header>
            <h1>Criar Nota</h1>
<<<<<<< HEAD
            <Link to="/">voltar</Link>
=======
            <a href="/">voltar</a>
>>>>>>> 4bc4b3b56954c7335085bfe358e4078bcc83d055
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Novo marcador" />  
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
        
      </main>
    </Container>
  )
}
import { useState, useEffect } from 'react'
import { Container, Links, Content } from './styles'
import { useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  const parms = useParams()

  return (
    <Container>
      <Header />
    {
      data && 
      <main>
        <Content>
         <ButtonText title="Excluir nota"/> 

          <h1>
            {data.title}
          </h1>

          <p>
            {data.description}
          </p>

       { data.link &&
        <Section title="Links úteis">
           <Links>
             {
              data.links.map(link => (
                <li key={String(link.id)}>
                  <a href={link.url}>
                    {link.url}
                  </a>
                </li>
              ))
             }
           </Links>
         </Section>
        }

         <Section title="Marcadores">
           <Tag title="express" />
           <Tag title="nodejs" />
         </Section>

         <Button title="Voltar"/>

      </Content>
      </main>

    }

    </Container>
  )
}
import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { api } from '../../services/api'
import { useNavigate  } from 'react-router-dom'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function Home(){
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if(tagName === "all") {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)

    }else {
      setTagsSelected(prevState => [...prevState, tagName])
    }

  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }
    fetchTags()
  }, [])
  
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }
    fetchNotes()
  },[tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>

          <li>
            <ButtonText 
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length == 0}
            />
            </li>

        {
          tags && tags.map(tag => (

              <li key={String(tag.id)}><ButtonText title={tag.name}
              onClick={() => handleTagSelected(tag.name)}
              isActive={tagsSelected.includes(tag.name)}
              /></li>

          ))
        } 
      </Menu>

      <Search>
        <Input 
        placeholder="Pesquisar pelo título"
         icon={FiSearch} 
         onChange={(e) => setSearch(e.target.value)}
         />
      </Search>

      <Content>
      <Section title="Minhas notas">
          {
            notes.map(note => (
            <Note 
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
            />
            ))
          }
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
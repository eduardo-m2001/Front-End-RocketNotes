import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/eduardo-m2001.png" alt="Foto do Usuário"/>

        <div>
          <span>Bem-vindo</span>
          <strong>Eduardo Medeiros</strong>
        </div>
        
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}
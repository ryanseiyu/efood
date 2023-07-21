import { Link } from 'react-router-dom'
import { HeaderBar, Text, Container } from './styles'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
    <Container>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </Container>
  </HeaderBar>
)

export default Header

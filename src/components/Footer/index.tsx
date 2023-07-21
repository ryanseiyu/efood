import { Container, Image, List, Text } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram-round-svgrepo-com.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com.png'

const Footer = () => (
  <Container>
    <Image src={logo} alt="Logo" />
    <List>
      <li>
        <img src={instagram} alt="Instagram" />
      </li>
      <li>
        <img src={facebook} alt="Facebook" />
      </li>
      <li>
        <img src={twitter} alt="Twitter" />
      </li>
    </List>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer

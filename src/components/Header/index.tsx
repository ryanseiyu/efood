import { Link } from 'react-router-dom'
import {
  HeaderBar,
  HeaderBarHome,
  Text,
  Slogan,
  Container,
  ContainerHome,
  ImgHeader,
  TextDiv,
  RestaurantDiv
} from './styles'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector.png'
import image from '../../assets/images/image 1.png'

type Props = {
  type: 'headerHome' | 'headerProduct'
}

const Header = ({ type }: Props) => {
  if (type === 'headerHome') {
    return (
      <HeaderBarHome style={{ backgroundImage: `url(${vector})` }}>
        <ContainerHome>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <Slogan>
            Viva experiências gastronômicas no conforto da sua casa
          </Slogan>
        </ContainerHome>
      </HeaderBarHome>
    )
  }

  return (
    <>
      <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
        <Container>
          <Text>Restaurantes</Text>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <Text>0 produto(s) no carrinho</Text>
        </Container>
      </HeaderBar>
      <ImgHeader>
        <img src={image} alt="Macarrão" />
        <TextDiv>Italiana</TextDiv>
        <RestaurantDiv>La Dolce Vita Trattoria</RestaurantDiv>
      </ImgHeader>
    </>
  )
}

export default Header

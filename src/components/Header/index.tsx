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
import { MenuType } from '../../pages/MenuPage'

type Props = {
  type: 'headerHome' | 'headerProduct'
  restaurant?: MenuType
}

const Header = ({ type, restaurant }: Props) => {
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
  } else {
    if (!restaurant) {
      return <h3>Carregando...</h3>
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
          <img src={restaurant.capa} alt="Macarrão" />
          <TextDiv>{restaurant.tipo}</TextDiv>
          <RestaurantDiv>{restaurant.titulo}</RestaurantDiv>
        </ImgHeader>
      </>
    )
  }
}

export default Header

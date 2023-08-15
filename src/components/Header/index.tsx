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
  RestaurantDiv,
  HeaderBarContainer
} from './styles'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector.png'
import { MenuType } from '../../pages/MenuPage'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  type: 'headerHome' | 'headerProduct'
  restaurant?: MenuType
}

const Header = ({ type, restaurant }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
      <HeaderBarContainer>
        <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
          <Container>
            <Text>Restaurantes</Text>
            <Link to="/">
              <img src={logo} alt="EPLAY" />
            </Link>
            <Text onClick={openCart}>
              {items.length} produto(s) no carrinho
            </Text>
          </Container>
        </HeaderBar>
        <ImgHeader>
          <img src={restaurant.capa} alt="Imagem header" />
          <TextDiv>
            {restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)}
          </TextDiv>
          <RestaurantDiv>{restaurant.titulo}</RestaurantDiv>
        </ImgHeader>
      </HeaderBarContainer>
    )
  }
}

export default Header

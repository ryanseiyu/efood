import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useGetMenuQuery, useGetRestaurantIdQuery } from '../../services/api'

export type MenuItemsType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type MenuType = {
  titulo: string
  tipo: string
  capa: string
}

const MenuPage = () => {
  // const [menuState, setMenuState] = useState<MenuItemsType[]>([])
  // const [restaurantState, setRestaurantState] = useState<MenuType>(
  //   {} as MenuType
  // )
  const { id } = useParams()
  const { data: menuState } = useGetMenuQuery(id!)
  const { data: restaurantState } = useGetRestaurantIdQuery(id!)

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setMenuState(res.cardapio)
  //       setRestaurantState(res)
  //     })
  // }, [id])

  if (!menuState || !restaurantState) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header restaurant={restaurantState} type="headerProduct" />
      <ProductsList menu={menuState} title="Cardápio" />
    </>
  )
}

export default MenuPage

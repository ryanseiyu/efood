import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantsList from '../../components/RestaurantsList'

import Header from '../../components/Header'
import { MenuItemsType } from '../MenuPage'

export type RestaurantType = {
  infos: string[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItemsType[]
}

const Home = () => {
  const { data: restaurantesState, isLoading } = useGetRestaurantsQuery()

  if (restaurantesState) {
    return (
      <>
        <Header type="headerHome" />
        <RestaurantsList restaurants={restaurantesState} title="Restaurantes" />
      </>
    )
  }
  return <div>Carregando...</div>
}

export default Home

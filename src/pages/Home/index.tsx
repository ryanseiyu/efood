// import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList'

import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { MenuType } from '../MenuPage'

export type RestaurantType = {
  infos: string[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuType[]
}

const Home = () => {
  const [restaurantesState, setRestaurantesState] = useState<RestaurantType[]>(
    []
  )

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantesState(res))
  }, [])

  return (
    <>
      <Header type="headerHome" />
      <RestaurantsList restaurants={restaurantesState} title="Restaurantes" />
    </>
  )
}

export default Home

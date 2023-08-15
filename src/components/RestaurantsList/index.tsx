import Restaurants from '../Restaurant'
import { ContainerRestaurant, List } from './style'
import { RestaurantType } from '../../pages/Home'

export type Props = {
  title: string
  background?: string
  restaurants: RestaurantType[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurants: RestaurantType) => {
    const tags = []

    if (restaurants.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurants.tipo) {
      tags.push(
        restaurants.tipo.charAt(0).toUpperCase() + restaurants.tipo.slice(1)
      )
    }
    return tags
  }

  if (!restaurants) {
    return <div>Carregando...</div>
  }

  return (
    <ContainerRestaurant>
      <div className="container">
        <List>
          {restaurants.map((restaurants) => (
            <li key={restaurants.id}>
              <Restaurants
                id={restaurants.id}
                title={restaurants.titulo}
                description={restaurants.descricao}
                infos={getRestaurantTags(restaurants)}
                image={restaurants.capa}
                nota={restaurants.avaliacao}
              />
            </li>
          ))}
        </List>
      </div>
    </ContainerRestaurant>
  )
}

export default RestaurantsList

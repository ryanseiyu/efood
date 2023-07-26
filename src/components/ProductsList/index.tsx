import Food from '../../models/Food'
import Product from '../Product'
import { Container, List } from './style'

export type Props = {
  title: string
  background?: string
  foods: Food[]
}

const RestaurantList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((foods) => {
            return (
              <Product
                key={foods.id}
                title={foods.title}
                description={foods.description}
                infos={foods.infos}
                image={foods.image}
              />
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
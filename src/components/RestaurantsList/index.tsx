import Food from '../../models/Food'
import Product from '../Restaurant'
import { Container, List } from './style'

export type Props = {
  title: string
  background?: string
  foods: Food[]
}

const RestaurantsList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        {/* <h2>{title}</h2> */}
        <List>
          {foods.map((foods) => {
            return (
              <Product
                key={foods.id}
                title={foods.title}
                description={foods.description}
                infos={foods.infos}
                image={foods.image}
                nota={foods.nota}
              />
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList

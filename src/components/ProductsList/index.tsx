import Product from '../Product'
import { Container, List } from './style'
import { MenuItemsType } from '../../pages/MenuPage'

export type Props = {
  title: string
  background?: string
  menu: MenuItemsType[]
}

const ProductList = ({ menu }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {menu.map((menu) => (
            <li key={menu.id}>
              <Product
                foto={menu.foto}
                preco={menu.preco}
                id={menu.id}
                nome={menu.nome}
                descricao={menu.descricao}
                porcao={menu.porcao}
                menu={menu}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList

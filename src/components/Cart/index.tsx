import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import lixeira from '../../assets/images/lixo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Product'
import { openDelivery } from '../../store/reducers/delivery'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const abrirDelivery = () => {
    dispatch(openDelivery())
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco!
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)}>
                <img src={lixeira} alt="" />
              </button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <button onClick={abrirDelivery}>Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart

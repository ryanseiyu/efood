import { useDispatch, useSelector } from 'react-redux'
import { ButtonContainer, Container, OrderContainer, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { closeOrder } from '../../store/reducers/order'
import { closePayment } from '../../store/reducers/payment'
import { closeDelivery } from '../../store/reducers/delivery'
import { close } from '../../store/reducers/cart'

const Order = () => {
  const { orderOpen } = useSelector((state: RootReducer) => state.order)
  const dispatch = useDispatch()

  const fecharOrder = () => {
    dispatch(closeOrder())
    dispatch(closePayment())
    dispatch(closeDelivery())
    dispatch(close())
  }

  return (
    <OrderContainer className={orderOpen ? 'order-open' : ''}>
      {/* <Overlay /> */}
      <Sidebar>
        <Container>
          <p>Pedido realizado - ORDER_ID</p>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br></br>
            <br></br>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br></br>
            <br></br>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br></br>
            <br></br>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>

          <ButtonContainer>
            <button onClick={fecharOrder}>Concluir</button>
          </ButtonContainer>
        </Container>
      </Sidebar>
    </OrderContainer>
  )
}

export default Order

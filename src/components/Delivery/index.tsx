import { useDispatch, useSelector } from 'react-redux'
import {
  ButtonContainer,
  Container,
  DeliveryContainer,
  Row,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { closeDelivery } from '../../store/reducers/delivery'
import Input from '../Input'
import { openPayment } from '../../store/reducers/payment'

const Delivery = () => {
  const { deliveryOpen } = useSelector((state: RootReducer) => state.delivery)
  const dispatch = useDispatch()

  const fecharDelivery = () => {
    dispatch(closeDelivery())
  }

  const abrirPayment = () => {
    dispatch(openPayment())
  }

  return (
    <DeliveryContainer className={deliveryOpen ? 'delivery-open' : ''}>
      <Sidebar>
        <Container>
          <p>Entrega</p>
          <Input title="Quem irá receber">
            <input id="nome" type="text" />
          </Input>
          <Input title="Endereço">
            <input id="endereco" type="text" />
          </Input>
          <Input title="Cidade">
            <input id="cidade" type="text" />
          </Input>
          <Row>
            <Input className="cepClass" title="CEP">
              <input id="cep" type="number" />
            </Input>
            <Input title="Número">
              <input id="numero" type="number" />
            </Input>
          </Row>
          <Input title="Complemento (opcional)">
            <input id="complemento" type="text" />
          </Input>
          <ButtonContainer>
            <button onClick={abrirPayment}>Continuar com o pagamento</button>
            <button onClick={fecharDelivery}>Voltar para o carrinho</button>
          </ButtonContainer>
        </Container>
      </Sidebar>
    </DeliveryContainer>
  )
}

export default Delivery

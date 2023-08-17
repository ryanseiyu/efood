import { useDispatch, useSelector } from 'react-redux'
import {
  ButtonContainer,
  Container,
  PaymentContainer,
  Row,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { closePayment } from '../../store/reducers/payment'
import Input from '../Input'
import { formataPreco } from '../Product'
import { openOrder } from '../../store/reducers/order'

const Payment = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { paymentOpen } = useSelector((state: RootReducer) => state.payment)
  const dispatch = useDispatch()

  const fecharPayment = () => {
    dispatch(closePayment())
  }

  const abrirOrder = () => {
    dispatch(openOrder())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco!
    }, 0)
  }

  return (
    <PaymentContainer className={paymentOpen ? 'payment-open' : ''}>
      {/* <Overlay /> */}
      <Sidebar>
        <Container>
          <p>Pagamento - Valor a pagar {formataPreco(getTotalPrice())} </p>
          <Input title="Nome no cartão">
            <input id="nome" type="text" />
          </Input>
          <Row>
            <Input className="cardClass" title="Número do cartão">
              <input id="card" type="number" />
            </Input>
            <Input className="cvvClass" title="CVV">
              <input id="cvv" type="number" />
            </Input>
          </Row>
          <Row>
            <Input className="monthClass" title="Mês de vencimento">
              <input id="month" type="number" />
            </Input>
            <Input title="Ano de vencimento">
              <input id="year" type="number" />
            </Input>
          </Row>
          <ButtonContainer>
            <button onClick={abrirOrder}>Finalizar pagamento</button>
            <button onClick={fecharPayment}>
              Voltar para edição de endereço
            </button>
          </ButtonContainer>
        </Container>
      </Sidebar>
    </PaymentContainer>
  )
}

export default Payment

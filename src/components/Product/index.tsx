import {
  Card,
  Descricao,
  Titulo,
  ImgContainer,
  TxtContainer,
  ModalContainer,
  ModalImg,
  InfoContainer,
  TituloContainer,
  Modal,
  Overlay
} from './style'
import Button from '../Button'
import React from 'react'
import fechar from '../../assets/images/fechar.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { MenuItemsType } from '../../pages/MenuPage'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  menu: MenuItemsType
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export function shortenText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }
  const shortenedText = text.slice(0, maxLength) + '...'
  return shortenedText
}

const Product = ({ nome, descricao, foto, porcao, preco, menu }: Props) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
    setModalIsOpen(false)
  }

  return (
    <>
      <Card>
        <ImgContainer>
          <img src={foto} alt={descricao} />
        </ImgContainer>
        <TxtContainer>
          <TituloContainer>
            <Titulo>{shortenText(`${nome}`, 23)}</Titulo>
          </TituloContainer>
          <Descricao>{shortenText(`${descricao}`, 160)}</Descricao>
        </TxtContainer>

        <Button
          onClick={() => setModalIsOpen(true)}
          title="Modal"
          type="product-link"
        >
          Adicionar ao carrinho
        </Button>
      </Card>

      <Modal className={modalIsOpen ? 'visivel' : ''}>
        <ModalContainer className="container">
          <ModalImg>
            <img src={foto} alt="" />
          </ModalImg>
          <InfoContainer>
            <p>{nome}</p>
            <div>
              {descricao}
              <br />
              <br />
              {porcao}
            </div>
            <button id="adicionar" onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(preco)}
            </button>
            <button id="fechar" onClick={() => setModalIsOpen(false)}>
              <img src={fechar} alt="Botão" />
            </button>
          </InfoContainer>
        </ModalContainer>
        <Overlay onClick={() => setModalIsOpen(false)} />
      </Modal>
    </>
  )
}

export default Product

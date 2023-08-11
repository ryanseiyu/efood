import {
  Card,
  Descricao,
  Titulo,
  ImgContainer,
  TxtContainer,
  ModalContainer,
  ModalImg,
  InfoContainer,
  TituloContainer
} from './style'
import Button from '../Button'
import Modal from 'react-modal'
import React from 'react'
import fechar from '../../assets/images/fechar.png'

Modal.setAppElement('#root')

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ nome, descricao, foto, porcao, preco }: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function abrirModal() {
    setIsOpen(true)
  }

  function fecharModal() {
    setIsOpen(false)
  }

  function shortenText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text
    }
    const shortenedText = text.slice(0, maxLength) + '...'
    return shortenedText
  }

  return (
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal Teste"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0 ,0, 0.8)'
          },
          content: {
            border: '1px solid green',
            background: '#E66767',
            borderRadius: '0',
            borderColor: '#E66767',
            height: '344px',
            width: '1024px',
            padding: '20px',
            marginTop: '200px',
            left: '50%',
            transform: 'translateX(-50%)'
          }
        }}
      >
        <ModalContainer>
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
            <button id="adicionar">
              Adicionar ao carrinho - {formataPreco(preco)}
            </button>
            <button id="fechar" onClick={fecharModal}>
              <img src={fechar} alt="Botão" />
            </button>
          </InfoContainer>
        </ModalContainer>
      </Modal>

      <Button onClick={abrirModal} title="Modal" type="product-link">
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}

export default Product

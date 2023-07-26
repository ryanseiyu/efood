import {
  Card,
  Descricao,
  Titulo,
  Container,
  ImgContainer,
  TxtContainer,
  ModalContainer,
  ModalImg,
  InfoContainer
} from './style'
import Button from '../Button'
import Modal from 'react-modal'
import React from 'react'
import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/fechar.png'

Modal.setAppElement('#root')

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, description, image }: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true)
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false)
  }

  return (
    <Card>
      <ImgContainer>
        <img src={image} alt={title} />
      </ImgContainer>
      <TxtContainer>
        <Container>
          <Titulo>{title}</Titulo>
        </Container>

        <Descricao>{description}</Descricao>
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
            <img src={pizza} alt="" />
          </ModalImg>
          <InfoContainer>
            <p>Pizza Marguerita</p>
            <div>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </div>
            <button id="adicionar">Adicionar ao carrinho - R$60,90</button>
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

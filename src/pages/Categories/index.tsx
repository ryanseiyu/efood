import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import imagem from '../../assets/images/image 3.png'
import Header from '../../components/Header'

const promocoes: Food[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 1
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['5%', 'R$ 290,00'],
    image: imagem,
    nota: 4.9,
    id: 2
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 3
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 4
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 5
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 6
  }
]

const Categories = () => (
  <>
    <Header type="headerProduct" />
    <ProductsList foods={promocoes} title="RPG" background="gray" />
  </>
)

export default Categories

import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import imagem from '../../assets/images/imagem.png'

const promocoes: Food[] = [
  {
    title: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 1
  },
  {
    title: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['5%', 'R$ 290,00'],
    image: imagem,
    nota: 4.9,
    id: 2
  },
  {
    title: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 3
  },
  {
    title: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['10%', 'R$ 250,00'],
    image: imagem,
    nota: 4.9,
    id: 4
  }
]

const emBreve: Food[] = [
  {
    title: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['17/05'],
    image: imagem,
    nota: 4.9,
    id: 5
  },
  {
    title: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['17/05'],
    image: imagem,
    nota: 4.9,
    id: 6
  },
  {
    title: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['17/05'],
    image: imagem,
    nota: 4.9,
    id: 7
  },
  {
    title: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, veritatis deleniti dolore esse alias?',
    infos: ['17/05'],
    image: imagem,
    nota: 4.9,
    id: 8
  }
]

const Categories = () => (
  <>
    <ProductsList foods={promocoes} title="RPG" background="gray" />
    <ProductsList foods={emBreve} title="Ação" background="black" />
    <ProductsList foods={promocoes} title="Aventura" background="gray" />
    <ProductsList foods={emBreve} title="FPS" background="black" />
  </>
)

export default Categories

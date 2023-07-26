// import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList'
import Food from '../../models/Food'

import imagem from '../../assets/images/imagem.png'
import imagem2 from '../../assets/images/image 1.png'
import Header from '../../components/Header'

const promocoes: Food[] = [
  {
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: imagem,
    nota: 4.9,
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: imagem2,
    nota: 4.6,
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: imagem2,
    nota: 4.6,
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: imagem2,
    nota: 4.6,

    id: 4
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: imagem2,
    nota: 4.6,
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: imagem2,
    nota: 4.6,
    id: 6
  }
]

const Home = () => (
  <>
    {/* <Banner /> */}
    <Header type="headerHome" />
    <RestaurantsList foods={promocoes} title="Promoções" background="gray" />
  </>
)

export default Home

import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Container,
  Rating,
  ImgContainer,
  TxtContainer
} from './style'
import Button from '../Button'
import star from '../../assets/images/estrela.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const Restaurant = ({ title, description, infos, image, nota }: Props) => (
  <Card>
    <ImgContainer>
      <img src={image} alt={title} />
    </ImgContainer>
    <TxtContainer>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Container>
        <Titulo>{title}</Titulo>
        <Rating>
          <p>{nota}</p>
          <img src={star} alt="estrela" />
        </Rating>
      </Container>

      <Descricao>{description}</Descricao>
      <Button to="/categories" title="Saiba mais" type="link">
        Saiba mais
      </Button>
    </TxtContainer>
  </Card>
)

export default Restaurant

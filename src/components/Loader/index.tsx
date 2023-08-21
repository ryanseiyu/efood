import { ClipLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClipLoader color={cores.branco} />
  </Container>
)

export default Loader

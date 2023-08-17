import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  border-radius: 0;
  background-color: transparent;
  border: 1px solid ${cores.cinza};
  padding: 0;
  color: ${cores.label};
  margin-bottom: 8px;

  > p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 8px;
  }
`

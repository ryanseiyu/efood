import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 360px;
  display: flex;
  justify-content: center;
`

export const Text = styled.p`
  color: ${cores.rosa};
  text-align: center;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 539px;

  img {
    margin-bottom: 128.5px;
    margin-top: 44px;
    align-self: center;
    outline: 1px solid ${cores.fundo};
  }
`

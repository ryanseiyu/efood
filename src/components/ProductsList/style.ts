import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 80px 0;
  background-color: #fff8f2;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    overflow: hidden;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  justify-items: center;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

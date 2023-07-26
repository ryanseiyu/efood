import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'title' | 'foods'>>`
  padding: 80px 0;
  background-color: #fff8f2;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

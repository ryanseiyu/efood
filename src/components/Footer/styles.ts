import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.footer`
  background-color: #ffebd9;
  padding: 32px 0;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100vw;
    overflow: hidden;
    overflow-wrap: break-word;
  }
`

export const List = styled.ul`
  display: flex;
  margin-bottom: 80px;
  li:first-of-type {
    margin-right: 8px;
  }
  li:last-of-type {
    margin-left: 8px;
  }
`

export const Text = styled.p`
  color: ${cores.rosa};
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 480px;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100vw;
    overflow: hidden;
    overflow-wrap: break-word;
  }
`

export const Image = styled.img`
  margin-top: 8px;
  margin-bottom: 32.5px;
`

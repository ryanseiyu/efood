import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: #ffffff;
  /* border: 1px solid ${cores.rosa}; */
  position: relative;
  margin-bottom: 48px;
  color: ${cores.rosa};

  img {
    width: 100%;
    height: 216px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  font-size: 18px;
  display: block;
  margin-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  /* margin-top: 8px; */
  padding-top: 8px;
`

export const Rating = styled.div`
  display: flex;

  p {
    color: ${cores.rosa};
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
    margin-right: 8px;
  }
`

export const Descricao = styled.p`
  display: block;
  margin-left: 8px;
  margin-right: 8px;
  color: ${cores.rosa};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
`

export const ImgContainer = styled.div`
  height: 216px;
  img {
    object-fit: cover;
  }
`

export const TxtContainer = styled.div`
  border: 1px solid ${cores.rosa};
  border-top: none;
  height: 206px;

  > ${ButtonLink} {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 180px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 270px;
  }
`

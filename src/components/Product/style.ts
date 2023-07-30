import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  position: relative;
  margin-bottom: 100px;
  color: ${cores.rosa};
  width: 320px;
  height: 370px;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  font-size: 18px;
  display: block;
  margin-left: 8px;
  color: white;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #ffebd9;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-top: 8px;
`

export const Descricao = styled.p`
  display: block;
  margin-left: 8px;
  color: #ffebd9;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
`

export const ImgContainer = styled.div`
  width: 95%;
  margin: 0px 8px;
  height: 184px;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  border: 1px solid ${cores.rosa};
  border-bottom: none;
`

export const TxtContainer = styled.div`
  border: 1px solid ${cores.rosa};
  border-top: none;
  background-color: ${cores.rosa};
  width: 267px;
  margin-bottom: 0;
`

export const ModalContainer = styled.div`
  display: flex;
`

export const ModalImg = styled.div`
  margin-right: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  p {
    display: flex;
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 16px;
  }

  div {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    margin-bottom: 16px;
  }

  #adicionar {
    width: 218px;
    height: 24px;
    flex-shrink: 0;
    border: none;
    background-color: #ffebd9;
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #adicionar:hover {
    cursor: pointer;
  }

  #fechar {
    border: none;
    background-color: #e66767;
    color: white;
    position: absolute;
    top: 8px;
    right: 8px;

    img {
      width: 16px;
    }
  }
`

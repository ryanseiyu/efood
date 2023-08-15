import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  position: relative;
  margin-bottom: 100px;
  color: ${cores.rosa};
  width: 320px;
  height: 370px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 80%;
    overflow: hidden;
  }
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

export const TituloContainer = styled.div`
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
    overflow: hidden;
  }
`

export const ImgContainer = styled.div`
  width: 95%;
  margin: 0px 8px;
  position: relative;
  padding-top: 2;
  height: 184px;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  border: 1px solid ${cores.rosa};
  border-bottom: none;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 170px;
  }
`

export const TxtContainer = styled.div`
  border: 1px solid ${cores.rosa};
  border-top: none;
  background-color: ${cores.rosa};
  width: 320px;
  margin-bottom: 0;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  width: 50%;
  height: 37%;
  background-color: ${cores.rosa};
  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    width: 90%;
    height: fit-content;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalImg = styled.div`
  margin-right: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px;
    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
      height: 80%;
    }

    @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
      width: 90%;
    }
  }
`

export const InfoContainer = styled.div`
  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 32px;
    height: 100%;
  }

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
    margin-top: 32px;
  }

  div {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    margin-bottom: 16px;
    margin-right: 32px;

    @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
      font-size: 18px;
    }
  }

  #adicionar {
    width: 230px;
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

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
      margin-bottom: 24px;
    }

    @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
      width: 90%;
      margin-bottom: 24px;
    }
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

    &:hover {
      cursor: pointer;
    }
  }
`

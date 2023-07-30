import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 539px;
  width: 100%;

  img {
    align-self: center;
    outline: 1px solid ${cores.fundo};
    margin-bottom: 138.5px;
    margin-top: 40px;
  }
`

export const HeaderBarHome = styled.div`
  height: 384px;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 58px;
  margin-top: 42px;

  img {
    align-self: center;
    outline: 1px solid ${cores.fundo};
    /* margin-left: 341px;
    margin-right: 193px; */
    margin-left: 88px;
    border: none;
  }
`

export const HeaderBar = styled.header`
  height: 163px;
  display: flex;
  justify-content: center;
  /* padding-left: 88px; */
`

export const Slogan = styled.div`
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

export const Text = styled.p`
  color: ${cores.rosa};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-wrap: nowrap;
`

export const ImgHeader = styled.div`
  width: 100%;
  height: 280px;
  position: relative;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: brightness(0.5);
  }
`

export const TextDiv = styled.div`
  position: absolute;
  top: 25px;
  left: 170px;
  color: #fff;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  filter: brightness(0.9);
`

export const RestaurantDiv = styled.div`
  position: absolute;
  top: 214.15px;
  left: 170px;
  color: #fff;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

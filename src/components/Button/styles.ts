import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 24px;
  flex-shrink: 0;
  background: ${cores.rosa};
  border: none;
  color: ${cores.button};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 8px;
  margin-bottom: 8px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 24px;
  flex-shrink: 0;
  background: ${cores.rosa};
  border: none;
  color: ${cores.button};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 8px;
  margin-bottom: 8px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

// ButtonProductLink fills 90% of the Card and is centered
export const ButtonProductLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 10%;
  background: #ffebd9;
  border: none;
  color: ${cores.rosa};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 8px;
  margin-bottom: 8px;
  text-decoration: none;
  padding: 0px 0;
  height: 26px;

  &:hover {
    cursor: pointer;
  }
`

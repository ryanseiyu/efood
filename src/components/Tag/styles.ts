import styled from 'styled-components'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: #e66767;
  color: #ffebd9;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  margin-left: 8px;
`

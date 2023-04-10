import { Button } from 'antd';
import styled from 'styled-components';

interface ButtonProps {
    width?: number
    border?: string
    background?: string
    boxShadow?: string
    color?: string
}
export const ButtonStyled = styled(Button)<ButtonProps>`
  border: ${(props)=> (props.border ? props.border : 'none')};
  background: ${(props)=> (props.background ? props.background : 'none')};
  box-shadow: ${(props)=> (props.boxShadow ? props.boxShadow : 'none')};
  color: ${(props)=> props.color};
  width: ${(props)=> props.width};
`;
//#1677ff;

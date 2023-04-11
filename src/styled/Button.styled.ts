import { Button } from 'antd';
import styled from 'styled-components';

interface ButtonProps {
  width?: number;
  border?: string;
  background?: string;
  boxShadow?: string;
  color?: string;
}
export const ButtonStyled = styled(Button)<ButtonProps>`
  width: ${(props) => props.width + '%'};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : 'none')};
  color: ${(props) => props.color};
`;


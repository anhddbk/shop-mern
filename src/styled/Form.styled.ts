import { Form } from 'antd';
import styled from 'styled-components';

interface FormProps {
  display?: string;
  maxWidth?: number;
}

export const FormStyled = styled(Form)<FormProps>`
  display: ${(props) => props.display}
  max-width: ${(props) => props.maxWidth};
`;

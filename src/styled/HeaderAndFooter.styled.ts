import styled from 'styled-components';
import { FlexStyled } from 'styled/common';

interface HeaderAndFooterProps {
  height?: number;
  padding?: string;
  borderTop?: string;
  borderBottom?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const HeaderAndFooterStyled = styled(FlexStyled)<HeaderAndFooterProps>`
  display: flex;
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
`;



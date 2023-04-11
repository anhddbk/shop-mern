import styled from 'styled-components';

interface WrapperProps {
  background?: string;
  minWidth?: number;
  minHeight?: number;
}

interface FlexStyledProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

const H3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const H4 = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const WrapperStyled = styled.div<WrapperProps>`
  background: ${(props) => props.background};
  min-width: ${(props) => props.minWidth + 'vw'};
  min-height: ${(props) => props.minHeight + 'vh'};
`;

const FlexStyled = styled.div<FlexStyledProps>`
  flex-direction: ${(props) => props.flexDirection};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export { H3, H4, WrapperStyled, FlexStyled };

import styled from 'styled-components';

interface FlexCenterStyledProps {
  flexDirection?: string;
}
interface WrapperProps {
  background?: string;
  minWidth?: number;
  minHeight?: number;
}
export const FlexCenterStyled = styled.div<FlexCenterStyledProps>`
  flex-direction: ${(props) => props.flexDirection};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperStyled = styled(FlexCenterStyled)<WrapperProps>`
  background: ${(props) => props.background};
  min-width: ${(props) => props.minWidth + 'vw'};
  min-height: ${(props) => props.minHeight + 'vh'};
`;

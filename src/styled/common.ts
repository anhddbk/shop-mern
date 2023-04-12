import styled from 'styled-components';

interface WrapperProps {
  display?: string;
  background?: string;
  minWidth?: number;
  minHeight?: number;
}

interface ContentProps {
  padding?: string;
}

interface FlexStyledProps {
  flex?: number;
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

const FlexStyled = styled(WrapperStyled)<FlexStyledProps>`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

const ContentStyled = styled.div<ContentProps>`
  padding: ${(props) => props.padding};
`;

export { H3, H4, WrapperStyled, FlexStyled, ContentStyled };

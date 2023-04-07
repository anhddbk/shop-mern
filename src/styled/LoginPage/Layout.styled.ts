import styled from 'styled-components';


export const FlexCenterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperStyled = styled(FlexCenterStyled)`
  background: linear-gradient(132deg, #ec5218, #1665c1);
  min-width: 100vh;
  min-height: 100vh;
`;

export const HeaderStyled = styled(FlexCenterStyled)`
  flex-direction: column;
  padding-bottom: 46px;
`;

import { Layout, Menu } from 'antd';
import styled from 'styled-components';

export const LayoutStyled = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const ContentStyled = styled.div`
  padding-left: 12px;
`;

export const SideMenuAndPageContentStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const SideMenuStyled = styled(Menu)`
height: 100%;
`

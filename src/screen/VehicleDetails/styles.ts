import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
`;

export const Content = styled.View`
  height: 100%;
  background-color: ${theme.page.backgroundColor};
  padding: 20px 20px;
`;

export const TitleContainer = styled.View`
  width: 90%;
`;

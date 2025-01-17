import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';
import { RFValue } from '../../utils/normalize';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
`;

export const Content = styled.View`
  height: 100%;
  background-color: ${theme.page.backgroundColor};
  padding-bottom: 40px;
`;

export const ButtonBack = styled.TouchableOpacity`
  display: flex;
  justify-content:center;
  align-items: center;
  width: ${RFValue(40)}px;
  height:${RFValue(40)}px;
  background-color: ${theme.color.gray50};
  border-radius: 10px;
`;
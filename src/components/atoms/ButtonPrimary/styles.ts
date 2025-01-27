import styled from 'styled-components/native';
import { ButtonProps } from '.';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const Container = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props: ButtonProps) =>
    props.backgroundColor || theme.button.backgroundColor.primary};
  padding: 10px;
  height: ${(props: ButtonProps) => props.height || theme.button.height}px;
  width: ${(props: ButtonProps) => props.width || theme.button.width};
  border-radius: ${theme.button.borderRadius}px;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-weight: bold;
  font-size: ${RFValue(theme.button.textSize)}px;
  font-weight: ${(props: ButtonProps) => props.weight || 'bold'};
`;

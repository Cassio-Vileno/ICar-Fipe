import styled from 'styled-components/native';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';
import { Paragraph } from '../../atoms/Paragraph';

interface ButtonOutlinedProps {
  color?: string;
}

export const Container = styled.View<ButtonOutlinedProps>`
  width: ${RFValue(135)}px;
  height:${RFValue(60)}px;
  background-color: #ededed;
  border-radius: 10px;
  justify-content: center;
  padding: 10px 15px;
`;

export const ButtonText = styled(Paragraph) <{ color?: string }>`
  color: ${theme.button.color.default};
  font-weight: bold;
  font-family: "Inter_400Regular";
  font-size: ${RFValue(10)}px;
  text-align: center;
`;

export const ImageIcon = styled.Image`
  width: 28px;
  height: 28px;
`;

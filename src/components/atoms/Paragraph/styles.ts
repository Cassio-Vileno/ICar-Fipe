import styled from 'styled-components/native';
import { ParagraphProps } from '.';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const Container = styled.Text<ParagraphProps>`
  width: ${theme.paragraph.width};
  font-family: ${(props: ParagraphProps) => props.fontFamily || 'Poppins_500Medium'};
  font-size: ${(props: ParagraphProps) => RFValue(props.size || theme.paragraph.size)}px;
  color: ${(props: ParagraphProps) => props.color || theme.paragraph.color.default};
  ${(props: ParagraphProps) => props.textAlign && `text-align: ${props.textAlign}`};
`;

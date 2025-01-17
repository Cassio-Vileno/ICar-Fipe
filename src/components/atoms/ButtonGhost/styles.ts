import { css } from 'styled-components';
import styled from 'styled-components/native';
import { ButtonGhostProps } from '.';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';
import { Paragraph } from '../../atoms/Paragraph';

interface TextButtonProps {
  color?: string;
  underlined?: boolean;
  size?: number;
}

export const Container = styled.TouchableOpacity<ButtonGhostProps>`
  width: ${(props: ButtonGhostProps) => props.width || theme.button.width};
  ${({ disabled }: ButtonGhostProps) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`;

export const TextButton = styled(Paragraph) <any>`
  color: ${(props: TextButtonProps) => props.color || theme.button.color.default};
  ${({ underlined }: TextButtonProps) => underlined && 'text-decoration: underline;'}
  font-weight: bold;
  font-family: "Poppins_500Medium";
  text-align: center;
  font-size: ${(props: TextButtonProps) => props.size ? RFValue(props.size) : RFValue(theme.button.textSize)}px;
`;

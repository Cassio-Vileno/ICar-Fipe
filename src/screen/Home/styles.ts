import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';
import { RFValue } from '../../utils/normalize';

interface ButtonVehicleProps {
  isSelected: boolean;
}

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
`;

export const Content = styled.View`
  height: 100%;
  background-color: ${theme.page.backgroundColor};
  padding-bottom: 40px;
`;

export const ButtonVehicle = styled.TouchableOpacity<ButtonVehicleProps>`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  background-color: ${theme.color.gray100};
  background-color:  ${({ isSelected }: ButtonVehicleProps) => (isSelected ? theme.color.gray100 : theme.color.gray50)};
  border-radius: 16px;
  padding: 5px;
  border: ${({ isSelected }: ButtonVehicleProps) => (isSelected ? `2px solid black` : "none")};
`;

export const IconVehicle = styled.Image`
  width: 100%;
  height: 100%;
`;
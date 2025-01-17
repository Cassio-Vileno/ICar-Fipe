import styled from "styled-components/native";
import { theme } from "../../../theme/default.theme";
import { RFValue } from '../../../utils/normalize';


export const Container = styled.View`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
width: 100%;

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
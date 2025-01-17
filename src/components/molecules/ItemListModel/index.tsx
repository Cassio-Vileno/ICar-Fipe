import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { EnunVehicleType, getVehicleImage } from "../../../utils/getVehicleImage";
import { Paragraph } from "../../atoms/Paragraph";
import { Container, ContainerText, IconVehicles } from "./styles";

export type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  vehicleType: EnunVehicleType;
  brandName: string;
  modelName: string;
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});

export default function ItemListModel({
  onPress,
  vehicleType,
  brandName,
  modelName,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container onPress={onPress} style={styles.box} {...rest}>
      <IconVehicles resizeMode="contain" source={getVehicleImage(vehicleType)} />
      <ContainerText>
        <Paragraph color={theme.color.NeutralGra}>{brandName}</Paragraph>
        <Paragraph>{modelName}</Paragraph>
      </ContainerText>
    </Container>
  );
}

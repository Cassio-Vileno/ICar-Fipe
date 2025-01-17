import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { EnunVehicleType, getVehicleImage } from "../../../utils/getVehicleImage";
import { Paragraph } from "../../atoms/Paragraph";
import { Container, IconVehicles } from "./styles";

export type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  vehicleType: EnunVehicleType;
  brandName: string;
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

export default function ItemListBrand({
  onPress,
  vehicleType,
  brandName,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container onPress={onPress} style={styles.box} {...rest}>
      <IconVehicles resizeMode="contain" source={getVehicleImage(vehicleType)} />
      <Paragraph>{brandName}</Paragraph>
    </Container>
  );
}

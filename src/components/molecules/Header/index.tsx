import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import images from "../../../utils/images";
import { Icon } from "../../atoms/Icon";
import { Container, LogoImg } from "./styles";

export default function Header(): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <LogoImg resizeMode="contain" source={images.logo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Icon name="user" color="#8C8C8C" size={30} />
      </TouchableOpacity>
    </Container>
  );
}

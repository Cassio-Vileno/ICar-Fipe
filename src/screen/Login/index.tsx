import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ButtonPrimary from "../../components/atoms/ButtonPrimary";
import InputText from "../../components/atoms/InputText";
import Row from "../../components/atoms/Row";
import InputPassword from "../../components/molecules/InputPassword";

import { useAuth } from "../../hooks/useAuth";
import images from "../../utils/images";
import {
  ButtonLoginWidth,
  ConatinerButtonRegister,
  Container,
  Content,
  Image,
} from "./styles";

export default function Login(): JSX.Element {
  const navigation = useNavigation<any>();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (credentials: any) => {
    try {
      setLoading(true);
      await login(credentials);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <Image resizeMode="contain" source={images.logo} />
        <Row mt={0}>
          <Controller
            rules={{ required: { value: true, message: "Campo obrigatório" } }}
            control={control}
            name="user"
            render={({ field: { onChange, value } }) => (
              <InputText
                placeholder="Usuário"
                onChangeText={onChange}
                value={value}
                error={errors.user}
                autoCapitalize="none"
              />
            )}
          />
        </Row>
        <Row mt={0}>
          <Controller
            rules={{ required: { value: true, message: "Campo obrigatório" } }}
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputPassword
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                error={errors.password}
              />
            )}
          />
        </Row>
        <ConatinerButtonRegister>
          <ButtonLoginWidth>
            <Row mb={24} mt={10}>
              <ButtonPrimary
                loading={loading}
                textColor="#fff"
                onPress={handleSubmit(onSubmit)}
              >
                Entrar
              </ButtonPrimary>
            </Row>
          </ButtonLoginWidth>
        </ConatinerButtonRegister>
      </Content>
    </Container>
  );
}

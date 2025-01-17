import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Content
} from "./styles";

import { Controller, useForm } from "react-hook-form";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import HeaderShow from "../../components/molecules/HeaderShow";
import InputSelect from "../../components/molecules/InputSelect";
import ItemDetailModel from "../../components/molecules/ItemDetailModel";
import { VehicleService } from "../../services/vehicle.service";
import { theme } from "../../theme/default.theme";
import { ItemSelect } from "../../types/itemSelect";
import { ModelDetails } from "../../types/models";
import { VehicleType } from "../../types/vehicles";
import { IconType } from "../../utils/getIconDetailModel";
import { mapModelYears } from "../../utils/mapModelYears";

interface RouteParams {
  modelId: string;
  vehicles: VehicleType;
  brand: {
    codigo: string,
    nome: string
  };
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 8, height: 3988234627 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 3,
    borderRadius: 12
  },
});

export default function VehicleDetails(): JSX.Element {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { modelId, vehicles, brand } = route.params as RouteParams;
  const [modelDetails, setModelDetails] = useState<ModelDetails>({} as ModelDetails)
  const [years, setYears] = useState<ItemSelect[]>([])

  const {
    handleSubmit,
    control,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm();


  const getYearVehicle = async () => {
    try {
      const data = await VehicleService.getYearVehicle({ vehicles, brand: brand.codigo, model: modelId })
      const response = mapModelYears(data)
      setYears(response)
      getVehicleDetails(data[0].codigo)
      setValue("year", data[0].codigo);
    } catch (error) {
      console.log(error)
    }
  }

  const getVehicleDetails = async (yearCode: string) => {
    try {
      const data = await VehicleService.getVehicleDetails({ vehicles, brand: brand.codigo, model: modelId, yearCode })
      setModelDetails(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getYearVehicle()
  }, [])

  return (
    <Container>
      <Row ml={12} mr={12} mt={5}>
        <HeaderShow />
      </Row>
      <Content>
        <Row px={20} jc="center">
          <Paragraph color={theme.color.NeutralGra} textAlign="center">{modelDetails.Marca}</Paragraph>
          <Paragraph size={18} fontFamily="Poppins_600SemiBold" textAlign="center">{modelDetails.Modelo}</Paragraph>
        </Row>
        <Row mt={20}>
          <View style={styles.box}>
            <Paragraph size={22} fontFamily="Poppins_600SemiBold" textAlign="center">{modelDetails.Valor}</Paragraph>
          </View>
        </Row>
        <Row mt={20}>
          <Controller
            name="year"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputSelect
                placeholder=""
                items={years}
                value={value}
                onChangeText={(e: any) => {
                  onChange(e)
                  getVehicleDetails(e)
                }}
                error={errors.year}
              />
            )}
          />
        </Row>
        <Row gap={25}>
          <Row fd="row" jc="space-around">
            <ItemDetailModel
              subTitle="Marca"
              title={modelDetails.Marca}
              icon={IconType['BRAND']}

            />
            <ItemDetailModel
              subTitle="Ano"
              title={String(modelDetails.AnoModelo)}
              icon={IconType['YEAR']}
            />
          </Row>
          <Row fd="row" jc="space-around">
            <ItemDetailModel
              subTitle="Combustivel"
              title={modelDetails.Combustivel}
              icon={IconType['FUEL']}
            />
            <ItemDetailModel
              subTitle="Código"
              title={modelDetails.CodigoFipe}
              icon={IconType['CODE']}
            />
          </Row>
        </Row>
      </Content>
    </Container>
  );
}

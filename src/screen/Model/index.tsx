import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import {
  ButtonBack,
  Container,
  Content
} from "./styles";

import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "../../components/atoms/Icon";
import Row from "../../components/atoms/Row";
import Header from "../../components/molecules/Header";
import ItemListModel from "../../components/molecules/ItemListModel";
import SearchBar from "../../components/molecules/SearchBar";
import { ModelsService } from "../../services/models.service";
import { theme } from "../../theme/default.theme";
import { Brand } from "../../types/brand";
import { EnunVehicleType } from "../../utils/getVehicleImage";

interface RouteParams {
  id: string;
  vehicles: EnunVehicleType;
  brand: {
    codigo: string,
    nome: string
  };

}

export default function Model(): JSX.Element {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const { id, vehicles, brand } = route.params as RouteParams;
  const [models, setModels] = useState<Brand[]>([])
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");


  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);


  const filteredBrands = useMemo(() => {
    if (!search.trim()) return models;
    return models.filter((brand) =>
      brand.nome.toLowerCase().includes(search.toLowerCase())
    );
  }, [debouncedSearch, models]);



  const getAllModels = async (props: Omit<RouteParams, 'brand'>) => {
    console.log(props)
    try {
      const data = await ModelsService.getAll(props)
      setModels(data.modelos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllModels({ id, vehicles })
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <Row mt={5} px={12}>
          <SearchBar onChageText={(e) => setSearch(e)} />
        </Row>
        <Row ml={12} mt={10}>
          <ButtonBack onPress={() => navigation.goBack()}>
            <Icon size={25} color={theme.color.primary} name="chevron-left" />
          </ButtonBack>
        </Row>
        <Row mt={15}>
          <FlatList
            style={{ height: '90%', paddingRight: 12, paddingLeft: 12 }}
            data={filteredBrands}
            ListFooterComponent={<View style={{ height: 70 }} />}
            renderItem={({ item }) => (
              <ItemListModel
                key={item.codigo}
                modelName={item.nome}
                brandName={brand.nome}
                vehicleType={vehicles}
                onPress={() => navigation.navigate("VehicleDetails", { modelId: item.codigo, vehicles, brand })}
              />
            )}
          />
        </Row>
      </Content>
    </Container>
  );
}

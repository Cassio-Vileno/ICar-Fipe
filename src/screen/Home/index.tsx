import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Row from "../../components/atoms/Row";
import Header from "../../components/molecules/Header";
import ItemListBrand from "../../components/molecules/ItemListBrand";
import SearchBar from "../../components/molecules/SearchBar";
import { BrandsService } from "../../services/brands.service";
import { Brand } from "../../types/brand";
import { EnunVehicleType } from "../../utils/getVehicleImage";
import images from "../../utils/images";
import { ButtonVehicle, Container, Content, IconVehicle } from "./styles";

export default function Home(): JSX.Element {
  const [brands, setBrands] = useState<Brand[]>([]);
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [vehiclesType, setVehiclesTypes] = useState<EnunVehicleType>(EnunVehicleType['CAR'])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const filteredBrands = useMemo(() => {
    if (!debouncedSearch.trim()) return brands;
    return brands.filter((brand) =>
      brand.nome.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, brands]);

  const getBrands = async () => {
    try {
      setLoading(true)
      const data = await BrandsService.execute(vehiclesType);
      setBrands(data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getBrands();
  }, [vehiclesType]);

  return (
    <Container>
      <Header />
      <Content>
        <Row mt={5} mr={12} ml={12}>
          <SearchBar onChageText={(e) => setSearch(e)} />
        </Row>
        <Row pt={10} px={20} fd="row" jc="space-between">
          <ButtonVehicle isSelected={vehiclesType === "carros"} onPress={() => setVehiclesTypes(EnunVehicleType['CAR'])}>
            <IconVehicle resizeMode="contain" source={images.car} />
          </ButtonVehicle>
          <ButtonVehicle isSelected={vehiclesType === "motos"} onPress={() => setVehiclesTypes(EnunVehicleType['MOTORCYCLY'])}>
            <IconVehicle resizeMode="contain" source={images.motorcycle} />
          </ButtonVehicle>
          <ButtonVehicle isSelected={vehiclesType === "caminhoes"} onPress={() => setVehiclesTypes(EnunVehicleType['TRUCK'])}>
            <IconVehicle resizeMode="contain" source={images.truck} />
          </ButtonVehicle>
        </Row>
        <Row mt={15}>
          {loading ? (
            <ActivityIndicator testID="activityIndicator" />
          ) : (
            <FlatList
              style={{ height: "90%", paddingRight: 12, paddingLeft: 12 }}
              data={filteredBrands}
              keyExtractor={(item) => item.codigo}
              ListFooterComponent={<View style={{ height: 70 }} />}
              renderItem={({ item }) => (
                <ItemListBrand
                  brandName={item.nome}
                  vehicleType={vehiclesType}
                  onPress={() =>
                    navigation.navigate("Model", {
                      id: item.codigo,
                      vehicles: vehiclesType,
                      brand: item,
                    })
                  }
                />
              )}
            />
          )}
        </Row>
      </Content>
    </Container>
  );
}

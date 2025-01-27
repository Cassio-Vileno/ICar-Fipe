import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../theme/default.theme";
import { ItemSelect } from "../../../types/itemSelect";
import { Icon } from "../../atoms/Icon";
import { Paragraph } from "../../atoms/Paragraph";
import { Container, Error, Overlay } from "./styles";

type FormFieldSelectProps = TextInputProps & {
  items: ItemSelect[];
  placeholder: string;
  value?: string;
  onChangeText?: any;
  touched?: any;
  error?: any;
};

export default function InputSelect({
  items,
  error,
  touched,
  onChangeText,
  placeholder,
  value,
  ...rest
}: FormFieldSelectProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [valueReceived, setValueReceived] = useState("");

  const handleSelect = (item: any) => {
    onChangeText(item.value);
    setSelectedValue(item.label);
    setVisible(false);
  };

  const close = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (value) {
      items.map((item) => {
        if (value === item.value) {
          setValueReceived(item.label);
        }
      });
    }
  });

  return (
    <>
      <Container onPress={() => setVisible(true)} error={error} {...rest}>
        <View>
          <Paragraph
            size={theme.input.size}
            fontFamily="Poppins_400Regular"
            color={
              value || selectedValue
                ? theme.input.placeholderColor
                : theme.input.neutralGray
            }
          >
            {selectedValue || value
              ? valueReceived || selectedValue
              : placeholder || "Selecione uma opção"}
          </Paragraph>
        </View>
        <Icon name="chevron-down" color={theme.color.primary} size={25} />
        <Modal
          visible={visible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setVisible(false)}
        >
          <Overlay activeOpacity={1} onPress={() => close()}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOpacity={1}
              onPressOut={() => setVisible(false)}
            >
              <View
                style={{
                  width: 300,
                  maxHeight: 400,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                }}
              >
                <FlatList
                  data={items}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item)}>
                      <Text style={{ padding: 20, textAlign: "center" }}>
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Overlay>
        </Modal>
      </Container>
      <Error>{error?.message}</Error>
    </>
  );
}

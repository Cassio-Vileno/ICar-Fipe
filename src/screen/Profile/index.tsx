import React from "react";
import { Icon } from "../../components/atoms/Icon";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import HeaderShow from "../../components/molecules/HeaderShow";
import { useAuth } from "../../hooks/useAuth";
import { useDialog } from "../../hooks/useDialog";
import { theme } from "../../theme/default.theme";
import { CONTEXT_DIALOG_MESSAGE } from "../../utils/constants";
import { iconsProfile } from "../../utils/icons";
import {
  AccountItem,
  Container,
  ContainerHeader,
  Content,
  IconContainer,
  IconItem,
  Label,
} from "./styles";

export default function Profile() {
  const { user, signOut } = useAuth();
  const { openDialog, closeDialog } = useDialog();
  const { exit } = iconsProfile;

  const handlerOpenDialog = () => {
    openDialog({
      title: CONTEXT_DIALOG_MESSAGE.title,
      subtitle: CONTEXT_DIALOG_MESSAGE.subtitle,
      buttonText: CONTEXT_DIALOG_MESSAGE.buttonText,
      buttonBack: true,
      buttonPress: () => {
        closeDialog();
        signOut();
      },
    });
  };

  const listItems = [
    {
      text: "Sair",
      icon: exit,
      onPress: () => handlerOpenDialog(),
    },

  ];

  return (
    <Container>
      <Row ml={20} mr={20} mt={20}>
        <HeaderShow />
      </Row>
      <Content>
        <ContainerHeader>
          <Paragraph size={24}>
            Olá, {user.name && user.name.split(" ")[0]}!
          </Paragraph>
        </ContainerHeader>
        {listItems.map((item) => (
          <AccountItem key={item.text} onPress={item.onPress}>
            <IconContainer>
              <IconItem resizeMode="contain" source={item.icon} />
            </IconContainer>
            <Label color={theme.color.NeutralGra} size={14}>
              {item.text}
            </Label>
            <Icon color={theme.color.primary} name="chevron-right" />
          </AccountItem>
        ))}
        <Row mt={8} />
      </Content>
    </Container>
  );
}

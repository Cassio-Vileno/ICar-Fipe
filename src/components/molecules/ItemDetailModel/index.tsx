import React from "react";
import { theme } from "../../../theme/default.theme";
import { getIconDetailModel, IconType } from "../../../utils/getIconDetailModel";
import { Paragraph } from "../../atoms/Paragraph";
import Row from "../../atoms/Row";
import { Container, ImageIcon } from "./styles";

export type ItemDetailModelProps = {
  icon: IconType;
  title: string;
  subTitle: string;
};

export default function ItemDetailModel({
  icon,
  title,
  subTitle,
  ...rest
}: ItemDetailModelProps): JSX.Element {
  return (
    <Container {...rest}>
      <Row fd="row" alignItems="center" gap={12}>
        <ImageIcon resizeMode="contain" source={getIconDetailModel(icon)} />
        <Row>
          <Paragraph fontFamily="Poppins_600SemiBold" color={theme.color.primary}>{title}</Paragraph>
          <Paragraph size={12} color={theme.color.NeutralGra}>{subTitle}</Paragraph>
        </Row>
      </Row>
    </Container>
  );
}

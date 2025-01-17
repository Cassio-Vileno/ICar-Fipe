import { ItemSelect } from "../types/itemSelect";
import { ModelYear } from "../types/models";

export function mapModelYears(modelYears: ModelYear[]): ItemSelect[] {
  const result: ItemSelect[] = [];
  console.log(modelYears)

  modelYears.forEach((model) => {
    result.push({
      label: `Ano: ${model.nome}`,
      value: model.codigo || false
    });
  });

  return result;
}

import styled from 'styled-components/native';
import { RowProps } from '.';

export const Container = styled.View<RowProps>`
  ${(props: RowProps) => (props?.width ? `width: ${props?.width}%;` : '')}
  ${(props: RowProps) =>
    props?.my
      ? `margin-top: ${props?.my}px; margin-bottom: ${props?.my}px; `
      : ''}
  ${(props: RowProps) =>
    props?.mx
      ? `margin-left: ${props?.mx}px; margin-right: ${props?.mx}px; `
      : ''}
  ${(props: RowProps) => (props?.mt ? `margin-top: ${props?.mt}px;` : '')}
  ${(props: RowProps) => (props?.mb ? `margin-bottom: ${props?.mb}px;` : '')}
  ${(props: RowProps) => (props?.ml ? `margin-left: ${props?.ml}px;` : '')}
  ${(props: RowProps) => (props?.mr ? `margin-right: ${props?.mr}px;` : '')}
  ${(props: RowProps) =>
    props?.py
      ? `padding-top: ${props?.py}px; padding-bottom: ${props?.py}px; `
      : ''}
  ${(props: RowProps) =>
    props?.px
      ? `padding-left: ${props?.px}px; padding-right: ${props?.px}px; `
      : ''}
  ${(props: RowProps) => (props?.pt ? `padding-top: ${props?.pt}px;` : '')}
  ${(props: RowProps) => (props?.pb ? `padding-bottom: ${props?.pb}px;` : '')}
  ${(props: RowProps) => (props?.pl ? `padding-left: ${props?.pl}px;` : '')}
  ${(props: RowProps) => (props?.pr ? `padding-right: ${props?.pr}px;` : '')}
  ${(props: RowProps) => (props?.gap ? `gap: ${props?.gap}px;` : '')}

  flex-direction: ${(props: RowProps) => props.fd || 'colun'};
  justify-content: ${(props: RowProps) => props.jc || 'inherit'};
  align-items: ${(props: RowProps) => props.alignItems || 'inherit'};
`;

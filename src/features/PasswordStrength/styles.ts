import styled, { css } from "styled-components";

interface LevelProps {
  empty?: boolean;
  color?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
  padding: 20px 32px;
  background-color: ${(props) => props.theme.colors.eerieBlack};
`;

export const Label = styled.span`
  color: ${(props) => props.theme.colors.romanSilver};
  font-size: 18px;
  flex: 1;
`;

export const Strength = styled.span`
  color: ${(props) => props.theme.colors.platinum};
  font-size: 24px;
  margin-right: 8px;
`;

export const Level = styled.span<LevelProps>`
  display: block;
  width: 10px;
  height: 28px;
  background-color: ${(props) => props.color};

  ${(props) =>
    props.empty &&
    css`
      background-color: ${props.theme.eerieBlack};
      border: 2px solid ${props.theme.platinum};
    `}
`;

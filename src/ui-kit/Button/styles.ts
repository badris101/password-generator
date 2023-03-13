import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.mintGreen};
  color: ${(props) => props.theme.colors.eerieBlack};
  outline: none;
  border: none;
  width: 100%;
  height: 65px;
  cursor: pointer;
  font-size: 18px;

  svg {
    margin-left: 24px;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.mintGreen};
    background-color: transparent;
    color: ${(props) => props.theme.colors.mintGreen};

    svg path {
      fill: ${(props) => props.theme.colors.mintGreen};
    }
  }
`;

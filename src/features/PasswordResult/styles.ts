import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGunmetal};
  color: ${(props) => props.theme.colors.platinum};
  padding: 19px 32px;

  svg {
    cursor: pointer;

    &:hover {
      path {
        fill: ${(props) => props.theme.colors.platinum};
      }
    }
  }
`;

export const Password = styled.span`
  display: block;
  font-size: 32px;
  flex: 1;

  &:after {
    content: attr(data-content);
    color: ${(props) => props.theme.colors.romanSilver};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ClipboardText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.mintGreen};
  margin-right: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

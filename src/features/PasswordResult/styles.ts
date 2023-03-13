import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGunmetal};
  color: ${(props) => props.theme.colors.platinum};
  padding: 19px 32px;

  span {
    display: block;
    font-size: 32px;

    &:after {
      content: attr(data-content);
      color: ${(props) => props.theme.colors.romanSilver};
    }
  }
`;

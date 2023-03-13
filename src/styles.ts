import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  background-color: ${(props) => props.theme.colors.darkGunmetal};
  color: ${(props) => props.theme.colors.platinum};
  margin-top: 24px;
`;

export const Wrapper = styled.div`
  min-width: 540px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.colors.romanSilver};
  text-align: center;
`;

import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 32px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Length = styled.span`
  color: ${(props) => props.theme.colors.mintGreen};
  font-size: 32px;
`;

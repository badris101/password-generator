import { Container } from "./styles";
import CopyIcon from "@/assets/icons/CopyIcon";

interface IProps {
  password: string;
}

const PasswordResult = ({ password }: IProps) => {
  return (
    <Container>
      <span data-content={password === "" ? "P4$5W0rD!" : ""}>{password}</span>
      <CopyIcon />
    </Container>
  );
};

export default PasswordResult;

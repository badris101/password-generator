import { Container, Password, ClipboardText } from "./styles";
import CopyIcon from "@/assets/icons/CopyIcon";
import { useClipboard } from "@mantine/hooks";

interface IProps {
  password: string;
}

const PasswordResult = ({ password }: IProps) => {
  const clipboard = useClipboard({ timeout: 1000 });
  return (
    <Container>
      <Password data-content={password === "" ? "P4$5W0rD!" : ""}>
        {password}
      </Password>
      {clipboard.copied && <ClipboardText>COPIED</ClipboardText>}
      {password !== "" && <CopyIcon onClick={() => clipboard.copy(password)} />}
    </Container>
  );
};

export default PasswordResult;

import { useState } from "react";
import { Container, Title, Wrapper } from "@/styles";
import Checkbox from "@/ui-kit/CheckBox";
import PasswordStrength from "@/features/PasswordStrength";
import CharLength from "@/features/CharLength";
import PasswordResult from "@/features/PasswordResult";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import Button from "./ui-kit/Button";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  return (
    <Wrapper>
      <Title>Password Generator</Title>
      <PasswordResult password={password} />
      <Container>
        <CharLength setValue={setPasswordLength} value={passwordLength} />
        <Checkbox
          label="Include Uppercase Letters"
          value={includeUppercase}
          setValue={setIncludeUppercase}
        />
        <Checkbox
          label="Include Lowercase Letters"
          value={includeLowercase}
          setValue={setIncludeLowercase}
        />
        <Checkbox
          label="Include Numbers"
          value={includeNumbers}
          setValue={setIncludeNumbers}
        />
        <Checkbox
          label="Include Symbols"
          value={includeSymbols}
          setValue={setIncludeSymbols}
        />
        <PasswordStrength />
        <Button icon={<IconArrowRight />}>GENERATE</Button>
      </Container>
    </Wrapper>
  );
}

export default App;

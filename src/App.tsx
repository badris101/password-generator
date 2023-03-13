import { useState } from "react";
import { Container, Title } from "@/styles";
import Checkbox from "@/ui-kit/CheckBox";
import PasswordStrength from "@/features/PasswordStrength";
import CharLength from "@/features/CharLength";
import PasswordResult from "@/features/PasswordResult";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import Button from "./ui-kit/Button";
import { STRENGTH, CHARS } from "@/utils/shared/enums";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = CHARS.UPPERCASE;
    const lowercaseChars = CHARS.LOWERCASE;
    const numberChars = CHARS.NUMBERS;
    const symbolChars = CHARS.SYMBOLS;

    let validChars = "";
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const checkStrength = () => {
    let score = 0;
    if (password.match(/[A-Z]/g)) score += 1;
    if (password.match(/[a-z]/g)) score += 1;
    if (password.match(/[0-9]/g)) score += 1;
    if (password.match(/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/g)) score += 1;
    if (password.length >= 8) score += 1;

    if (score === 0) {
      return STRENGTH.TOO_WEAK;
    } else if (score === 1 || score === 2) {
      return STRENGTH.WEAK;
    } else if (score === 3 || score === 4) {
      return STRENGTH.MEDIUM;
    } else {
      return STRENGTH.STRONG;
    }
  };

  const isButtonDisabled = () => {
    return (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    );
  };

  return (
    <>
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
        <PasswordStrength strength={checkStrength()} />
        <Button
          disabled={isButtonDisabled()}
          onClick={generatePassword}
          icon={<IconArrowRight />}
        >
          GENERATE
        </Button>
      </Container>
    </>
  );
}

export default App;

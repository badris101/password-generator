import { Container, Label, Level, Strength } from "./styles";
import { Rating } from "@mantine/core";
import { colors } from "@/GlobalStyle";
import { STRENGTH } from "@/utils/shared/enums";
import { StrengthTypesColor, StrengthTypesValue } from "@/utils/shared/types";

interface IProps {
  strength: string;
}

const getColor: StrengthTypesColor = {
  [STRENGTH.TOO_WEAK]: colors.tartOrange,
  [STRENGTH.WEAK]: colors.coral,
  [STRENGTH.MEDIUM]: colors.crayola,
  [STRENGTH.STRONG]: colors.mintGreen,
};

const getLevel: StrengthTypesValue = {
  [STRENGTH.TOO_WEAK]: 1,
  [STRENGTH.WEAK]: 2,
  [STRENGTH.MEDIUM]: 3,
  [STRENGTH.STRONG]: 4,
};

const PasswordStrength = ({ strength }: IProps) => {
  return (
    <Container>
      <Label>STRENGTH</Label>
      <Strength>{strength}</Strength>
      <Rating
        styles={() => ({
          label: {
            marginLeft: 8,
          },
        })}
        value={getLevel[strength]}
        count={4}
        fullSymbol={<Level color={getColor[strength]} />}
        emptySymbol={<Level empty />}
        readOnly
      />
    </Container>
  );
};

export default PasswordStrength;

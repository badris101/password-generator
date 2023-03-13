import { Checkbox as CustomeCheckbox } from "@mantine/core";
import CheckIcon from "@/assets/icons/CheckIcon";
import { colors } from "@/GlobalStyle";
interface IProps {
  label: string;
  value: boolean;
  setValue: (val: boolean) => void;
}

const Checkbox = ({ value, setValue, label }: IProps) => {
  return (
    <CustomeCheckbox
      icon={CheckIcon}
      label={label}
      checked={value}
      onChange={(event) => setValue(event.currentTarget.checked)}
      styles={() => ({
        root: {
          marginBottom: 20,
        },
        input: {
          backgroundColor: colors.darkGunmetal,
          borderRadius: 0,
          border: `2px solid ${colors.platinum}`,
          "&:checked": {
            backgroundColor: colors.mintGreen,
            borderColor: colors.mintGreen,
          },
        },
        label: {
          color: colors.platinum,
          fontFamily: "JetBrainsMono",
          fontSize: "18px",
        },
      })}
    />
  );
};

export default Checkbox;

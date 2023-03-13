import { ReactElement } from "react";
import { Button as CustomButton } from "./styles";

interface IProps {
  icon?: ReactElement;
  children: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ icon, children, onClick, disabled }: IProps) => {
  return (
    <CustomButton disabled={disabled} onClick={onClick}>
      {children}
      {icon ? icon : null}
    </CustomButton>
  );
};

export default Button;

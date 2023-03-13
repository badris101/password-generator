import { ReactElement } from "react";
import { Button as CustomButton } from "./styles";

interface IProps {
  icon?: ReactElement;
  children: string;
}

const Button = ({ icon, children }: IProps) => {
  return (
    <CustomButton>
      {children}
      {icon ? icon : null}
    </CustomButton>
  );
};

export default Button;

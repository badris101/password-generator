import { Slider } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { Content, Length, Container } from "./styles";
import { colors } from "@/GlobalStyle";

interface IProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const CharLength = ({ value, setValue }: IProps) => {
  return (
    <Container>
      <Content>
        <p>Character Length</p>
        <Length>{value}</Length>
      </Content>
      <Slider
        value={value}
        max={15}
        min={8}
        label={null}
        showLabelOnHover={false}
        onChange={setValue}
        styles={() => ({
          track: {
            height: "8px",
            "&:before": {
              borderRadius: 0,
              backgroundColor: colors.eerieBlack,
            },
          },
          bar: {
            backgroundColor: colors.mintGreen,
            borderRadius: 0,
          },
          thumb: {
            height: "28px",
            width: "28px",
            backgroundColor: colors.eerieBlack,
            border: `2px solid ${colors.mintGreen}`,
          },
        })}
      />
    </Container>
  );
};

export default CharLength;

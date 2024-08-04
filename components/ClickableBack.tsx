import Back from "@/assets/svgs/Back";
import { TouchableOpacity } from "react-native";

interface Props {
  onClick: () => void;
}

export const ClickableBack = ({ onClick }: Props) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Back />
    </TouchableOpacity>
  );
};
import { ButtonType } from "../../models/ButtonType";
import "./button.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  btnType: ButtonType;
}

export const Button = (props: IButtonProps) => {
  const { text, btnType, ...rest } = props;
  let className = "";

  if (btnType === ButtonType.PRIMARY) {
    className = "button-primary";
  }

  if (btnType === ButtonType.SECONDARY) {
    className = "button-secondary";
  }

  if (btnType === ButtonType.TERTIARY) {
    className = "button-tertiary";
  }

  return (
    <>
      <button className={className} {...rest}>
        {text}
      </button>
    </>
  );
};

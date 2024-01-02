import { Button } from "../Common/Button";
import { ButtonType } from "../../models/ButtonType";

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Button btnType={ButtonType.PRIMARY} text="Order" />
      <Button btnType={ButtonType.SECONDARY} text="Contact me" />
      <Button btnType={ButtonType.TERTIARY} text="Remove" />
    </>
  );
};

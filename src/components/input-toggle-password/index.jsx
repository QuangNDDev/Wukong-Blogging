import { useState } from "react";
import Input from "../input";
import IconEyeOpen from "../icon/icon-eye-open";
import IconEyeClose from "../icon/icon-eye-close";

function InputPassword({ control }) {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <>
      <Input
        name="password"
        type={togglePassword ? "text" : "password"}
        placeholder="Enter your password..."
        control={control}
      >
        {togglePassword ? (
          <IconEyeOpen onClick={() => setTogglePassword(false)} />
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(true)} />
        )}
      </Input>
    </>
  );
}

export default InputPassword;

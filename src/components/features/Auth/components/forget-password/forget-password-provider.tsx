import { ForgetPasswordProvider } from "../../context/forgget-password-provider";
import ForgetPasswordSteps from "./forget-password-steps";

export default function ForgetPasswordFlow() {
  return (
    <>
      <ForgetPasswordProvider>
        <ForgetPasswordSteps />
      </ForgetPasswordProvider>
    </>
  );
}

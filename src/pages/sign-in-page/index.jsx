import Field from "../../components/field";
import Label from "../../components/label";
import { useAuth } from "../../contexts/auth-context/auth-context";
import AuthenLayout from "../authen-layout";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import IconEyeOpen from "../../components/icon/icon-eye-open";
import IconEyeClose from "../../components/icon/icon-eye-close";
import Input from "../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [togglePassword, setTogglePassword] = useState(false);
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().required("Email address is required!").email(),
    password: yup
      .string()
      .min(8, "Your password must be 8 characters or greater")
      .required("Password is required!"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const errorMessage = Object.values(errors);
    if (errorMessage.length > 0) {
      toast.error(<p className="text-base">{errorMessage[0]?.message}</p>);
    }
  }, [errors]);

  const handleSignIn = async (values) => {
    if (!isValid) return null;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    toast.success(<p className="text-base">Login successfully</p>);
    navigate("/");
  };

  return (
    <AuthenLayout>
      <form
        className="max-w-[600px] mx-auto"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Field>
          <Label htmlFor={"email"}>Email address</Label>
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Enter your email..."}
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
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
        </Field>
        <div className="mb-5 text-base">
          You don&#39;t have an account yet?
          <Link to={"/sign-up"} className="ml-2 text-primary hover:underline">
            Register
          </Link>
        </div>
        <Button type="submit" isLoading={isSubmitting} disable={isSubmitting}>
          Sign In
        </Button>
      </form>
    </AuthenLayout>
  );
}

export default LoginPage;

import { useForm } from "react-hook-form";
import Input from "../../components/input";
import Label from "../../components/label";
import IconEyeOpen from "../../components/icon/icon-eye-open";
import Field from "../../components/field";
import IconEyeClose from "../../components/icon/icon-eye-close";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const navigate = useNavigate();

  const schema = yup.object({
    fullName: yup
      .string()
      .max(50, "Full name must be 50 characters or less")
      .required("Full name is required!"),
    email: yup.string().required("Email address is required!").email(),
    password: yup.string().required("Password is required!"),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleSignUp = async (values) => {
    if (!isValid) return null;
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(userCred.user, {
        displayName: values.fullName,
      });
      setUserInfo({
        ...userCred.user,
        displayName: values.fullName,
      });
      reset({ fullName: "", email: "", password: "" });

      const userRef = collection(db, "users");
      await addDoc(userRef, {
        fullName: values.fullName,
        email: values.email,
      });
      toast.success(<p className="text-base">Register successfully!</p>);
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    const errorMessage = Object.values(errors);
    if (errorMessage.length > 0) {
      toast.error(<p className="text-base">{errorMessage[0]?.message}</p>);
    }
  }, [errors]);

  return (
    <div className="min-h-[100vh] p-10">
      <div className="container">
        <img
          srcSet="/wukong-logo.png 2x"
          alt="wukong-blogging"
          className="mx-auto"
        />
        <h1 className="text-center text-primary text-[40px] font-semibold my-[52px]">
          Wukong Blogging
        </h1>
        <form
          className="max-w-[600px] mx-auto"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <Field>
            <Label htmlFor={"fullName"} text={"Fullname"}>
              Fullname
            </Label>
            <Input
              name={"fullName"}
              type={"text"}
              placeholder={"Enter your fullname..."}
              control={control}
            />
          </Field>
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
          <Button type="submit" isLoading={isSubmitting} disable={isSubmitting}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;

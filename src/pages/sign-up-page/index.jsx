import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Button from "../../components/button";
import Field from "../../components/field";
import Input from "../../components/input";
import InputPassword from "../../components/input-toggle-password";
import Label from "../../components/label";
import { auth, db } from "../../firebase/firebase-config";
import AuthenLayout from "../authen-layout";
import slugify from "slugify";

function SignUpPage() {
  const navigate = useNavigate();

  const schema = yup.object({
    fullName: yup
      .string()
      .max(50, "Full name must be 50 characters or less")
      .required("Full name is required!"),
    email: yup.string().required("Email address is required!").email(),
    password: yup
      .string()
      .min(8, "Your password must be 8 characters or greater")
      .required("Password is required!"),
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

      reset({ fullName: "", email: "", password: "" });

      // const userRef = collection(db, "users");
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        fullName: values.fullName,
        username: slugify(values.username, { lower: true }),
        email: values.email,
      }); // cách này dùng dể set cái id của user giống với cái mà uid của firebase tạo ra

      // await addDoc(userRef, {
      //   fullName: values.fullName,
      //   email: values.email,
      // });
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
  useEffect(() => {
    document.title = "Register page";
  });
  return (
    <AuthenLayout>
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
          <InputPassword control={control} />
        </Field>
        <div className="mb-5 text-base">
          Do you have an account?
          <Link to={"/sign-in"} className="ml-2 text-primary hover:underline">
            Sign in
          </Link>
        </div>
        <Button type="submit" isLoading={isSubmitting} disable={isSubmitting}>
          Sign Up
        </Button>
      </form>
    </AuthenLayout>
  );
}

export default SignUpPage;

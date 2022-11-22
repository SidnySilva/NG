import { ButtonBox } from "../buttonBox";
import { InputBox } from "../inputBox";
import { Form } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface SignUpCredentials {
  username: string;
  password: string;
  confirmPassword: string;
}

export const RegisterBox = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is necessary")
      .matches(
        /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
        "Username: Minimun 3 characters, Can`t use special caracters."
      ),
    password: yup
      .string()
      .required("Password is necessary")
      .matches(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
        "Password: Minimun 8 characters;At least a number;At least an uppercase letter;At least a lowercase letter;A special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Different passwords")
      .required("You need to confirm your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = ({
    username,
    password,
    confirmPassword,
  }: SignUpCredentials) => {
    api
      .post("/user/signup", { username, password, confirmPassword })
      .then((response) => {
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>GN Cash</h1>
        <h3>Register</h3>
        <div className="inputs">
          <InputBox
            placeholder="Username"
            register={{ ...register("username") }}
          />
          {errors.username?.message && (
            <span className="error">{errors.username?.message}</span>
          )}
          <InputBox
            placeholder="Password"
            register={{ ...register("password") }}
          />
          {errors.password?.message && (
            <span className="error">{errors.password?.message}</span>
          )}
          <InputBox
            placeholder="Confirm Password"
            register={{ ...register("confirmPassword") }}
          />
          {errors.confirmPassword?.message && (
            <span className="error">{errors.confirmPassword?.message}</span>
          )}
        </div>
        <div className="buttons">
          <ButtonBox type="submit" text="Create" color="" />
          <ButtonBox
            onClick={() => {
              navigate("/signin");
            }}
            text="Login"
            color=""
          />
        </div>
      </Form>
    </>
  );
};

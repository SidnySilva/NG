import { ButtonBox } from "../buttonBox";
import { InputBox } from "../inputBox";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/authProvider";
import { Form } from "../registerBox/styles";

interface LoginCredentials {
  username: string;
  password: string;
}

export const LoginBox = () => {
  const navigate = useNavigate();
  const { signIn } = useUser();

  const formSchema = yup.object().shape({
    username: yup.string(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: LoginCredentials) => {
    signIn(data);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>GN Cash</h1>
        <h3>Login</h3>
        <div className="inputs">
          <InputBox
            register={{ ...register("username") }}
            placeholder="Username"
          />
          {errors.username?.message && (
            <span className="error">{errors.username?.message}</span>
          )}
          <InputBox
            register={{ ...register("password") }}
            placeholder="Password"
          />
          {errors.password?.message && (
            <span className="error">{errors.password?.message}</span>
          )}
        </div>
        <div className="buttons">
          <ButtonBox type="submit" text="Confirm" color="" />
          <ButtonBox
            onClick={() => {
              navigate("/");
            }}
            text="Register"
            color=""
          />
        </div>
      </Form>
    </>
  );
};

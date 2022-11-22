import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useTransaction } from "../../context/transactionProvider";
import { ButtonBox } from "../buttonBox";
import { InputBox } from "../inputBox";
import { Container, Form } from "./styles";

interface TransferCredentials {
  username: string;
  quantity: number;
}

export const Transfer = () => {
  const { transferTo } = useTransaction();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Insert an username")
      .matches(
        /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
        "Username: Minimun 3 characters, Can`t use special caracters."
      ),
    quantity: yup.number().required("A value is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransferCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: TransferCredentials) => {
    transferTo(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <span>Transfer To:</span>
          <InputBox
            placeholder="Username"
            register={{ ...register("username") }}
            
          />
        </div>
          {errors.username?.message && (
            <span className="error">{errors.username?.message}</span>
          )}
        <div>
          <span>Quantity</span>
          <InputBox placeholder="value" type='number' register={{ ...register("quantity") }} />
        </div>
          {errors.quantity?.message && (
            <span className="error">{errors.quantity?.message}</span>
          )}
        <ButtonBox type="submit" text="Send" />
      </Form>
    </Container>
  );
};

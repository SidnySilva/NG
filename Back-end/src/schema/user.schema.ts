import * as yup from "yup"

export const userCreateSchema = yup.object().shape({
    username:yup.string().required("Username is necessary").matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
    "Username: Minimun 3 characters, Can`t user special caracters."),
    password:yup.string().required("Password is necessary").matches(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
        "Password: Minimun 8 characters;At least a number;At least an uppercase letter;At least a lowercase letter;A special character",
      ),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null], "Different passwords").required("You need to confirm your password"),
})
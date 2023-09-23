import { Form } from "formik";
import { LogInApiError } from "./form.config";
import { FormikInputField, FormikSubmitButton } from "@/features/ui";

interface LoginFormProps {
  error?: LogInApiError;
}

export function LogInForm({ error }: LoginFormProps) {
  return (
    <Form>
      <div className="flex flex-col gap-2 ">
        <FormikInputField
          name="username"
          apiError={error?.validationErrors?.username}
          inputFieldProps={{
            placeholder: "Enter user Email",
            inputClassName: "öutlined-none py-3",
          }}
        />
        <FormikInputField
          name="password"
          apiError={error?.validationErrors?.password}
          inputFieldProps={{
            placeholder: "Enter password",
            inputClassName: "öutlined-none py-3",
          }}
        />

        <div className="w-full mx-auto mt-3">
          <FormikSubmitButton
            className="bg-blue-500 hover:bg-blue-600 transition  delay-100 ease-in-out text-white w-full py-3 rounded-md"
            text="Login"
          />
        </div>
      </div>
    </Form>
  );
}

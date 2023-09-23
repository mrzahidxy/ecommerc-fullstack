import { Form } from "formik";

import { FormikInputField, FormikSubmitButton } from "@/features/ui";
import { SignInApiError } from "./form.config";

interface SignInormProps {
  error?: SignInApiError;
}

export function SignInForm({ error }: SignInormProps) {
  return (
    <Form>
      <div className="flex flex-col gap-2 ">
        <FormikInputField
          name="username"
          apiError={error?.validationErrors?.username}
          inputFieldProps={{
            placeholder: "Enter Username...",
            inputClassName: "öutlined-none py-3",
          }}
        />
        <FormikInputField
          name="email"
          apiError={error?.validationErrors?.username}
          inputFieldProps={{
            placeholder: "Enter Email...",
            inputClassName: "öutlined-none py-3",
          }}
        />
        <FormikInputField
          name="password"
          apiError={error?.validationErrors?.password}
          inputFieldProps={{
            placeholder: "Enter password...",
            inputClassName: "öutlined-none py-3",
          }}
        />
        <div className="w-full mx-auto mt-3">
          <FormikSubmitButton
            className="bg-blue-500 hover:bg-blue-600 transition  delay-100 ease-in-out text-white w-full py-3 rounded-md"
            text="Sing In"
          />
        </div>
      </div>
    </Form>
  );
}

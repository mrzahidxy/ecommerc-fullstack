import React from "react";
import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { FieldContainer } from "./field-container.component";
import { ValidationErrorMessageType } from "@/features/api";

type InputFieldProps = {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean; // Change the type to boolean here
  inputClassName?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  disabled,
  placeholder,
  error,
  helperText,
  inputClassName = "",
  ...rest
}) => {
  return (
    <FieldContainer>
      {label && <label>{label}</label>}
      <input
        placeholder={placeholder}
        className={`outline-0 border border-gray-500 py-1 pl-2 ${inputClassName}`}
        disabled={disabled}
        {...rest}
      />
      {error && <small className={"text-red-600"}>{helperText}</small>}
      {!error && helperText && <small>{helperText}</small>}
    </FieldContainer>
  );
};

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: ValidationErrorMessageType;
  inputFieldProps?: InputFieldProps;
};

export const FormikInputField: React.FC<FormikTextFieldProps> = ({
  inputFieldProps,
  apiError,
  disabled,
  ...rest
}) => {
  return (
    <Field {...rest}>
      {({
        field,
        meta: { touched, error },
        form: { isSubmitting },
      }: FieldProps<number>) => {
        const passwordFieldHelperText =
          apiError || (touched && error)
            ? error || apiError
            : inputFieldProps?.helperText;

        return (
          <InputField
            {...field}
            {...inputFieldProps}
            disabled={disabled || isSubmitting}
            error={!!apiError || (touched && !!error)}
            helperText={passwordFieldHelperText}
          />
        );
      }}
    </Field>
  );
};



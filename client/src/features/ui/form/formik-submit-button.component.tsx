import React from "react";
import { useFormikContext } from "formik";

type FormikSubmitButtonProps = {
  text: string;
  className?: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
};

export const FormikSubmitButton: React.FC<FormikSubmitButtonProps> = ({
  className,
  text,
  type = "submit",
  disabled,
  ...rest
}) => {
  const { isSubmitting } = useFormikContext();

  return (
    <button type={type} className={className} disabled={disabled || isSubmitting} {...rest}>
      {isSubmitting ? (
        <>
          <span>Loading...</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

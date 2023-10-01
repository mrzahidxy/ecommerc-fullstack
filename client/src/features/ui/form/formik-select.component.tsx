import React from "react";
import Select, { StylesConfig } from "react-select";
import { useField, useFormikContext } from "formik";
import { FieldContainer } from "./field-container.component";

// Define SelectOptionType with label and value properties
type SelectOptionType = {
  label: string;
  value: string | number;
};

type Props = {
  name: string;
  className?: string;
  apiError?: string;
  helperText?: string;
  label?: string;
  error?: boolean;
  requiredIcon?: string;
  onSelect?: (value: SelectOptionType | SelectOptionType[]) => void;
  options?: SelectOptionType[];
};

const customStyles: StylesConfig<SelectOptionType, false> = {
  control: (provided) => ({
    ...provided,
    fontSize: "14px",
    height: "43px",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
  multiValue: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
};

function determineIsMulti(
  fieldValue: SelectOptionType | SelectOptionType[]
): boolean {
  return Array.isArray(fieldValue);
}

function getValueFromOptions(
  options: SelectOptionType[] | undefined,
  fieldValue: SelectOptionType | SelectOptionType[]
): SelectOptionType[] | undefined {
  if (!options) return undefined;

  return options.filter((option) => {
    const isArrayValue = Array.isArray(fieldValue);
    if (isArrayValue) {
      const values = fieldValue as SelectOptionType[];
      return values.some((v) => v.value === option.value);
    } else {
      return fieldValue.value === option.value;
    }
  });
}

export function FormikReactSelect(props: Props) {
  const {
    name,
    label,
    error,
    helperText,
    apiError,
    requiredIcon,
    onSelect,
    ...restProps
  } = props;

  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const isMulti = determineIsMulti(field.value);
  const value = getValueFromOptions(props.options, field.value);

  const handleChange = (val: SelectOptionType | SelectOptionType[] | null) => {
    if (val === null) {
      setFieldValue(name, undefined);
    } else if (Array.isArray(val)) {
      setFieldValue(
        name,
        val.map((option) => option.value)
      );
    } else {
      setFieldValue(name, val.value);
    }
    onSelect && onSelect(val as SelectOptionType | SelectOptionType[]);
  };

  return (
    <FieldContainer>
      {label && (
        <label htmlFor={name}>
          {label}
          {requiredIcon && <span className="p-error">{requiredIcon}</span>}
        </label>
      )}
      <Select
        {...restProps}
        value={value}
        styles={customStyles}
        onChange={handleChange}
        // isMulti={isMulti as boolean}
      />
      {meta.touched && meta.error && (
        <small className="p-error">{meta.error}</small>
      )}
      {helperText && !meta.error && <small>{helperText}</small>}
    </FieldContainer>
  );
}

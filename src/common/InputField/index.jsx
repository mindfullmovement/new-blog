import React from "react";
import { useField, ErrorMessage } from "formik";
import styles from "./style.module.css";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const showError = meta.touched && meta.error;

  return (
    <div className={`input__wrapper ${showError && "input__wrapper--error"}`}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`input ${showError ? "input--error" : ""}`}
      />
      {showError && (
        <ErrorMessage
          name={props.name}
          component="div"
          className="error-message"
        />
      )}
    </div>
  );
};

export default InputField;

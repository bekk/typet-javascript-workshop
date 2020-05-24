import React from "react";
import { ErrorMessage as Error } from "react-hook-form";

const ErrorMessage = ({ errors, name }) => (
  <Error errors={errors} name={name}>
    {({ message }) => <p className="error-message">{message}</p>}
  </Error>
);

export default ErrorMessage;

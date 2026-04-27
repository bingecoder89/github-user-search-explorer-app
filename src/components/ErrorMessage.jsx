import React from "react";

function ErrorMessage({ error }) {
  return <div>{error && <p>{error}</p>}</div>;
}

export default ErrorMessage;

import React from "react";

function ErrorAlert({ errors }) {
  return (
    errors && (
      <div className="alert alert-danger m-2">
        Please fix the following errors:
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    )
  );
}

export default ErrorAlert;

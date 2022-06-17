import React from "react";

function SignInForm({ formData, handleChange }) {
  return (
    <>
      <form id="userForm" className="col-8">
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            required
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={handleChange}
            value={formData.password}
          />
        </div>
      </form>
    </>
  );
}

export default SignInForm;

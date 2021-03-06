import React from "react";

function UserForm({ formData, handleChange }) {
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
            minLength="4"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            onChange={handleChange}
            value={formData.email}
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
            minLength="4"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
      </form>
    </>
  );
}

export default UserForm;

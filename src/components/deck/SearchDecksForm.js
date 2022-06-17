import React from "react";

function SearchDecksForm({ formData, handleChange }) {
  return (
    <>
      <form id="searchDeckForm" className="col-8">
        <div className="form-row">
          <div className="col">
            <input
              id="searchTerm"
              name="searchTerm"
              type="text"
              className="form-control"
              placeholder="Enter search term"
              required
              onChange={handleChange}
              value={formData.searchTerm}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchDecksForm;

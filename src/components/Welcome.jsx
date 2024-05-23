import React, { useState } from "react";
export default function Welcome() {
  const [name, setName] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    window.location.reload();
  };

  return (
    <div style={{ padding: "5%" }}>
      <h3>Welcome to my Autocomplete address from</h3>
      <form onSubmit={submitHandle}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Please enter your Name/Company
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <input type="submit" value="Next" className="btn btn-primary" />
      </form>
    </div>
  );
}

import axios from "axios";
import { useState } from "react";
import "./SignUp.scoped.scss";

export function SignUp() {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
            class="form-control"
          />
        </div>
        <div id="email">
          Email: <input name="email" type="email" class="form-control" />
        </div>
        <div id="password">
          Password: <input name="password" type="password" class="form-control" />
        </div>
        <div id="confirm_password">
          Confirm Password: <input name="password_confirmation" type="password" class="form-control" />
        </div>
        <div id="button">
          <button className="mt-4 mb-4" class="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

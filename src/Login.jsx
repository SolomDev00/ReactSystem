import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (password.length < 8) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }
  return (
    <div className="parent">
      <form className="register" onSubmit={Submit}>
        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {accept && emailError === 422 && (
            <p className="error">Email is been Taken</p>
          )}
          <label htmlFor="pass">Password</label>
          <input
            id="pass"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="error">Password must been 8 letters!</p>
          )}
        </div>
        <button
          id="register"
          style={{ textAlign: "center", alignItems: "center" }}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

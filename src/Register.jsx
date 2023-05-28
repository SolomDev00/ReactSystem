import React from "react";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || passwordR !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
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
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name === "" && accept && (
            <p className="error">Username is required!</p>
          )}
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
          <label htmlFor="re-pass">Repeat Password</label>
          <input
            id="re-pass"
            type="password"
            placeholder="Repeat your password"
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {passwordR !== password && accept && (
            <p className="error">Password don't Matching!</p>
          )}
        </div>
        <button
          id="register"
          style={{ textAlign: "center", alignItems: "center" }}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

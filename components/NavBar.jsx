import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function handleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <div className="container">
      <nav>
        <div className="d-flex">
          <Link to={"/"} className="router">
            Home
          </Link>
          <Link to={"/about"} className="router">
            About
          </Link>
        </div>
        <div className="d-flex">
          {!window.localStorage.getItem("email") ? (
            <>
              <Link
                to={"/login"}
                style={{
                  textAlign: "center",
                  width: "100px",
                  fontSize: "14px",
                  height: "30px",
                  padding: "3px 15px",
                }}
                className="register-nav"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                style={{
                  textAlign: "center",
                  width: "100px",
                  fontSize: "14px",
                  height: "30px",
                  padding: "3px 15px",
                }}
                className="register-nav"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="register-nav" onClick={handleLogOut}>
              Logout
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

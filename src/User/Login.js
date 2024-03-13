import React from "react";
import NavigationInit from "../Navigation/NavigationInit";

export default function Login() {
  return (
    <div className="bg-container-log">
      <NavigationInit />
      <div>
        <div className="container container-login bg-light">
          <div className="container">
            <img className="container" src="./logoMipaiBookStore1.png" />
          </div>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-2 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
            </div>
            <button type="submit" className="btn-logon">
              Log on
            </button>
          </form>
        </div>
      </div>

      <div className="container-register-apart">
        <span>don't have an account?</span>
        <a href="/register">
          <button type="submit" className="btn-singup">
            Sing up
          </button>
        </a>
      </div>
    </div>
  );
}

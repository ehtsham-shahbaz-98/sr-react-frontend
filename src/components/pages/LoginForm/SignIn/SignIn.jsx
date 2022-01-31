import React from "react";

import { Input, Space } from "antd";

import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import "./SignIn.css";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="row">
      <div
        className="col l6  hide-on-med-and-down"
        style={{ margin: "0", padding: "0" }}
      >
        <div className="Image-container">
          <div className="row">
            <div className="col s12">
              <div className="Image-SignIn-heading">
                <h1>
                  Login To <br /> Shadi Registrar
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m12 l6" style={{ margin: "0", padding: "0" }}>
        <div className="SignIn-container">
          <div className="row">
            <div className="col s2 offset-s5">
              <div className="hide-on-small-only SignIn-logo">
                <LockOutlined
                  style={{
                    color: "white",
                    fontSize: "35px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="hide-on-med-and-up SignIn-logo">
                <LockOutlined
                  style={{
                    color: "white",
                    fontSize: "25px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="SignIn-heading">
                <h1>Sign In</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col s12">
                <div className="SignIn-input">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="browser-default"
                    placeholder="Email Address"
                    {...register("email", {
                      required: true,
                      pattern:
                        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    })}
                  />
                  <br />
                  {errors.email && (
                    <span
                      style={{
                        color: "darkblue",
                        fontWeight: "700",
                        fontSize: "13px",
                      }}
                    >
                      Email address is required 'example@gmail.com'
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="SignIn-input">
                  <input
                    name="password"
                    id="password"
                    type="password"
                    className="browser-default"
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d).{8,}$/,
                    })}
                  />
                  <br />
                  {errors.password && (
                    <span
                      style={{
                        color: "darkblue",
                        fontWeight: "700",
                        fontSize: "13px",
                      }}
                    >
                      Password should be atleast eight characters long
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6 m6 l5">
                <div className="SignIn-text">
                  <h5>Forgot password?</h5>
                </div>
              </div>
              <div className="col s6 m6 l7">
                <div className="SignIn-text">
                  <h5>
                    <Link to="/sign-up">Don't have account? Sign Up</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="SignIn-button">
                  <button className="browser-default" type="submit">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col s12">
              <div className="SignIn-google-button">
                <button className="browser-default">
                  <GoogleOutlined
                    style={{ fontWeight: "700", fontSize: "20px" }}
                  />{" "}
                  Sign In with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

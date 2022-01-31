import React, { useState } from "react";

import {
  EyeOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import "./SignUp.css";

const SignUp = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="row">
      <div
        className="col l6  hide-on-med-and-down"
        style={{ margin: "0", padding: "0" }}
      >
        <div className="Image-SignUp-container ">
          <div className="row">
            <div className="col s12">
              <div className="Image-SignUp-heading">
                <h1>
                  Welcome To <br /> Shadi Registrar
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m12 l6" style={{ margin: "0", padding: "0" }}>
        <div className="SignUp-container">
          <div className="row">
            <div className="col s2 offset-s5">
              <div className="hide-on-small-only SignUp-logo">
                <LockOutlined
                  style={{
                    color: "white",
                    fontSize: "35px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="hide-on-med-and-up SignUp-logo">
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
              <div className="SignUp-heading">
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col s12">
                <div className="SignUp-input">
                  <input
                    name="phone"
                    id="phone"
                    type="number"
                    className="browser-default"
                    placeholder="Phone"
                    {...register("phone", {
                      required: true,
                      pattern: /^(\d{11})?$/,
                    })}
                  />
                  <br />
                  {errors.phone && (
                    <span style={{ color: "darkblue", fontWeight: "700" }}>
                      Phone # is required '11 digits'
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="SignUp-input">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="browser-default"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    })}
                  />
                  <br />
                  {errors.email && (
                    <span style={{ color: "darkblue", fontWeight: "700" }}>
                      Email address is required 'example@gmail.com'
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="SignUp-input">
                  <input
                    name="password"
                    id="password"
                    type={values.showPassword ? "text" : "password"}
                    className="browser-default"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d).{8,}$/,
                    })}
                  />
                  <br />
                  {errors.password && (
                    <span style={{ color: "darkblue", fontWeight: "700" }}>
                      Password should be atleast 8 characters long
                      {/* <br /> at
                      least one letter and one number */}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="SignUp-input">
                  <input
                    name="password_confirm"
                    id="password_confirm"
                    type="password"
                    className="browser-default"
                    placeholder="Confirm Password"
                    {...register("password_confirm", {
                      required: "Please confirm password!",
                      validate: {
                        matchesPreviousPassword: (value) => {
                          const { password } = getValues();
                          return (
                            password === value || "Passwords should match!"
                          );
                        },
                      },
                    })}
                  />
                  <br />
                  {errors.password_confirm && (
                    <span style={{ color: "darkblue", fontWeight: "700" }}>
                      {errors.password_confirm.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="SignUp-text" style={{ textAlign: "center" }}>
                  <h5
                    style={{
                      fontWeight: "700",
                      fontSize: "15px",
                      textDecoration: "underline",
                    }}
                  >
                    <Link to="/login-page">
                      Already have an account? Sign In
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="SignUp-button">
                  <button className="browser-default" type="submit">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col s12">
              <div className="SignUp-google-button">
                <button className="browser-default">
                  <GoogleOutlined
                    style={{ fontWeight: "700", fontSize: "20px" }}
                  />{" "}
                  Sign Up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

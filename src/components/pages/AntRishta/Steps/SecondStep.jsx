import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import "../ant.css";

const SecondStep = ({ current, next, prev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    next();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 class="heading" style={{ color: "black" }}>
              Personal Details
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col s12">
              <div className="rishta-form-input">
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
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    Email address is required 'example@gmail.com'
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col s12">
              <div className="rishta-form-input">
                <input
                  name="first_name"
                  id="first_name"
                  type="text"
                  className="browser-default"
                  placeholder="First Name"
                  {...register("first_name", {
                    required: true,
                    pattern:
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                  })}
                />
                <br />

                {errors.first_name && (
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    First name is required 'Only alphabets'
                  </span>
                )}
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col s6">
              <div className="rishta-form-input">
                <input
                  name="first_name"
                  id="first_name"
                  type="text"
                  className="browser-default"
                  placeholder="First Name"
                  {...register("first_name", {
                    required: true,
                    pattern:
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                  })}
                />
                <br />

                {errors.first_name && (
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    First name is required 'Only alphabets'
                  </span>
                )}
              </div>
            </div>
            <div className="col s6">
              <div className="rishta-form-input">
                <input
                  name="last_name"
                  id="last_name"
                  type="text"
                  className="browser-default"
                  placeholder="Last Name"
                  {...register("last_name", {
                    required: true,
                    pattern:
                      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                  })}
                />
                <br />
                {errors.last_name && (
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    Last name is required 'Only alphabets'
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="rishta-form-input">
                <input
                  name="cnic"
                  id="cnic"
                  type="number"
                  className="browser-default"
                  placeholder="CNIC Number"
                  {...register("cnic", {
                    required: true,
                    pattern: /^(\d{13})?$/,
                  })}
                />
                <br />
                {errors.cnic && (
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    CNIC is required '13 digits'
                  </span>
                )}
              </div>
            </div>
            <div className="col s6">
              <div className="rishta-form-input">
                <input
                  name="whatsapp_number"
                  id="whatsapp_number"
                  type="number"
                  className="browser-default"
                  placeholder="Whatsapp Number"
                  {...register("whatsapp_number", {
                    required: true,
                    pattern: /^(\d{11})?$/,
                  })}
                />
                <br />
                {errors.whatsapp_number && (
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    Number is required '11 digits'
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col s12">
              <div className="rishta-form-input">
                <input
                  name="whatsapp_number"
                  id="whatsapp_number"
                  type="number"
                  className="browser-default"
                  placeholder="Whatsapp Number"
                  {...register("whatsapp_number", {
                    required: true,
                    pattern: /^(\d{11})?$/,
                  })}
                />
                <br />
                {errors.whatsapp_number && (
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    Number is required '11 digits'
                  </span>
                )}
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col s12">
              <div className="rishta-form-input">
                <input
                  name="phone_number"
                  id="phone_number"
                  type="number"
                  className="browser-default"
                  placeholder="Phone Number"
                  {...register("phone_number", {
                    required: true,
                    pattern: /^(\d{11})?$/,
                  })}
                />
                <br />
                {errors.phone_number && (
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    Phone # is required '11 digits'
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* <div class="row">
            <div class="input-field input-outlined-secondary col s12">
              <input
                name="email"
                id="email"
                type="email"
                class="validate"
                {...register("email", {
                  required: true,
                  pattern:
                    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                })}
              />
              <label for="email">Email Address</label>
              {errors.email && (
                <span style={{ color: "red" }}>
                  Email address is required 'example@gmail.com'
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div class="input-field input-outlined-secondary col s12">
              <input
                name="first_name"
                id="first_name"
                type="text"
                class="validate"
                {...register("first_name", {
                  required: true,
                  pattern:
                    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                })}
              />
              <label for="first_name">First Name</label>
              {errors.first_name && (
                <span style={{ color: "red" }}>
                  First name is required 'Only alphabets'
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div class="input-field input-outlined-secondary col s12">
              <input
                name="last_name"
                id="last_name"
                type="text"
                class="validate"
                {...register("last_name", {
                  required: true,
                  pattern:
                    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                })}
              />
              <label for="last_name">Last Name</label>
              {errors.last_name && (
                <span style={{ color: "red" }}>
                  Last name is required 'Only alphabets'
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div class="input-field input-outlined-secondary col s12">
              <input
                name="cnic"
                id="cnic"
                type="number"
                class="validate"
                {...register("cnic", {
                  required: true,
                  pattern: /^(\d{13})?$/,
                })}
              />
              <label for="cnic">CNIC: </label>
              {errors.cnic && (
                <span style={{ color: "red" }}>
                  CNIC is required '13 digits'
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div class="input-field input-outlined-secondary col s12">
              <input
                name="whatsapp_number"
                id="whatsapp_number"
                type="number"
                class="validate"
                {...register("whatsapp_number", {
                  required: true,
                  pattern: /^(\d{11})?$/,
                })}
              />
              <label for="whatsapp_number">Whatsapp #</label>
              {errors.whatsapp_number && (
                <span style={{ color: "red" }}>
                  Number is required '11 digits'
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div class="input-field input-outlined-secondary col s12">
              <input
                name="phone_number"
                id="phone_number"
                type="number"
                class="validate"
                {...register("phone_number", {
                  required: true,
                  pattern: /^(\d{11})?$/,
                })}
              />
              <label for="phone_number">Candidate Phone #</label>
              {errors.phone_number && (
                <span style={{ color: "red" }}>
                  Phone # is required '11 digits'
                </span>
              )}
            </div>
          </div> */}

          <div className="row">
            <div className="col s12">
              {current === 1 && (
                <button
                  type="submit"
                  className="btn black text-center"
                  style={{
                    width: "70%",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button
                style={{ margin: "0 8px" }}
                className="btn blue text-center"
                onClick={() => prev()}
                style={{
                  width: "70%",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Previous
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecondStep;

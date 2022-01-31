import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import "../ant.css";

const antJobData = [
  {
    label: "Job",
    value: "Job",
  },
  {
    label: "Business",
    value: "Business",
  },
  {
    label: "Not Applicable",
    value: "Not Applicable",
  },
];

const antIncomeData = [
  {
    label: "Less than 50K",
    value: "Less than 50K",
  },
  {
    label: "50K - 100K",
    value: "50K - 100K",
  },
  {
    label: "100K - 150K",
    value: "100K - 150K",
  },
  {
    label: "150K - 200K",
    value: "150K - 200K",
  },
];

const SixthStep = ({ current, next, prev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    console.log(data);
    next();
  };

  const [antJob, setAntJob] = useState("");
  const [antIncome, setAntIncome] = useState("");

  const handleJobChange = (event) => {
    setAntJob(event.target.value);
  };

  const handleIncomeChange = (event) => {
    setAntIncome(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 class="heading" style={{ color: "black" }}>
              Job Details
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col s6">
              <div className="rishta-form-input">
                <select
                  name="profession"
                  class="browser-default"
                  {...register("profession", { required: true })}
                  value={antJob}
                  onChange={handleJobChange}
                >
                  <option value="" disabled selected>
                    Profession
                  </option>
                  {antJobData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.profession && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
            <div class="col s6">
              <div className="rishta-form-input">
                <select
                  name="income"
                  class="browser-default"
                  {...register("income", { required: true })}
                  value={antIncome}
                  onChange={handleIncomeChange}
                >
                  <option value="" disabled selected>
                    Choose Income
                  </option>
                  {antIncomeData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.income && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <input
                  name="qualifications"
                  id="qualifications"
                  type="text"
                  className="browser-default"
                  placeholder="Qualifications"
                  {...register("qualifications", { required: true })}
                />
              </div>

              {errors.qualifications && (
                <span style={{ color: "darkblue" }}>
                  Please Enter your qualification
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              {current === 5 && (
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

export default SixthStep;

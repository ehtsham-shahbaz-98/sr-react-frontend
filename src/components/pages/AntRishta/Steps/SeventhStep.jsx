import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import { message } from "antd";

import "../ant.css";

const antLookingForData = [
  {
    label: "Single",
    value: "Single",
  },
  {
    label: "Married",
    value: "Married",
  },
  {
    label: "Divorcee",
    value: "Divorcee",
  },
  {
    label: "2nd Marriage",
    value: "2nd Marriage",
  },
  {
    label: "Widow",
    value: "Widow",
  },
];

const antMinHeightData = [
  {
    label: "5 ft",
    value: "5 ft",
  },
  {
    label: "6 ft",
    value: "6 ft",
  },
  {
    label: "7 ft",
    value: "7 ft",
  },
  {
    label: "8 ft",
    value: "8 ft",
  },
];

const antMaxHeightData = [
  {
    label: "5 ft",
    value: "5 ft",
  },
  {
    label: "6 ft",
    value: "6 ft",
  },
  {
    label: "7 ft",
    value: "7 ft",
  },
  {
    label: "8 ft",
    value: "8 ft",
  },
];

const antMinAgeData = [
  {
    label: "18",
    value: "18",
  },
  {
    label: "19",
    value: "19",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "21",
    value: "21",
  },
  {
    label: "22",
    value: "22",
  },
];

const antMaxAgeData = [
  {
    label: "18",
    value: "18",
  },
  {
    label: "19",
    value: "19",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "21",
    value: "21",
  },
  {
    label: "22",
    value: "22",
  },
];

const antSameCasteData = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

const antSameCityData = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

const SeventhStep = ({ current, next, prev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    console.log(data);
    message.success("Form Submitted, Thank you!");
  };

  const [antLookingFor, setAntLookingFor] = useState("");
  const [antMinHeight, setAntMinHeight] = useState("");
  const [antMaxHeight, setAntMaxHeight] = useState("");
  const [antMinAge, setAntMinAge] = useState("");
  const [antMaxAge, setAntMaxAge] = useState("");
  const [antSameCaste, setAntSameCaste] = useState("");
  const [antSameCity, setAntSameCity] = useState("");

  const handleLookingForChange = (event) => {
    setAntLookingFor(event.target.value);
  };

  const handleMinHeightChange = (event) => {
    setAntMinHeight(event.target.value);
  };

  const handleMaxHeightChange = (event) => {
    setAntMaxHeight(event.target.value);
  };

  const handleMinAgeChange = (event) => {
    setAntMinAge(event.target.value);
  };

  const handleMaxAgeChange = (event) => {
    setAntMaxAge(event.target.value);
  };

  const handleAntSameCasteChange = (event) => {
    setAntSameCaste(event.target.value);
  };

  const handleAntSameCityChange = (event) => {
    setAntSameCity(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 class="heading" style={{ color: "black" }}>
              Requirements
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="lookingFor"
                  class="browser-default"
                  {...register("lookingFor", { required: true })}
                  value={antLookingFor}
                  onChange={handleLookingForChange}
                >
                  <option value="" disabled selected>
                    Looking For
                  </option>
                  {antLookingForData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.lookingFor && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="minHeight"
                  class="browser-default"
                  {...register("minHeight", { required: true })}
                  value={antMinHeight}
                  onChange={handleMinHeightChange}
                >
                  <option value="" disabled selected>
                    Minimum Height
                  </option>
                  {antMinHeightData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.minHeight && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="maxHeight"
                  class="browser-default"
                  {...register("maxHeight", { required: true })}
                  value={antMaxHeight}
                  onChange={handleMaxHeightChange}
                >
                  <option value="" disabled selected>
                    Maximum Height
                  </option>
                  {antMaxHeightData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.maxHeight && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="minAge"
                  class="browser-default"
                  {...register("minAge", { required: true })}
                  value={antMinAge}
                  onChange={handleMinAgeChange}
                >
                  <option value="" disabled selected>
                    Minimum Age
                  </option>
                  {antMinAgeData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.minAge && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="maxAge"
                  class="browser-default"
                  {...register("maxAge", { required: true })}
                  value={antMaxAge}
                  onChange={handleMaxAgeChange}
                >
                  <option value="" disabled selected>
                    Maximum Age
                  </option>
                  {antMaxAgeData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.maxAge && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="sameCaste"
                  class="browser-default"
                  {...register("sameCaste", { required: true })}
                  value={antSameCaste}
                  onChange={handleAntSameCasteChange}
                >
                  <option value="" disabled selected>
                    Same Caste
                  </option>
                  {antSameCasteData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.sameCaste && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="sameCity"
                  class="browser-default"
                  {...register("sameCity", { required: true })}
                  value={antSameCity}
                  onChange={handleAntSameCityChange}
                >
                  <option value="" disabled selected>
                    Same City
                  </option>
                  {antSameCityData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.sameCaste && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="rishta-form-textarea col s12">
              <textarea
                name="familyDetails"
                className="browser-default"
                {...register("requirementsInfo", { required: true })}
                id="textarea1"
                placeholder="Family Details"
              ></textarea>

              {errors.requirementsInfo && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              {current === 6 && (
                <button
                  type="submit"
                  className="btn black text-center"
                  style={{
                    width: "70%",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  Done
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

export default SeventhStep;

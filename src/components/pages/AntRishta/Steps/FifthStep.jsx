import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import "../ant.css";

const antReligionData = [
  {
    label: "Islam",
    value: "Islam",
  },
  {
    label: "Christianity",
    value: "Christianity",
  },
  {
    label: "Hindu",
    value: "Hindu",
  },
  {
    label: "Sikh",
    value: "Sikh",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const antCasteData = [
  {
    label: "Afridi",
    value: "Afridi",
  },
  {
    label: "Balochi",
    value: "Balochi",
  },
  {
    label: "Malik",
    value: "Malik",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const antSectData = [
  {
    label: "Sunni",
    value: "Sunni",
  },
  {
    label: "Shia",
    value: "Shia",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const antLanguageData = [
  {
    label: "Punjabi",
    value: "Punjabi",
  },
  {
    label: "Sindhi",
    value: "Sindhi",
  },
  {
    label: "Pushto",
    value: "Pushto",
  },
  {
    label: "Balochi",
    value: "Balochi",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const antGuardianData = [
  {
    label: "Father",
    value: "Father",
  },
  {
    label: "Mother",
    value: "Mother",
  },
  {
    label: "Brother",
    value: "Brother",
  },
  {
    label: "Sister",
    value: "Sister",
  },
  {
    label: "Uncle",
    value: "Uncle",
  },
];

const FifthStep = ({ current, next, prev }) => {
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

  const [antReligion, setAntReligion] = useState("");
  const [antCaste, setAntCaste] = useState("");
  const [antSect, setAntSect] = useState("");
  const [antLanguage, setAntLanguage] = useState("");
  const [antGuardian, setAntGuardian] = useState("");

  const handleReligionChange = (event) => {
    setAntReligion(event.target.value);
  };

  const handleCasteChange = (event) => {
    setAntCaste(event.target.value);
  };

  const handleSectChange = (event) => {
    setAntSect(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setAntLanguage(event.target.value);
  };

  const handleGuradianChange = (event) => {
    setAntGuardian(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 class="heading" style={{ color: "black" }}>
              Family Details
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="religion"
                  class="browser-default"
                  {...register("religion", { required: true })}
                  value={antReligion}
                  onChange={handleReligionChange}
                >
                  <option value="" disabled selected>
                    Choose Religion
                  </option>
                  {antReligionData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.religion && (
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
                  name="caste"
                  class="browser-default"
                  {...register("caste", { required: true })}
                  value={antCaste}
                  onChange={handleCasteChange}
                >
                  <option value="" disabled selected>
                    Choose Caste
                  </option>
                  {antCasteData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.caste && (
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
                  name="sect"
                  class="browser-default"
                  {...register("sect", { required: true })}
                  value={antSect}
                  onChange={handleSectChange}
                >
                  <option value="" disabled selected>
                    Choose Sect
                  </option>
                  {antSectData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.sect && (
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
                  name="language"
                  class="browser-default"
                  {...register("language", { required: true })}
                  value={antLanguage}
                  onChange={handleLanguageChange}
                >
                  <option value="" disabled selected>
                    Preffered Language
                  </option>
                  {antLanguageData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.language && (
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
                  name="guardian"
                  class="browser-default"
                  {...register("guardian", { required: true })}
                  value={antGuardian}
                  onChange={handleGuradianChange}
                >
                  <option value="" disabled selected>
                    Choose Guardian
                  </option>
                  {antGuardianData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.guardian && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="col s12 rishta-form-textarea">
              <textarea
                placeholder="Family Details"
                name="familyDetails"
                className="browser-default"
                {...register("familyDetails", { required: true })}
                id="textarea1"
              ></textarea>
              {errors.familyDetails && (
                <span style={{ color: "darkblue" }}>
                  Family Details Required
                </span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              {current === 4 && (
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

export default FifthStep;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import "../ant.css";

import RegionSelect from "./RegionSelect";

// import {
//   CountryDropdown,
//   RegionDropdown,
//   CountryRegionData,
// } from "react-country-region-selector";

const antHouseData = [
  {
    label: "less than 5 Marla",
    value: "less than 5 Marla",
  },
  {
    label: "5 - 10 Marla",
    value: "5 - 10 Marla",
  },
  {
    label: "10 Marla - 1 Kanal",
    value: "10 Marla - 1 Kanal",
  },
  {
    label: "1 Kanal - 2 Kanal",
    value: "1 Kanal - 2 Kanal",
  },
  {
    label: "2 Kanal - 4 Kanal",
    value: "2 Kanal - 4 Kanal",
  },
  {
    label: "4 Kanal +",
    value: "4 Kanal +",
  },
];

const antHouseStatusData = [
  {
    label: "Own",
    value: "Own",
  },
  {
    label: "Rent",
    value: "Rent",
  },
];

const FourthStep = ({
  current,
  next,
  prev,
  flag,
  showStep,
  hideFunc,
  hideSection,
}) => {
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

  var genderCount = 0;

  const [countryField, setCountryField] = useState("");
  const [region, setRegion] = useState("");
  const [antHouse, setAntHouse] = useState("");
  const [antHouseStatus, setAntHouseStatus] = useState("");

  const selectCountry = (val) => {
    setCountryField(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  const handleHouseChange = (event) => {
    setAntHouse(event.target.value);
  };

  const handleHouseStatusChange = (event) => {
    setAntHouseStatus(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 class="heading" style={{ color: "black" }}>
              Address Info
            </h3>
          </div>
        </div>
        <div className={hideSection == false ? "row" : "hide"}>
          <div className="row">
            <RegionSelect
              flag={flag}
              showStep={showStep}
              hideSection={hideSection}
              hideFunc={hideFunc}
            />
          </div>
        </div>
        <div className={flag === false ? "hide" : "show"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div class="row">
            <div class="col s12">
              <select
                name="countries"
                class="browser-default"
                {...register("countries", { required: true })}
                value={country}
                onChange={handleHouseStatusChange}
              >
                <option value="" disabled selected>
                  House Info
                </option>
                {antHouseStatusData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
          </div> */}

            {/* <div class="row">
            <div class="col s12">
              <CountryDropdown
                name="countryDrop"
                {...register("countryDrop", { required: true })}
                value={country}
                onChange={(val) => selectCountry(val)}
              />
              {errors.countryDrop && (
                <span style={{ color: "red" }}>Select Atleast One Option</span>
              )}
            </div>
          </div>
          <div className={country === "" ? `hide` : `row`}>
            <div
              className={
                country === ""
                  ? `hide`
                  : `col s12`
              }
            >
              <RegionDropdown
                name="regionDrop"
                {...register("regionDrop", { required: true })}
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)}
              />
              {errors.regionDrop && (
                <span style={{ color: "red" }}>Select Atleast One Option</span>
              )}
            </div>
          </div> */}
            <div class="row">
              <div class="col s6">
                <div className="rishta-form-input">
                  <select
                    name="houseInfo"
                    class="browser-default"
                    {...register("houseInfo", { required: true })}
                    value={antHouseStatus}
                    onChange={handleHouseStatusChange}
                  >
                    <option value="" disabled selected>
                      House Info
                    </option>
                    {antHouseStatusData.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.houseInfo && (
                  <span style={{ color: "red" }}>
                    Select Atleast One Option
                  </span>
                )}
              </div>
              <div class="col s6">
                <div className="rishta-form-input">
                  <select
                    name="houseSize"
                    class="browser-default"
                    {...register("houseSize", { required: true })}
                    value={antHouse}
                    onChange={handleHouseChange}
                  >
                    <option value="" disabled selected>
                      House Size
                    </option>
                    {antHouseData.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.houseSize && (
                  <span style={{ color: "red" }}>
                    Select Atleast One Option
                  </span>
                )}
              </div>
            </div>

            {/* <div className="row">
              <div class="col s12">
                <div className="rishta-form-input">
                  <select
                    name="houseSize"
                    class="browser-default"
                    {...register("houseSize", { required: true })}
                    value={antHouse}
                    onChange={handleHouseChange}
                  >
                    <option value="" disabled selected>
                      House Size
                    </option>
                    {antHouseData.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.houseSize && (
                  <span style={{ color: "red" }}>
                    Select Atleast One Option
                  </span>
                )}
              </div>
            </div> */}

            <div class="row">
              <div class="col s12">
                <div className="rishta-form-input">
                  <input
                    name="currentAddress"
                    id="currentAddress"
                    type="text"
                    className="browser-default"
                    placeholder="Current Address"
                    {...register("currentAddress", {
                      required: true,
                    })}
                  />
                </div>
                {errors.currentAddress && (
                  <span style={{ color: "red" }}>
                    Current Address Is Required
                  </span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col s12">
                <div className="rishta-form-input">
                  <input
                    name="permanentAddress"
                    id="permanentAddress"
                    type="text"
                    className="browser-default"
                    placeholder="Permanent Address"
                    {...register("permanentAddress", {
                      required: true,
                    })}
                  />
                </div>
                {errors.permanentAddress && (
                  <span style={{ color: "red" }}>
                    Permanent Address Is Required
                  </span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col s12">
                <div className="rishta-form-input">
                  <input
                    name="area"
                    id="area"
                    type="text"
                    className="browser-default"
                    placeholder="Area"
                    {...register("area", {
                      required: true,
                    })}
                  />
                </div>
                {errors.area && (
                  <span style={{ color: "red" }}>Area Is Required</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                {current === 3 && (
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
      </div>
    </>
  );
};

export default FourthStep;

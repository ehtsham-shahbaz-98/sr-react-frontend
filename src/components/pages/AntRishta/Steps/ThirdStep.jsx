import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import "../ant.css";

const antSocialData = [
  {
    value: "Upper Class",
    label: "Upper Class",
  },
  {
    value: "Middle Class",
    label: "Middle Class",
  },
  {
    value: "Labor Class",
    label: "Labor Class",
  },
  {
    value: "Lower Class",
    label: "Lower Class",
  },
];

const antComplexionData = [
  {
    value: "Very Fair",
    label: "Very Fair",
  },
  {
    value: "Fair",
    label: "Fair",
  },
  {
    value: "Wheatish",
    label: "Wheatish",
  },
  {
    value: "Dark",
    label: "Dark",
  },
];

const antHeightData = [
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

const antKidsData = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];

const antMaritalData = [
  {
    value: "Single",
    label: "Single",
  },
  {
    value: "Married",
    label: "Married",
  },
  {
    value: "Divorcee",
    label: "Divorcee",
  },
  {
    value: "Divorcee - Nikah without Rukhsati",
    label: "Divorcee - Nikah without Rukhsati",
  },
  {
    value: "Widower/Widow",
    label: "Widower/Widow",
  },
];

const antMonthsData = [
  {
    abbreviation: "Jan",
    name: "January",
  },
  {
    abbreviation: "Feb",
    name: "February",
  },
  {
    abbreviation: "Mar",
    name: "March",
  },
  {
    abbreviation: "Apr",
    name: "April",
  },
  {
    abbreviation: "May",
    name: "May",
  },
  {
    abbreviation: "Jun",
    name: "June",
  },
  {
    abbreviation: "Jul",
    name: "July",
  },
  {
    abbreviation: "Aug",
    name: "August",
  },
  {
    abbreviation: "Sep",
    name: "September",
  },
  {
    abbreviation: "Oct",
    name: "October",
  },
  {
    abbreviation: "Nov",
    name: "November",
  },
  {
    abbreviation: "Dec",
    name: "December",
  },
];

const antDaysData = [
  {
    name: "1",
    value: "1",
  },
  {
    name: "2",
    value: "2",
  },
  {
    name: "3",
    value: "3",
  },
  {
    name: "4",
    value: "4",
  },
  {
    name: "5",
    value: "5",
  },
  {
    name: "6",
    value: "6",
  },
  {
    name: "7",
    value: "7",
  },
  {
    name: "8",
    value: "8",
  },
  {
    name: "9",
    value: "9",
  },
  {
    name: "10",
    value: "10",
  },
  {
    name: "11",
    value: "11",
  },
  {
    name: "12",
    value: "12",
  },
  {
    name: "13",
    value: "13",
  },
  {
    name: "14",
    value: "14",
  },
  {
    name: "15",
    value: "15",
  },
  {
    name: "16",
    value: "16",
  },
  {
    name: "17",
    value: "17",
  },
  {
    name: "18",
    value: "18",
  },
  {
    name: "19",
    value: "19",
  },
  {
    name: "20",
    value: "20",
  },
  {
    name: "21",
    value: "21",
  },
  {
    name: "22",
    value: "22",
  },
  {
    name: "23",
    value: "23",
  },
  {
    name: "24",
    value: "24",
  },
  {
    name: "25",
    value: "25",
  },
  {
    name: "26",
    value: "26",
  },
  {
    name: "27",
    value: "27",
  },
  {
    name: "28",
    value: "28",
  },
  {
    name: "29",
    value: "29",
  },
  {
    name: "30",
    value: "30",
  },
  {
    name: "31",
    value: "31",
  },
];

const antYearsData = [
  {
    name: "1998",
    value: "1998",
  },
  {
    name: "1999",
    value: "1999",
  },
  {
    name: "2000",
    value: "2000",
  },
  {
    name: "2001",
    value: "2001",
  },
  {
    name: "2002",
    value: "2002",
  },
  {
    name: "2003",
    value: "2003",
  },
];

const ThirdStep = ({ current, next, prev }) => {
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

  const [antSocial, setAntSocial] = useState("");
  const [antMarital, setAntMarital] = useState("");
  const [antKids, setAntKids] = useState("");
  const [antComplexion, setAntComplexion] = useState("");
  const [antCountries, setAntCountries] = useState("");
  const [antMonths, setAntMonths] = useState("");
  const [antDays, setAntDays] = useState("");
  const [antYears, setAntYears] = useState("");
  const [antHeight, setAntHeight] = useState("");

  const handleSocialChange = (event) => {
    setAntSocial(event.target.value);
  };

  const handleMaritalChange = (event) => {
    setAntMarital(event.target.value);
  };

  const handleKidsChange = (event) => {
    setAntKids(event.target.value);
  };

  const handleComplexionChange = (event) => {
    setAntComplexion(event.target.value);
  };

  const handleCountriesChange = (event) => {
    setAntCountries(event.target.value);
  };

  const handleMonthsChange = (event) => {
    setAntMonths(event.target.value);
  };

  const handleDaysChange = (event) => {
    setAntDays(event.target.value);
  };

  const handleYearsChange = (event) => {
    setAntYears(event.target.value);
  };

  const handleHeightChange = (event) => {
    setAntHeight(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 class="heading" style={{ color: "black" }}>
              Social Status
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="social"
                  class="browser-default"
                  {...register("social", { required: true })}
                  value={antSocial}
                  onChange={handleSocialChange}
                >
                  <option value="">Select Social Class</option>
                  {antSocialData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.social && (
                  <span style={{ color: "darkblue" }}>
                    Select Atleast One Option
                  </span>
                )}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="complexion"
                  class="browser-default"
                  {...register("complexion", { required: true })}
                  value={antComplexion}
                  onChange={handleComplexionChange}
                >
                  <option value="">Choose Complexion</option>
                  {antComplexionData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.complexion && (
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
                  name="height"
                  class="browser-default"
                  {...register("height", { required: true })}
                  value={antHeight}
                  onChange={handleHeightChange}
                >
                  <option value="">Choose Height</option>
                  {antHeightData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.height && (
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
                  name="kids"
                  class="browser-default"
                  {...register("kids", { required: true })}
                  value={antKids}
                  onChange={handleKidsChange}
                >
                  <option value="">Have Kids?</option>
                  {antKidsData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.kids && (
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
                  name="marital"
                  class="browser-default"
                  {...register("marital", { required: true })}
                  value={antMarital}
                  onChange={handleMaritalChange}
                >
                  <option value="">Marital Status</option>
                  {antMaritalData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.marital && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <p
                style={{
                  width: "100%",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "black",
                  marginTop: "0",
                  height: "10px",
                  textAlign: "center",
                }}
              >
                Date of Birth
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="month"
                  class="browser-default"
                  {...register("month", { required: true })}
                  value={antMonths}
                  onChange={handleMonthsChange}
                >
                  <option value="">Month</option>
                  {antMonthsData.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.month && (
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
                  name="day"
                  class="browser-default"
                  {...register("day", { required: true })}
                  value={antDays}
                  onChange={handleDaysChange}
                >
                  <option value="">Day</option>
                  {antDaysData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              {errors.day && (
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
                  name="year"
                  class="browser-default"
                  {...register("year", { required: true })}
                  value={antYears}
                  onChange={handleYearsChange}
                >
                  <option value="">Year</option>
                  {antYearsData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              {errors.year && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              {current === 2 && (
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

export default ThirdStep;

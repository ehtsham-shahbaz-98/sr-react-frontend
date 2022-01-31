import React, { useEffect } from "react";
import "../ant.css";

import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";

const RegionSelect = ({ flag, showStep, hideSection, hideFunc }) => {
  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
  });

  const countries = csc.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));
  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => {}, [values]);

  return (
    <div style={{ height: "inherit" }}>
      <form onSubmit={handleSubmit} style={{ color: "black" }}>
        <div className="row">
          <div className="col s12">
            <Select
              style={{ marginTop: "10px" }}
              id="country"
              name="country"
              label="country"
              options={updatedCountries}
              value={values.country}
              // onChange={value => {
              //   setFieldValue("country", value);
              //   setFieldValue("state", null);
              //   setFieldValue("city", null);
              // }}
              onChange={(value) => {
                setValues({ country: value, state: null, city: null }, false);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Select
              style={{ marginTop: "10px" }}
              id="state"
              name="state"
              options={updatedStates(
                values.country ? values.country.value : null
              )}
              value={values.state}
              onChange={(value) => {
                setValues({ state: value, city: null }, false);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Select
              style={{ marginTop: "10px" }}
              id="city"
              name="city"
              options={updatedCities(values.state ? values.state.value : null)}
              value={values.city}
              onChange={(value) => setFieldValue("city", value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button
              style={{ marginTop: "10px" }}
              type="submit"
              className="btn purple"
              onClick={() => {
                showStep();
                hideFunc();
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <p>{JSON.stringify(csc.get)}</p>
      </form>
    </div>
  );
};

export default RegionSelect;

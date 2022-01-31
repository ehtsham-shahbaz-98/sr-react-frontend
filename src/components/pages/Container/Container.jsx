import React, { useState, useEffect } from "react";
import axios from "axios";

import { Empty, Tooltip, Skeleton, Modal, Button } from "antd";

import {
  UnorderedListOutlined,
  SwapOutlined,
  FilterOutlined,
} from "@ant-design/icons";

import Card from "../../Layouts/Card/Card";
import List from "../../Layouts/List/List";

const selectGender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

function Container() {
  const [emptyComponent, setEmptyComponent] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [slider, setSlider] = useState(1);
  const [list, setList] = useState(0);

  var count = 0;
  const [filtersUsed, setFiltersUsed] = useState(0);

  const [myGenderButtons, setMyGenderButtons] = useState(0);
  const [myInitialAge, setMyInitialAge] = useState(0);
  const [myFinalAge, setMyFinalAge] = useState(0);
  const [myInitialHeight, setMyInitialHeight] = useState(0);
  const [myFinalHeight, setMyFinalHeight] = useState(0);
  const [myLookingFor, setMyLookingFor] = useState(0);
  const [myLocation, setMyLocation] = useState(0);
  const [myCaste, setMyCaste] = useState(0);
  const [mySect, setMySect] = useState(0);
  const [myIncome, setMyIncome] = useState(0);

  const [rishtas, setRishtas] = useState([]);
  const [initialRishtas, setInitialRishtas] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectLocation, setSelectLocation] = useState([]);
  const [selectLookingFor, setSelectLookingFor] = useState([]);
  const [selectCaste, setSelectCaste] = useState([]);
  const [selectSect, setSelectSect] = useState([]);
  const [selectIncome, setSelectIncome] = useState([]);

  const [gender, setGender] = useState("");
  const [initialAge, setInitialAge] = useState("");
  const [finalAge, setFinalAge] = useState("");
  const [initialHeight, setInitialHeight] = useState("");
  const [finalHeight, setFinalHeight] = useState("");
  const [income, setIncome] = useState("");
  const [caste, setCaste] = useState("");
  const [sect, setSect] = useState("");
  const [location, setLocation] = useState("");
  const [lookingFor, setLookingFor] = useState("");

  function withoutFilter() {
    axios
      .get(
        `https://shadiregistrar.com/api/v1/rishtas/?id=&gender=&filter=&age_from=&age_to=&height_from=&height_to=&income=&caste=&sect=&looking_for=&location=`
      )
      .then((res) => {
        const result = res.data.data;

        setSelectLocation(result.locations);
        setSelectLookingFor(result.looking_fors);
        setSelectCaste(result.castes);
        setSelectSect(result.sects);
        setSelectIncome(result.incomes);

        setInitialRishtas(result.rishtas);
        setRishtas(result.rishtas);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchRishtas() {
    axios
      .get(
        `https://shadiregistrar.com/api/v1/rishtas/?id=&gender=${gender}&filter=&age_from=${initialAge}&age_to=${finalAge}&height_from=${initialHeight}&height_to=${finalHeight}&income=${income}&caste=${caste}&sect=${sect}&looking_for=${lookingFor}&location=${location}`
      )
      .then((res) => {
        const result = res.data.data;

        setSelectLocation(result.locations);
        setSelectLookingFor(result.looking_fors);
        setSelectCaste(result.castes);
        setSelectSect(result.sects);
        setSelectIncome(result.incomes);

        setInitialRishtas(result.rishtas);
        setRishtas(result.rishtas);

        setLoading(false);

        console.log(result.total_count);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLoading(true);
    fetchRishtas();
  }, []);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setInitialAge(event.target.value);
  };

  const handleFinalAge = (event) => {
    setFinalAge(event.target.value);
  };

  const handleHeightChange = (event) => {
    setInitialHeight(event.target.value);
  };

  const handleFinalHeight = (event) => {
    setFinalHeight(event.target.value);
  };

  const lookingForChange = (event) => {
    setLookingFor(event.target.value);
  };

  const locationChange = (event) => {
    setLocation(event.target.value);
  };

  const casteChange = (event) => {
    setCaste(event.target.value);
  };

  const sectChange = (event) => {
    setSect(event.target.value);
  };

  const incomeChange = (event) => {
    setIncome(event.target.value);
  };

  const handleSlider = () => {
    setSlider(1);
    setList(0);
  };

  const handleList = () => {
    setSlider(0);
    setList(1);
  };

  const findMatch = () => {
    setLoading(true);
    fetchRishtas();
    if (gender === "Male") {
      setMyGenderButtons(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else if (gender === "Female") {
      setMyGenderButtons(2);
      count++;
      setFiltersUsed(filtersUsed + count);
    }

    if (initialAge !== "") {
      setMyInitialAge(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyInitialAge(0);
    }

    if (finalAge !== "") {
      setMyFinalAge(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyFinalAge(0);
    }

    if (initialHeight !== "") {
      setMyInitialHeight(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyInitialHeight(0);
    }

    if (finalHeight !== "") {
      setMyFinalHeight(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyFinalHeight(0);
    }

    if (lookingFor !== "") {
      setMyLookingFor(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyLookingFor(0);
    }

    if (location !== "") {
      setMyLocation(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyLocation(0);
    }

    if (caste !== "") {
      setMyCaste(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyCaste(0);
    }

    if (sect !== "") {
      setMySect(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMySect(0);
    }

    if (income !== "") {
      setMyIncome(1);
      count++;
      setFiltersUsed(filtersUsed + count);
    } else {
      setMyIncome(0);
    }
  };

  const handleRemoveGender = () => {
    setGender("");
    setLoading(true);
    fetchRishtas();
    setMyGenderButtons(0);
  };

  const handleRemoveAge = () => {
    setInitialAge("");
    setFinalAge("");
    setLoading(true);
    fetchRishtas();
    setMyInitialAge(0);
    setMyFinalAge(0);
  };

  const handleRemoveHeight = () => {
    setInitialHeight("");
    setFinalHeight("");
    setLoading(true);
    fetchRishtas();
    setMyInitialHeight(0);
    setMyFinalHeight(0);
  };

  const handleRemoveLookingFor = () => {
    setLookingFor("");
    setLoading(true);
    fetchRishtas();
    setMyLookingFor(0);
  };

  const handleRemoveLocation = () => {
    setLocation("");
    setLoading(true);
    fetchRishtas();
    setMyLocation(0);
  };

  const handleRemoveCaste = () => {
    setCaste("");
    setLoading(true);
    fetchRishtas();
    setMyCaste(0);
  };

  const handleRemoveSect = () => {
    setSect("");
    setLoading(true);
    fetchRishtas();
    setMySect(0);
  };

  const handleRemoveIncome = () => {
    setIncome("");
    setLoading(true);
    fetchRishtas();
    setMyIncome(0);
  };

  const handleRemoveAll = () => {
    setLoading(true);
    setGender("");
    setInitialAge("");
    setFinalAge("");
    setInitialHeight("");
    setFinalHeight("");
    setLookingFor("");
    setLocation("");
    setCaste("");
    setSect("");
    setIncome("");
    // Fetch Rishtas Start
    withoutFilter();
    // Fetch Rishtas End
    setFiltersUsed(0);
    setMyGenderButtons(0);
    setMyInitialAge(0);
    setMyFinalAge(0);
    setMyInitialHeight(0);
    setMyFinalHeight(0);
    setMyLookingFor(0);
    setMyLocation(0);
    setMyCaste(0);
    setMySect(0);
    setMyIncome(0);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="row" style={{ width: "100%", marginTop: "2%" }}>
        <div className="row">
          <div className="col s6 center">
            <Tooltip title="Slider">
              <button
                className="btn btn-small black"
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "23px",
                }}
                onClick={() => handleSlider()}
              >
                <SwapOutlined />
              </button>
            </Tooltip>
          </div>

          <div className="col s6 center">
            <Tooltip title="List">
              <button
                className="btn btn-small black"
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "23px",
                }}
                onClick={() => handleList()}
              >
                <UnorderedListOutlined />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className={slider === 1 ? "row" : "hide"}>
          <>
            {loading ? (
              <>
                <div className="row" style={{ width: "80%" }}>
                  <Skeleton active paragraph={{ rows: 4 }} avatar />
                  <Skeleton active paragraph={{ rows: 4 }} avatar />
                  <Skeleton active paragraph={{ rows: 4 }} avatar />
                </div>
                {/* <Skeleton active /> */}
              </>
            ) : (
              <>
                <div className="col s12 align-center">
                  <Card
                    rishtas={rishtas}
                    initialRishtas={initialRishtas}
                    loading={loading}
                    myGenderButtons={myGenderButtons}
                    myInitialAge={myInitialAge}
                    myFinalAge={myFinalAge}
                    initialAge={initialAge}
                    finalAge={finalAge}
                    myInitialHeight={myInitialHeight}
                    myFinalHeight={myFinalHeight}
                    initialHeight={initialHeight}
                    finalHeight={finalHeight}
                    filtersUsed={filtersUsed}
                    lookingFor={lookingFor}
                    myLookingFor={myLookingFor}
                    location={location}
                    myLocation={myLocation}
                    caste={caste}
                    myCaste={myCaste}
                    sect={sect}
                    mySect={mySect}
                    income={income}
                    myIncome={myIncome}
                    handleRemoveAll={handleRemoveAll}
                    handleRemoveGender={handleRemoveGender}
                    handleRemoveAge={handleRemoveAge}
                    handleRemoveHeight={handleRemoveHeight}
                    handleRemoveLookingFor={handleRemoveLookingFor}
                    handleRemoveLocation={handleRemoveLocation}
                    handleRemoveCaste={handleRemoveCaste}
                    handleRemoveSect={handleRemoveSect}
                    handleRemoveIncome={handleRemoveIncome}
                  />
                </div>

                <div
                  className="row"
                  style={{ marginBottom: "1%", marginTop: "1%" }}
                >
                  <div className="col s12 offset-s10 fixed-action-btn">
                    <Tooltip title="Filter">
                      <Button
                        type="primary"
                        onClick={showModal}
                        style={{
                          textAlign: "center",
                          height: "auto",
                          width: "60px",
                          borderRadius: "5%",
                        }}
                      >
                        <FilterOutlined
                          style={{
                            fontSize: "25px",
                            textAlign: "center",
                            paddingTop: "5%",
                          }}
                        />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
                <Modal
                  title="Rishta Filter"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <Button
                      className="cancelButton"
                      onClick={handleCancel}
                      style={{
                        backgroundColor: "#e1306c",
                        color: "white",
                      }}
                    >
                      Cancel
                    </Button>,
                  ]}
                >
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="col s12">
                          <h5>Filter Items</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div class="input-field col s12">
                          <select
                            class="browser-default"
                            value={gender}
                            onChange={handleGenderChange}
                          >
                            <option value="">Select Gender</option>
                            {selectGender.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col s6">
                          <label for="initialAge">Age (min 18)</label>
                          <input
                            id="initialAge"
                            type="number"
                            class="validate"
                            min="18"
                            max="100"
                            onChange={handleAgeChange}
                            value={initialAge}
                            // placeholder="18 (min)"
                          />
                        </div>
                        <div class="col s6">
                          <label for="finalAge">Age (max 100)</label>
                          <input
                            id="finalAge"
                            type="number"
                            class="validate"
                            min="18"
                            max="100"
                            onChange={handleFinalAge}
                            value={finalAge}
                            // placeholder="100 (max)"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col s6">
                          <label for="initialHeight">Height (min 3ft)</label>

                          <input
                            id="initialHeight"
                            type="number"
                            class="validate"
                            min="3"
                            max="9"
                            onChange={handleHeightChange}
                            value={initialHeight}
                            // placeholder="3 (min)"
                          />
                        </div>
                        <div class="col s6">
                          <label for="finalHeight">Height (max 9ft)</label>

                          <input
                            id="finalHeight"
                            type="number"
                            class="validate"
                            min="3"
                            max="9"
                            onChange={handleFinalHeight}
                            value={finalHeight}
                            // placeholder="9 (max)"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="input-field col s12">
                          <select
                            class="browser-default"
                            value={lookingFor}
                            onChange={lookingForChange}
                          >
                            <option value="">Looking For</option>
                            {selectLookingFor.map((option, index) => (
                              <option key={index} value={option.looking_for}>
                                {option.looking_for}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <select
                            class="browser-default"
                            value={location}
                            onChange={locationChange}
                          >
                            <option value="">Location</option>

                            {selectLocation.map((option, index) => (
                              <option key={index} value={option.city}>
                                {option.city}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <select
                            class="browser-default"
                            value={caste}
                            onChange={casteChange}
                          >
                            <option value="">Caste</option>
                            {selectCaste.map((option, index) => (
                              <option key={index} value={option.caste}>
                                {option.caste}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <select
                            class="browser-default"
                            value={sect}
                            onChange={sectChange}
                          >
                            <option value="">Sect</option>
                            {selectSect.map((option, index) => (
                              <option key={index} value={option.sect}>
                                {option.sect}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <select
                            class="browser-default"
                            value={income}
                            onChange={incomeChange}
                          >
                            <option value="">Income</option>
                            {selectIncome.map((option, index) => (
                              <option key={index} value={option.income}>
                                {option.income}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12" style={{ textAlign: "center" }}>
                          <a
                            style={{ color: "white" }}
                            class="modal-action modal-close pink btn"
                            onClick={() => {
                              findMatch();
                              handleCancel();
                            }}
                          >
                            Find Match
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal>
              </>
            )}
          </>
        </div>

        <div className={list === 1 ? "row" : "hide"}>
          <>
            {loading ? (
              <>
                <div className="row" style={{ width: "80%" }}>
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                </div>
                {/* <Skeleton active /> */}
              </>
            ) : (
              <>
                <List
                  rishtas={rishtas}
                  initialRishtas={initialRishtas}
                  loading={loading}
                  myGenderButtons={myGenderButtons}
                  myInitialAge={myInitialAge}
                  myFinalAge={myFinalAge}
                  initialAge={initialAge}
                  finalAge={finalAge}
                  myInitialHeight={myInitialHeight}
                  myFinalHeight={myFinalHeight}
                  initialHeight={initialHeight}
                  finalHeight={finalHeight}
                  filtersUsed={filtersUsed}
                  lookingFor={lookingFor}
                  myLookingFor={myLookingFor}
                  location={location}
                  myLocation={myLocation}
                  caste={caste}
                  myCaste={myCaste}
                  sect={sect}
                  mySect={mySect}
                  income={income}
                  myIncome={myIncome}
                  handleRemoveAll={handleRemoveAll}
                  handleRemoveGender={handleRemoveGender}
                  handleRemoveAge={handleRemoveAge}
                  handleRemoveHeight={handleRemoveHeight}
                  handleRemoveLookingFor={handleRemoveLookingFor}
                  handleRemoveLocation={handleRemoveLocation}
                  handleRemoveCaste={handleRemoveCaste}
                  handleRemoveSect={handleRemoveSect}
                  handleRemoveIncome={handleRemoveIncome}
                />
                <>
                  <div
                    className="row"
                    style={{ marginBottom: "1%", marginTop: "1%" }}
                  >
                    <div className="col s12 l12 offset-s8 offset-l10 fixed-action-btn">
                      <Tooltip title="Filter">
                        <Button
                          // type="primary"
                          onClick={showModal}
                          style={{
                            textAlign: "center",
                            height: "auto",
                            width: "60px",
                            borderRadius: "5%",
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                          }}
                        >
                          <FilterOutlined
                            style={{
                              fontSize: "25px",
                              textAlign: "center",
                              paddingTop: "5%",
                            }}
                          />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                  <Modal
                    title="Rishtas Filter"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      <Button
                        className="cancelButton"
                        onClick={handleCancel}
                        style={{
                          backgroundColor: "#e1306c",
                          color: "white",
                        }}
                      >
                        Cancel
                      </Button>,
                    ]}
                  >
                    <div class="row">
                      <form class="col s12">
                        <div class="row">
                          <div class="col s12">
                            <h5>Filter Items</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div class="input-field col s12">
                            <select
                              class="browser-default"
                              value={gender}
                              onChange={handleGenderChange}
                            >
                              <option value="">Select Gender</option>
                              {selectGender.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col s6">
                            <label for="initialAge">Age (From 18)</label>
                            <input
                              id="initialAge"
                              type="number"
                              class="validate"
                              min="18"
                              max="100"
                              onChange={handleAgeChange}
                              value={initialAge}
                              // placeholder="18 (min)"
                            />
                          </div>
                          <div class="col s6">
                            <label for="finalAge">Age (To 100)</label>
                            <input
                              id="finalAge"
                              type="number"
                              class="validate"
                              min="18"
                              max="100"
                              onChange={handleFinalAge}
                              value={finalAge}
                              // placeholder="100 (max)"
                            />
                          </div>
                        </div>

                        <div class="row">
                          <div class="col s6">
                            <label for="initialHeight">Height (min 3ft)</label>

                            <input
                              id="initialHeight"
                              type="number"
                              class="validate"
                              min="3"
                              max="9"
                              onChange={handleHeightChange}
                              value={initialHeight}
                              // placeholder="3 (min)"
                            />
                          </div>
                          <div class="col s6">
                            <label for="finalHeight">Height (max 9ft)</label>

                            <input
                              id="finalHeight"
                              type="number"
                              class="validate"
                              min="3"
                              max="9"
                              onChange={handleFinalHeight}
                              value={finalHeight}
                              // placeholder="9 (max)"
                            />
                          </div>
                        </div>

                        <div class="row">
                          <div class="input-field col s12">
                            <select
                              class="browser-default"
                              value={lookingFor}
                              onChange={lookingForChange}
                            >
                              <option value="">Looking For</option>
                              {selectLookingFor.map((option, index) => (
                                <option key={index} value={option.looking_for}>
                                  {option.looking_for}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <select
                              class="browser-default"
                              value={location}
                              onChange={locationChange}
                            >
                              <option value="">Location</option>

                              {selectLocation.map((option, index) => (
                                <option key={index} value={option.city}>
                                  {option.city}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <select
                              class="browser-default"
                              value={caste}
                              onChange={casteChange}
                            >
                              <option value="">Caste</option>
                              {selectCaste.map((option, index) => (
                                <option key={index} value={option.caste}>
                                  {option.caste}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <select
                              class="browser-default"
                              value={sect}
                              onChange={sectChange}
                            >
                              <option value="">Sect</option>
                              {selectSect.map((option, index) => (
                                <option key={index} value={option.sect}>
                                  {option.sect}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <select
                              class="browser-default"
                              value={income}
                              onChange={incomeChange}
                            >
                              <option value="">Income</option>
                              {selectIncome.map((option, index) => (
                                <option key={index} value={option.income}>
                                  {option.income}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12" style={{ textAlign: "center" }}>
                            <a
                              style={{ color: "white" }}
                              class="black btn"
                              onClick={() => {
                                findMatch();
                                handleCancel();
                              }}
                            >
                              Find Match
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Modal>
                </>
              </>
            )}
          </>
        </div>
      </div>
      <div className={emptyComponent === false ? "hide" : "row"}>
        <Empty />
      </div>
    </>
  );
}

export default Container;

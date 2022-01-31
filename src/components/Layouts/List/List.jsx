import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button, Checkbox, Image, Modal, Tabs, Tooltip } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  SendOutlined,
} from "@ant-design/icons";

// import "../../../assets/css/CardsMain.scss";

import "./List.css";
import { Link } from "react-router-dom";

const url = "https://shadiregistrar.com/";

const List = ({
  rishtas,
  initialRishtas,
  loading,
  myGenderButtons,
  myInitialAge,
  myFinalAge,
  initialAge,
  finalAge,
  myInitialHeight,
  myFinalHeight,
  initialHeight,
  finalHeight,
  filtersUsed,
  lookingFor,
  myLookingFor,
  location,
  myLocation,
  caste,
  myCaste,
  sect,
  mySect,
  income,
  myIncome,
  handleRemoveAll,
  handleRemoveGender,
  handleRemoveAge,
  handleRemoveHeight,
  handleRemoveLookingFor,
  handleRemoveLocation,
  handleRemoveCaste,
  handleRemoveSect,
  handleRemoveIncome,
}) => {
  const [show, setShow] = useState(false);
  const [showID, setShowID] = useState([]);
  const [deviceType, setDeviceType] = useState(["tablet", "mobile"]);
  const [deviceTypeTwo, setDeviceTypeTwo] = useState([
    "desktop",
    "tablet",
    "mobile",
  ]);

  const [allowSwipe, setAllowSwipe] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [rishtaGender, setRishtaGender] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const view = `View More`;

  useEffect(() => {
    axios
      .get(`https://shadiregistrar.com/api/v1/get-reviews/?rishtaID=${showID}`)
      .then((res) => {
        const feedback = res.data.data.reviews;
        console.log(feedback);
        setReviews(feedback);
        // console.log(reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const url = "https://shadiregistrar.com/";

  return (
    <>
      <div className="text-center">
        <div className="row" style={{ fontSize: "20px", fontWeight: "700" }}>
          <button
            class="waves-light black btn"
            style={{
              margin: "10px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "initial",
            }}
          >
            Filters Applied:
          </button>
          <button
            className={
              myGenderButtons !== 0 ||
              myInitialAge !== 0 ||
              myFinalAge !== 0 ||
              myInitialHeight !== 0 ||
              myFinalHeight !== 0 ||
              myLookingFor !== 0 ||
              myLocation !== 0 ||
              myCaste !== 0 ||
              mySect !== 0 ||
              myIncome !== 0
                ? "waves-light pink lighten-1 btn right"
                : "hide"
            }
            style={{ margin: "10px", fontSize: "15px", fontWeight: "400" }}
            onClick={handleRemoveAll}
          >
            <i class="material-icons right">replay</i>
            Reset
          </button>
          <button
            className={
              myGenderButtons === 0 &&
              myInitialAge === 0 &&
              myFinalAge === 0 &&
              myInitialHeight === 0 &&
              myFinalHeight === 0 &&
              myLookingFor === 0 &&
              myLocation === 0 &&
              myCaste === 0 &&
              mySect === 0 &&
              myIncome === 0
                ? "waves-light pink darken-1 btn"
                : "hide"
            }
            style={{
              margin: "10px",
              fontSize: "15px",
              fontWeight: "400",
              cursor: "initial",
            }}
          >
            <i class="material-icons right">filter_none</i>
            None
          </button>
          <button
            className={myGenderButtons === 1 ? "waves-light blue btn" : "hide"}
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveGender}>
              cancel
            </i>
            Male
          </button>

          <button
            className={myGenderButtons === 2 ? "waves-light blue btn" : "hide"}
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveGender}>
              cancel
            </i>
            Female
          </button>
          <button
            className={
              myInitialAge === 1 || myFinalAge === 1
                ? "waves-light blue darken-2 btn"
                : "hide"
            }
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveAge}>
              cancel
            </i>
            Age: {initialAge === "" ? "18" : initialAge} -{" "}
            {finalAge === "" ? "100" : finalAge}
          </button>

          <button
            className={
              myInitialHeight === 1 || myFinalHeight === 1
                ? "waves-light blue darken-2 btn"
                : "hide"
            }
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveHeight}>
              cancel
            </i>
            Height: {initialHeight === "" ? "3" : initialHeight} -{" "}
            {finalHeight === "" ? "9" : finalHeight}
          </button>

          <button
            className={
              myLookingFor === 1 ? "waves-light blue darken-2 btn" : "hide"
            }
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveLookingFor}>
              cancel
            </i>

            {lookingFor}
          </button>
          <button
            className={
              myLocation === 1 ? "waves-light blue darken-2 btn" : "hide"
            }
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveLocation}>
              cancel
            </i>
            {location}
          </button>
          <button
            className={myCaste === 1 ? "waves-light blue darken-2 btn" : "hide"}
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveCaste}>
              cancel
            </i>
            {caste}
          </button>
          <button
            className={mySect === 1 ? "waves-light blue darken-2 btn" : "hide"}
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveSect}>
              cancel
            </i>
            {sect}
          </button>
          <button
            className={
              myIncome === 1 ? "waves-light blue darken-2 btn" : "hide"
            }
            style={{ margin: "10px" }}
          >
            <i class="material-icons right" onClick={handleRemoveIncome}>
              cancel
            </i>
            {income}
          </button>
        </div>
      </div>
      {rishtas.map((item, index) => {
        return (
          <>
            <div key={index} className="listContainer row">
              <div className="col s12 m12 l12">
                <div className="listCard">
                  <div className="row listCardHeader">
                    <div className="col s1">
                      <div className="listImageContainer">
                        <Image
                          className="listCardImage"
                          width={100}
                          src={url + item.avatar_url}
                        />
                      </div>
                    </div>
                    <div className="col s8">
                      <div className="listCardTitle">
                        <h4>Rishta ID: {item.id}</h4>
                      </div>
                      <div className="listLocation">
                        <p>
                          {item.city}, {item.country}
                        </p>
                      </div>
                    </div>
                    <div className="col s3">
                      <div className="listStatus">
                        <h5
                          style={{
                            color:
                              item.proposal_status === "Open" ? "green" : "red",
                          }}
                        >
                          {item.proposal_status}
                        </h5>
                      </div>
                      <div className="listStatusTitle">
                        <p>Proposal Status</p>
                      </div>
                    </div>
                  </div>
                  <div className="row listCardBody">
                    <div className="col s3 center">
                      <div className="listBodyInfo">
                        <h6>{item.age}</h6>
                      </div>
                      <div className="listBodyTitle">
                        <p>Age</p>
                      </div>
                    </div>
                    <div className="col s3 center">
                      <div className="listBodyInfo">
                        <h6>{item.height}</h6>
                      </div>
                      <div className="listBodyTitle">
                        <p>Height</p>
                      </div>
                    </div>
                    <div className="col s3 center">
                      <div className="listBodyInfo">
                        <h6>{item.caste}</h6>
                      </div>
                      <div className="listBodyTitle">
                        <p>Caste</p>
                      </div>
                    </div>
                    <div className="col s3 center">
                      <div className="listBodyInfo">
                        <h6>{item.marital_status}</h6>
                      </div>
                      <div className="listBodyTitle">
                        <p>Marital Status</p>
                      </div>
                    </div>
                  </div>
                  <div className="row listCardButtons">
                    <div className="col s6 center">
                      <Link to="/profile" className="listFirstButton">
                        More Info
                      </Link>
                    </div>
                    <div className="col s6 center">
                      <button className="listSecondButton">
                        Proposal Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;

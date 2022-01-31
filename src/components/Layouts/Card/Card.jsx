import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import { Button, Checkbox, Image, Modal, Tabs, Tooltip } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  SendOutlined,
} from "@ant-design/icons";

import "./CardsMain.scss";

import BounceLoader from "react-spinners/BounceLoader";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Card({
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
}) {
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
      <Modal
        title="Send Proposal Request"
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
        <div className="row proposalModalBody">
          <div className="row proposalHeading">
            <h5>Desired Rishta-ID: {showID}</h5>
          </div>
          <div className="row proposalHeading">
            <h5>Current Rishta Gender: {rishtaGender}</h5>
          </div>
          <div className="row proposalNote">
            <p>
              Please fill the <Link to="/post-rishtas">Rishta Form</Link> if you
              haven't filled!
            </p>
          </div>

          <div className="row proposalNote">
            <p>Please read these requirements:</p>
          </div>
          <div className="row proposalNote">
            <p>Should have Masters degree</p>
          </div>
          <div className="row proposalNote">
            <p>Should be earning 100K+</p>
          </div>
          <div className="row proposalNote">
            <p>Do you agree with above points?</p>
          </div>
          <div className="row proposalSelectID" style={{ width: "100%" }}>
            <div className="col s6 offset-s3 proposalSelectID">
              <select className="browser-default">
                <option value="">Select Answer</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="row proposalSubmit">
            <button>Submit</button>
          </div>
        </div>
      </Modal>

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
                ? "waves-light pink darken-1 btn right"
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
                ? "waves-light pink lighten-1 btn"
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
      <Carousel
        swipeable={allowSwipe}
        draggable={allowSwipe}
        showDots={false}
        responsive={responsive}
        infinite={true}
        focusOnSelect={true}
        // autoPlay={deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={0}
        containerClass="carousel-container"
        removeArrowOnDeviceType={show ? deviceTypeTwo : deviceType}
        deviceType={show ? deviceTypeTwo : deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="noselect"
      >
        {rishtas.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div class="wrapper">
                  <div class="profile-card js-profile-card">
                    <div class="profile-card__img">
                      {/* <img
                            style={{ pointerEvents: "none" }}
                            src={url + item.avatar_url}
                            alt="profile card"
                          /> */}
                      <Image
                        className="customImage circle responsive-img"
                        src={url + item.avatar_url}
                      />
                    </div>

                    <div class="profile-card__cnt js-profile-cnt">
                      <div class="profile-card__name">Rishta ID: {item.id}</div>
                      <div class="profile-card__txt">
                        Marital Status: <strong>{item.marital_status}</strong>
                      </div>
                      <div class="profile-card-loc">
                        <span class="profile-card-loc__icon">
                          <svg class="icon">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                        </span>

                        <span class="profile-card-loc__txt">
                          {item.city}, {item.country}
                        </span>
                      </div>

                      <div class="profile-card-inf">
                        <div class="profile-card-inf__item">
                          <div class="profile-card-inf__title">{item.age}</div>
                          <div class="profile-card-inf__txt">Age</div>
                        </div>

                        <div class="profile-card-inf__item">
                          <div class="profile-card-inf__title">
                            {item.height}
                          </div>
                          <div class="profile-card-inf__txt">Height</div>
                        </div>

                        <div class="profile-card-inf__item">
                          <div class="profile-card-inf__title">
                            {item.caste}
                          </div>
                          <div class="profile-card-inf__txt">Caste</div>
                        </div>

                        <div class="profile-card-inf__item">
                          <div
                            class="profile-card-inf__title"
                            style={{
                              color:
                                item.proposal_status === "Open"
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {item.proposal_status}
                          </div>
                          <div class="profile-card-inf__txt">
                            Proposal Status
                          </div>
                        </div>

                        {showReview
                          ? showID === item.id && (
                              <>
                                <div
                                  class="profile-card-inf__item"
                                  style={{
                                    display: show === true ? "none" : "initial",
                                  }}
                                >
                                  <div class="profile-card-inf__title">
                                    <h1>Feedback</h1>
                                  </div>

                                  {reviews.map((feed, showID) => {
                                    <div
                                      key={showID}
                                      class="profile-card-inf__txt"
                                    >
                                      <p>⭐ {feed.family_details}</p>;
                                    </div>;
                                  })}
                                </div>
                              </>
                            )
                          : null}
                        {show
                          ? showID === item.id && (
                              // <div class="wrapper-show">
                              // <div class="profile-card-show js-profile-card">
                              // <div class="profile-card-inf">
                              <>
                                <div
                                  className="hide-on-med-and-down row"
                                  style={{ marginTop: "50px" }}
                                >
                                  <div className="col s12 ProfileTabs">
                                    <div className="row">
                                      <div
                                        className="col s2 tabIndex"
                                        style={
                                          toggleState === 1
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(1);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 1
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                }
                                              : {}
                                          }
                                        >
                                          Personal
                                        </h5>
                                      </div>
                                      <div
                                        className="col s2 tabIndex"
                                        style={
                                          toggleState === 2
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(2);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 2
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                }
                                              : {}
                                          }
                                        >
                                          Religion
                                        </h5>
                                      </div>
                                      <div
                                        className="col s2 tabIndex"
                                        style={
                                          toggleState === 3
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(3);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 3
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                }
                                              : {}
                                          }
                                        >
                                          Profession
                                        </h5>
                                      </div>
                                      <div
                                        className="col s2 tabIndex"
                                        style={
                                          toggleState === 4
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(4);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 4
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                }
                                              : {}
                                          }
                                        >
                                          Family
                                        </h5>
                                      </div>
                                      <div
                                        className="col s2 tabIndex"
                                        style={
                                          toggleState === 5
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(5);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 5
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                }
                                              : {}
                                          }
                                        >
                                          Required
                                        </h5>
                                      </div>
                                      <div
                                        className="col s2 tabIndex"
                                        style={
                                          toggleState === 6
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",

                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(6);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 6
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                }
                                              : {}
                                          }
                                        >
                                          Feedback
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="hide-on-large-only row"
                                  style={{ marginTop: "50px" }}
                                >
                                  <div className="col s12 ProfileTabs">
                                    <div className="row">
                                      <div
                                        className="col s4 tabIndex"
                                        style={
                                          toggleState === 1
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(1);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 1
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                  fontSize: "13px",
                                                }
                                              : { fontSize: "13px" }
                                          }
                                        >
                                          Personal
                                        </h5>
                                      </div>
                                      <div
                                        className="col s4 tabIndex"
                                        style={
                                          toggleState === 2
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(2);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 2
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                  fontSize: "13px",
                                                }
                                              : { fontSize: "13px" }
                                          }
                                        >
                                          Religion
                                        </h5>
                                      </div>
                                      <div
                                        className="col s4 tabIndex"
                                        style={
                                          toggleState === 3
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(3);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 3
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                  fontSize: "13px",
                                                }
                                              : { fontSize: "13px" }
                                          }
                                        >
                                          Profession
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="col s12 ProfileTabs"
                                    style={{ marginTop: "10px" }}
                                  >
                                    <div className="row">
                                      <div
                                        className="col s4 tabIndex"
                                        style={
                                          toggleState === 4
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(4);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 4
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                  fontSize: "13px",
                                                }
                                              : { fontSize: "13px" }
                                          }
                                        >
                                          Family
                                        </h5>
                                      </div>
                                      <div
                                        className="col s4 tabIndex"
                                        style={
                                          toggleState === 5
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",
                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(5);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 5
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                  fontSize: "13px",
                                                }
                                              : { fontSize: "13px" }
                                          }
                                        >
                                          Required
                                        </h5>
                                      </div>
                                      <div
                                        className="col s4 tabIndex"
                                        style={
                                          toggleState === 6
                                            ? {
                                                backgroundColor: "white",
                                                color: "black",
                                                borderRadius: "5px",

                                                boxShadow:
                                                  "5px 5px 10px rgb(0 0 0 / 0.2)",
                                              }
                                            : {}
                                        }
                                        onClick={() => {
                                          toggleTab(6);
                                        }}
                                      >
                                        <h5
                                          style={
                                            toggleState === 6
                                              ? {
                                                  color: "black",
                                                  padding: "13px",
                                                  fontSize: "13px",
                                                }
                                              : { fontSize: "13px" }
                                          }
                                        >
                                          Feedback
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="container">
                                  <div
                                    className={
                                      toggleState === 1 ? "show" : "hide"
                                    }
                                  >
                                    <div class="profile-card-inf__itemother">
                                      <div class="profile-card-inf__title">
                                        <h1>Personal Details</h1>
                                      </div>

                                      <div class="profile-card-inf">
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Female
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Gender
                                          </div>
                                        </div>

                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Single
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Marital Status
                                          </div>
                                        </div>

                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            No
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Have Kids
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Single
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Looking For
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            31
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Age
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            5.11
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Height
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Fair
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Complexion
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Lahore
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            City
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Pakistan
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Country
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className={
                                      toggleState === 2 ? "show" : "hide"
                                    }
                                  >
                                    <div class="profile-card-inf__itemother">
                                      <div class="profile-card-inf__title">
                                        <h1>Religion Details</h1>
                                      </div>
                                      <div class="profile-card-inf">
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Islam
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Religion
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Lahore
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Sect
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Malik
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Caste
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className={
                                      toggleState === 3 ? "show" : "hide"
                                    }
                                  >
                                    <div class="profile-card-inf__itemother">
                                      <div class="profile-card-inf__title">
                                        <h1>Job Details</h1>
                                      </div>
                                      <div class="profile-card-inf">
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Job
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Profession
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Masters
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Degree Level
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Masters
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Education
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            MIT
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Educational Insitute
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            150K - 200K
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Income
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Lahore
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Job City
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Pakistan
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Job Country
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className={
                                      toggleState === 4 ? "show" : "hide"
                                    }
                                  >
                                    <div class="profile-card-inf__itemother">
                                      <div class="profile-card-inf__title">
                                        <h1>Family Details</h1>
                                      </div>
                                      <div class="profile-card-inf">
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Punjabi, Urdu
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Preferred Language
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Mother
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Guardian
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            6
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Family Details
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Late
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Father Occupation
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            House
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Mother Occupation
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            3
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Sisters
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            3
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Brothers
                                          </div>
                                        </div>

                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            NIL
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Other Details
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Cricket
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Hobbies
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Preferred educational background
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Requirement
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className={
                                      toggleState === 5 ? "show" : "hide"
                                    }
                                  >
                                    <div class="profile-card-inf__itemother">
                                      <div class="profile-card-inf__title">
                                        <h1>Requirements</h1>
                                      </div>
                                      <div class="profile-card-inf">
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            5.5 - 5.8
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Height Range
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            25 - 30
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Age Range
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Within same caste only
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            Caste
                                          </div>
                                        </div>
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            Within same city only
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            City
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      toggleState === 6 ? "show" : "hide"
                                    }
                                  >
                                    <div class="profile-card-inf__itemother">
                                      <div class="profile-card-inf__title">
                                        <h1>Feedbacks</h1>
                                      </div>
                                      <div class="profile-card-inf">
                                        <div class="profile-card-inf__item">
                                          <div class="profile-card-inf__title">
                                            {item.feedbacks}{" "}
                                            {item.feedbacks > 0 ? (
                                              <Tooltip title="View Feeback">
                                                <EyeOutlined
                                                  onClick={showModal}
                                                />
                                              </Tooltip>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                          <div class="profile-card-inf__txt">
                                            No of feedbacks
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                          : null}
                      </div>

                      <div class="profile-card-ctr">
                        <button
                          className={
                            show
                              ? showID === item.id &&
                                "profile-card__button button--blue js-message-btn"
                              : "hide"
                          }
                          onClick={showModal}
                        >
                          <SendOutlined /> Proposal Request
                        </button>

                        <button
                          onClick={() => {
                            setShow(!show);
                            setShowID(item.id);
                            setAllowSwipe(show);
                            setRishtaGender(item.gender);
                          }}
                          class="profile-card__button button--orange"
                        >
                          {show ? (
                            showID === item.id && <EyeInvisibleOutlined />
                          ) : (
                            <EyeOutlined />
                          )}{" "}
                          {show
                            ? showID === item.id && "View Less To Swipe"
                            : view}
                        </button>
                      </div>
                    </div>

                    <div class="profile-card-message js-message">
                      <form class="profile-card-form">
                        <div class="profile-card-form__container">
                          <textarea placeholder="Say something..."></textarea>
                        </div>

                        <div class="profile-card-form__bottom">
                          <button class="profile-card__button button--blue js-message-close">
                            Send
                          </button>

                          <button class="profile-card__button button--gray js-message-close">
                            Cancel
                          </button>
                        </div>
                      </form>

                      <div class="profile-card__overlay js-message-close"></div>
                    </div>
                  </div>
                </div>

                <svg hidden="hidden">
                  <defs>
                    <symbol id="icon-location" viewBox="0 0 32 32">
                      <title>location</title>
                      <path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"></path>
                      <path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"></path>
                    </symbol>
                  </defs>
                </svg>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
    // <>
    //   {loading ? (
    //     <div
    //       className="loader"
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "100%",
    //         height: "100vh",
    //       }}
    //     >
    //       <BounceLoader size={30} color={"pink"} loading={loading} />
    //     </div>
    //   ) : (
    //     <>
    //       <Modal
    //         title="Send Proposal Request"
    //         visible={isModalVisible}
    //         onOk={handleOk}
    //         onCancel={handleCancel}
    //         footer={[
    //           <Button
    //             className="cancelButton"
    //             onClick={handleCancel}
    //             style={{
    //               backgroundColor: "#e1306c",
    //               color: "white",
    //             }}
    //           >
    //             Cancel
    //           </Button>,
    //         ]}
    //       >
    //         <div className="row proposalModalBody">
    //           <div className="row proposalHeading">
    //             <h5>Desired Rishta-ID: {showID}</h5>
    //           </div>
    //           <div className="row proposalHeading">
    //             <h5>Current Rishta Gender: {rishtaGender}</h5>
    //           </div>
    //           <div className="row proposalNote">
    //             <p>
    //               Please fill the <Link to="/post-rishtas">Rishta Form</Link> if
    //               you haven't filled!
    //             </p>
    //           </div>
    //           {/* <div className="row proposalSub">
    //             <h5>Select Rishta ID</h5>
    //           </div> */}
    //           <div className="row proposalNote">
    //             <p>Please read these requirements:</p>
    //           </div>
    //           <div className="row proposalNote">
    //             <p>Should have Masters degree</p>
    //           </div>
    //           <div className="row proposalNote">
    //             <p>Should be earning 100K+</p>
    //           </div>
    //           <div className="row proposalNote">
    //             <p>Do you agree with above points?</p>
    //           </div>
    //           <div className="row proposalSelectID" style={{ width: "100%" }}>
    //             <div className="col s6 offset-s3 proposalSelectID">
    //               <select className="browser-default">
    //                 <option value="">Select Answer</option>
    //                 <option value="Yes">Yes</option>
    //                 <option value="No">No</option>
    //               </select>
    //             </div>
    //           </div>
    //           {/* <div className="row proposalSelectID" style={{ width: "100%" }}>
    //             <select className="browser-default">
    //               <option value="">Select Rishta ID</option>
    //               <option value="111">111</option>
    //               <option value="222">222</option>
    //               <option value="333">333</option>
    //             </select>
    //           </div> */}
    //           <div className="row proposalSubmit">
    //             <button>Submit</button>
    //           </div>
    //         </div>
    //       </Modal>

    //       <div className="text-center">
    //         <div
    //           className="row"
    //           style={{ fontSize: "20px", fontWeight: "700" }}
    //         >
    //           <button
    //             class="waves-light purple darken-1 btn"
    //             style={{
    //               margin: "10px",
    //               fontSize: "15px",
    //               fontWeight: "600",
    //               cursor: "initial",
    //             }}
    //           >
    //             Filters Applied:
    //           </button>
    //           <button
    //             className={
    //               myGenderButtons !== 0 ||
    //               myInitialAge !== 0 ||
    //               myFinalAge !== 0 ||
    //               myInitialHeight !== 0 ||
    //               myFinalHeight !== 0 ||
    //               myLookingFor !== 0 ||
    //               myLocation !== 0 ||
    //               myCaste !== 0 ||
    //               mySect !== 0 ||
    //               myIncome !== 0
    //                 ? "waves-light pink darken-1 btn right"
    //                 : "hide"
    //             }
    //             style={{ margin: "10px", fontSize: "15px", fontWeight: "400" }}
    //             onClick={handleRemoveAll}
    //           >
    //             <i class="material-icons right">replay</i>
    //             Reset
    //           </button>
    //           <button
    //             className={
    //               myGenderButtons === 0 &&
    //               myInitialAge === 0 &&
    //               myFinalAge === 0 &&
    //               myInitialHeight === 0 &&
    //               myFinalHeight === 0 &&
    //               myLookingFor === 0 &&
    //               myLocation === 0 &&
    //               myCaste === 0 &&
    //               mySect === 0 &&
    //               myIncome === 0
    //                 ? "waves-light pink darken-1 btn"
    //                 : "hide"
    //             }
    //             style={{
    //               margin: "10px",
    //               fontSize: "15px",
    //               fontWeight: "400",
    //               cursor: "initial",
    //             }}
    //           >
    //             <i class="material-icons right">filter_none</i>
    //             None
    //           </button>
    //           <button
    //             className={
    //               myGenderButtons === 1 ? "waves-light blue btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveGender}>
    //               cancel
    //             </i>
    //             Male
    //           </button>

    //           {/* <div
    //             className={myGenderButtons === 1 ? "chip" : "hide"}
    //             style={{ margin: "10px" }}
    //           >
    //             Male
    //             <i class="material-icons">close</i>
    //           </div> */}

    //           <button
    //             className={
    //               myGenderButtons === 2 ? "waves-light blue btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveGender}>
    //               cancel
    //             </i>
    //             Female
    //           </button>
    //           <button
    //             className={
    //               myInitialAge === 1 || myFinalAge === 1
    //                 ? "waves-light blue darken-2 btn"
    //                 : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveAge}>
    //               cancel
    //             </i>
    //             Age: {initialAge === "" ? "18" : initialAge} -{" "}
    //             {finalAge === "" ? "100" : finalAge}
    //           </button>

    //           {/* <button
    //             className={
    //               myFinalAge === 1 ? "waves-light blue darken-2 btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             Final Age: {finalAge}
    //           </button> */}

    //           <button
    //             className={
    //               myInitialHeight === 1 || myFinalHeight === 1
    //                 ? "waves-light blue darken-2 btn"
    //                 : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveHeight}>
    //               cancel
    //             </i>
    //             Height: {initialHeight === "" ? "3" : initialHeight} -{" "}
    //             {finalHeight === "" ? "9" : finalHeight}
    //           </button>

    //           <button
    //             className={
    //               myLookingFor === 1 ? "waves-light blue darken-2 btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i
    //               class="material-icons right"
    //               onClick={handleRemoveLookingFor}
    //             >
    //               cancel
    //             </i>

    //             {lookingFor}
    //           </button>
    //           <button
    //             className={
    //               myLocation === 1 ? "waves-light blue darken-2 btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveLocation}>
    //               cancel
    //             </i>
    //             {location}
    //           </button>
    //           <button
    //             className={
    //               myCaste === 1 ? "waves-light blue darken-2 btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveCaste}>
    //               cancel
    //             </i>
    //             {caste}
    //           </button>
    //           <button
    //             className={
    //               mySect === 1 ? "waves-light blue darken-2 btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveSect}>
    //               cancel
    //             </i>
    //             {sect}
    //           </button>
    //           <button
    //             className={
    //               myIncome === 1 ? "waves-light blue darken-2 btn" : "hide"
    //             }
    //             style={{ margin: "10px" }}
    //           >
    //             <i class="material-icons right" onClick={handleRemoveIncome}>
    //               cancel
    //             </i>
    //             {income}
    //           </button>
    //         </div>
    //       </div>
    //       <Carousel
    //         swipeable={allowSwipe}
    //         draggable={allowSwipe}
    //         showDots={false}
    //         responsive={responsive}
    //         infinite={true}
    //         focusOnSelect={true}
    //         // autoPlay={deviceType !== "mobile" ? true : false}
    //         // autoPlaySpeed={1000}
    //         keyBoardControl={true}
    //         // customTransition="all .5"
    //         transitionDuration={0}
    //         containerClass="carousel-container"
    //         removeArrowOnDeviceType={show ? deviceTypeTwo : deviceType}
    //         deviceType={show ? deviceTypeTwo : deviceType}
    //         dotListClass="custom-dot-list-style"
    //         itemClass="carousel-item-padding-40-px"
    //         className="noselect"
    //       >
    //         {rishtas.map((item, index) => {
    //           return (
    //             <>
    //               <div key={index}>
    //                 <div class="wrapper">
    //                   <div class="profile-card js-profile-card">
    //                     <div class="profile-card__img">
    //                       {/* <img
    //                         style={{ pointerEvents: "none" }}
    //                         src={url + item.avatar_url}
    //                         alt="profile card"
    //                       /> */}
    //                       <Image
    //                         // className="customImage"
    //                         className="circle responsive-img"
    //                         src={url + item.avatar_url}
    //                       />
    //                     </div>

    //                     <div class="profile-card__cnt js-profile-cnt">
    //                       <div class="profile-card__name">
    //                         Rishta ID: {item.id}
    //                       </div>
    //                       <div class="profile-card__txt">
    //                         Marital Status:{" "}
    //                         <strong>{item.marital_status}</strong>
    //                       </div>
    //                       <div class="profile-card-loc">
    //                         <span class="profile-card-loc__icon">
    //                           <svg class="icon">
    //                             <use xlinkHref="#icon-location"></use>
    //                           </svg>
    //                         </span>

    //                         <span class="profile-card-loc__txt">
    //                           {item.city}, {item.country}
    //                         </span>
    //                       </div>

    //                       <div class="profile-card-inf">
    //                         <div class="profile-card-inf__item">
    //                           <div class="profile-card-inf__title">
    //                             {item.age}
    //                           </div>
    //                           <div class="profile-card-inf__txt">Age</div>
    //                         </div>

    //                         <div class="profile-card-inf__item">
    //                           <div class="profile-card-inf__title">
    //                             {item.height}
    //                           </div>
    //                           <div class="profile-card-inf__txt">Height</div>
    //                         </div>

    //                         <div class="profile-card-inf__item">
    //                           <div class="profile-card-inf__title">
    //                             {item.caste}
    //                           </div>
    //                           <div class="profile-card-inf__txt">Caste</div>
    //                         </div>

    //                         <div class="profile-card-inf__item">
    //                           <div
    //                             class="profile-card-inf__title"
    //                             style={{
    //                               color:
    //                                 item.proposal_status === "Open"
    //                                   ? "green"
    //                                   : "red",
    //                             }}
    //                           >
    //                             {item.proposal_status}
    //                           </div>
    //                           <div class="profile-card-inf__txt">
    //                             Proposal Status
    //                           </div>
    //                         </div>

    //                         {showReview
    //                           ? showID === item.id && (
    //                               <>
    //                                 <div
    //                                   class="profile-card-inf__item"
    //                                   style={{
    //                                     display:
    //                                       show === true ? "none" : "initial",
    //                                   }}
    //                                 >
    //                                   <div class="profile-card-inf__title">
    //                                     <h1>Feedback</h1>
    //                                   </div>

    //                                   {reviews.map((feed, showID) => {
    //                                     <div
    //                                       key={showID}
    //                                       class="profile-card-inf__txt"
    //                                     >
    //                                       <p>⭐ {feed.family_details}</p>;
    //                                     </div>;
    //                                   })}
    //                                 </div>
    //                               </>
    //                             )
    //                           : null}
    //                         {show
    //                           ? showID === item.id && (
    //                               // <div class="wrapper-show">
    //                               // <div class="profile-card-show js-profile-card">
    //                               // <div class="profile-card-inf">
    //                               <>
    //                                 <div
    //                                   className="hide-on-med-and-down row"
    //                                   style={{ marginTop: "50px" }}
    //                                 >
    //                                   <div className="col s12 ProfileTabs">
    //                                     <div className="row">
    //                                       <div
    //                                         className="col s2 tabIndex"
    //                                         style={
    //                                           toggleState === 1
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(1);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 1
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Personal
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s2 tabIndex"
    //                                         style={
    //                                           toggleState === 2
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(2);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 2
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Religion
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s2 tabIndex"
    //                                         style={
    //                                           toggleState === 3
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(3);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 3
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Profession
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s2 tabIndex"
    //                                         style={
    //                                           toggleState === 4
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(4);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 4
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Family
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s2 tabIndex"
    //                                         style={
    //                                           toggleState === 5
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(5);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 5
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Required
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s2 tabIndex"
    //                                         style={
    //                                           toggleState === 6
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",

    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(6);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 6
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Feedback
    //                                         </h5>
    //                                       </div>
    //                                     </div>
    //                                   </div>
    //                                 </div>

    //                                 <div
    //                                   className="hide-on-large-only row"
    //                                   style={{ marginTop: "50px" }}
    //                                 >
    //                                   <div className="col s12 ProfileTabs">
    //                                     <div className="row">
    //                                       <div
    //                                         className="col s4 tabIndex"
    //                                         style={
    //                                           toggleState === 1
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(1);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 1
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Personal
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s4 tabIndex"
    //                                         style={
    //                                           toggleState === 2
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(2);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 2
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Religion
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s4 tabIndex"
    //                                         style={
    //                                           toggleState === 3
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(3);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 3
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Profession
    //                                         </h5>
    //                                       </div>
    //                                     </div>
    //                                   </div>
    //                                   <div
    //                                     className="col s12 ProfileTabs"
    //                                     style={{ marginTop: "10px" }}
    //                                   >
    //                                     <div className="row">
    //                                       <div
    //                                         className="col s4 tabIndex"
    //                                         style={
    //                                           toggleState === 4
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(4);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 4
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Family
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s4 tabIndex"
    //                                         style={
    //                                           toggleState === 5
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",
    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(5);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 5
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Required
    //                                         </h5>
    //                                       </div>
    //                                       <div
    //                                         className="col s4 tabIndex"
    //                                         style={
    //                                           toggleState === 6
    //                                             ? {
    //                                                 backgroundColor: "white",
    //                                                 color: "black",
    //                                                 borderRadius: "5px",

    //                                                 boxShadow:
    //                                                   "5px 5px 10px rgb(0 0 0 / 0.2)",
    //                                               }
    //                                             : {}
    //                                         }
    //                                         onClick={() => {
    //                                           toggleTab(6);
    //                                         }}
    //                                       >
    //                                         <h5
    //                                           style={
    //                                             toggleState === 6
    //                                               ? {
    //                                                   color: "black",
    //                                                   padding: "13px",
    //                                                 }
    //                                               : {}
    //                                           }
    //                                         >
    //                                           Feedback
    //                                         </h5>
    //                                       </div>
    //                                     </div>
    //                                   </div>
    //                                 </div>

    //                                 <div className="container">
    //                                   <div
    //                                     className={
    //                                       toggleState === 1 ? "show" : "hide"
    //                                     }
    //                                   >
    //                                     <div class="profile-card-inf__itemother">
    //                                       <div class="profile-card-inf__title">
    //                                         <h1>Personal Details</h1>
    //                                       </div>

    //                                       <div class="profile-card-inf">
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Female
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Gender
    //                                           </div>
    //                                         </div>

    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Single
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Marital Status
    //                                           </div>
    //                                         </div>

    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             No
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Have Kids
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Single
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Looking For
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             31
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Age
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             5.11
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Height
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Fair
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Complexion
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Lahore
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             City
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Pakistan
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Country
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                   </div>

    //                                   <div
    //                                     className={
    //                                       toggleState === 2 ? "show" : "hide"
    //                                     }
    //                                   >
    //                                     <div class="profile-card-inf__itemother">
    //                                       <div class="profile-card-inf__title">
    //                                         <h1>Religion Details</h1>
    //                                       </div>
    //                                       <div class="profile-card-inf">
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Islam
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Religion
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Lahore
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Sect
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Malik
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Caste
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                   </div>

    //                                   <div
    //                                     className={
    //                                       toggleState === 3 ? "show" : "hide"
    //                                     }
    //                                   >
    //                                     <div class="profile-card-inf__itemother">
    //                                       <div class="profile-card-inf__title">
    //                                         <h1>Job Details</h1>
    //                                       </div>
    //                                       <div class="profile-card-inf">
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Job
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Profession
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Masters
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Degree Level
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Masters
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Education
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             MIT
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Educational Insitute
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             150K - 200K
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Income
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Lahore
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Job City
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Pakistan
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Job Country
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                   </div>

    //                                   <div
    //                                     className={
    //                                       toggleState === 4 ? "show" : "hide"
    //                                     }
    //                                   >
    //                                     <div class="profile-card-inf__itemother">
    //                                       <div class="profile-card-inf__title">
    //                                         <h1>Family Details</h1>
    //                                       </div>
    //                                       <div class="profile-card-inf">
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Punjabi, Urdu
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Preferred Language
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Mother
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Guardian
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             6
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Family Details
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Late
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Father Occupation
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             House
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Mother Occupation
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             3
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Sisters
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             3
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Brothers
    //                                           </div>
    //                                         </div>

    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             NIL
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Other Details
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Cricket
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Hobbies
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Preferred educational background
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Requirement
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                   </div>

    //                                   <div
    //                                     className={
    //                                       toggleState === 5 ? "show" : "hide"
    //                                     }
    //                                   >
    //                                     <div class="profile-card-inf__itemother">
    //                                       <div class="profile-card-inf__title">
    //                                         <h1>Requirements</h1>
    //                                       </div>
    //                                       <div class="profile-card-inf">
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             5.5 - 5.8
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Height Range
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             25 - 30
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Age Range
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Within same caste only
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             Caste
    //                                           </div>
    //                                         </div>
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             Within same city only
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             City
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                   </div>
    //                                   <div
    //                                     className={
    //                                       toggleState === 6 ? "show" : "hide"
    //                                     }
    //                                   >
    //                                     <div class="profile-card-inf__itemother">
    //                                       <div class="profile-card-inf__title">
    //                                         <h1>Feedbacks</h1>
    //                                       </div>
    //                                       <div class="profile-card-inf">
    //                                         <div class="profile-card-inf__item">
    //                                           <div class="profile-card-inf__title">
    //                                             {item.feedbacks}{" "}
    //                                             {item.feedbacks > 0 ? (
    //                                               <Tooltip title="View Feeback">
    //                                                 <EyeOutlined
    //                                                   onClick={showModal}
    //                                                 />
    //                                               </Tooltip>
    //                                             ) : (
    //                                               ""
    //                                             )}
    //                                           </div>
    //                                           <div class="profile-card-inf__txt">
    //                                             No of feedbacks
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                   </div>
    //                                 </div>
    //                               </>
    //                             )
    //                           : null}
    //                       </div>

    //                       <div class="profile-card-ctr">
    //                         <button
    //                           className={
    //                             show
    //                               ? showID === item.id &&
    //                                 "profile-card__button button--blue js-message-btn"
    //                               : "hide"
    //                           }
    //                           onClick={showModal}
    //                         >
    //                           <SendOutlined /> Proposal Request
    //                         </button>

    //                         <button
    //                           onClick={() => {
    //                             setShow(!show);
    //                             setShowID(item.id);
    //                             setAllowSwipe(show);
    //                             setRishtaGender(item.gender);
    //                           }}
    //                           class="profile-card__button button--orange"
    //                         >
    //                           {show ? (
    //                             showID === item.id && <EyeInvisibleOutlined />
    //                           ) : (
    //                             <EyeOutlined />
    //                           )}{" "}
    //                           {show
    //                             ? showID === item.id && "View Less To Swipe"
    //                             : view}
    //                         </button>
    //                       </div>
    //                     </div>

    //                     <div class="profile-card-message js-message">
    //                       <form class="profile-card-form">
    //                         <div class="profile-card-form__container">
    //                           <textarea placeholder="Say something..."></textarea>
    //                         </div>

    //                         <div class="profile-card-form__bottom">
    //                           <button class="profile-card__button button--blue js-message-close">
    //                             Send
    //                           </button>

    //                           <button class="profile-card__button button--gray js-message-close">
    //                             Cancel
    //                           </button>
    //                         </div>
    //                       </form>

    //                       <div class="profile-card__overlay js-message-close"></div>
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <svg hidden="hidden">
    //                   <defs>
    //                     <symbol id="icon-location" viewBox="0 0 32 32">
    //                       <title>location</title>
    //                       <path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"></path>
    //                       <path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"></path>
    //                     </symbol>
    //                   </defs>
    //                 </svg>
    //               </div>
    //             </>
    //           );
    //         })}
    //       </Carousel>
    //     </>
    //   )}
    // </>
  );
}

export default Card;

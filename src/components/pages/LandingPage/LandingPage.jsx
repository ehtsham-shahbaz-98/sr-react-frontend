import React, { useState } from "react";

import { Link } from "react-router-dom";

import { BackTop, Tooltip, Switch } from "antd";

import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

import "./LandingPage.css";

import landingWedding from "../../../assets/images/svgs/landing_wedding.svg";
import landingLove from "../../../assets/images/svgs/landing_love.svg";
import pleasentSurprise from "../../../assets/images/svgs/pleasent_surprise.svg";
import positiveAttitude from "../../../assets/images/svgs/positive_attitude.svg";
import spreadLove from "../../../assets/images/svgs/spread_love.svg";

const LandingPage = () => {
  return (
    <>
      <div className="landingContainer row">
        <Tooltip title="Back to Top">
          <BackTop
            style={{
              backgroundColor: "#434237",
              borderRadius: "50%",
            }}
          />
        </Tooltip>
        <div className="heroContainer row">
          <div className="leftImageContainer col m4 l6 hide-on-small-only">
            <img className="responsive-img" src={landingLove} />
          </div>
          <div className="rightContentContainer col s12 m8 l6">
            <div className="contentHeading">
              <h1>Shadi Registrar</h1>
            </div>
            <div className="contentPara">
              <p>
                ShadiRegistrar.com is a family to family interaction platform.
                It's better to involve family. Free sign up/Rishta Form. No
                Charges to view available Rishta Profiles.
              </p>
            </div>
            <div className="contentButton">
              <Link
                className="btn-link"
                to="/rishtas"
                style={{ color: "black" }}
              >
                Rishta Profiles
              </Link>
            </div>
          </div>
        </div>
        <div className="sectionContainer row">
          <div className="col s12 m12 l6 offset-l3">
            <div className="smallHeading">
              <h5>Featured</h5>
            </div>
            <div className="sectionHeading">
              <h1>
                This is the new <br />
                creative process
              </h1>
            </div>
          </div>
        </div>
        <div className="cardsSection row">
          <div className="col s12 m12 l4 cardBodyOne">
            <div className="cardText">
              <img
                className="responsive-img"
                src={pleasentSurprise}
                style={{ width: "100%", height: "200px", marginTop: "5%" }}
              />
              <br />
              <p>
                Learn about <br /> your creative
              </p>
            </div>
          </div>
          <div className="col s12 m12 l4 cardBodyTwo">
            <div className="cardText">
              <img
                className="responsive-img"
                src={positiveAttitude}
                style={{ width: "100%", height: "200px", marginTop: "5%" }}
              />
              <br />
              <p>
                Learn about <br /> your creative
              </p>
            </div>
          </div>
          <div className="col s12 m12 l4 cardBodyThree">
            <div className="cardText">
              <img
                className="responsive-img"
                src={spreadLove}
                style={{ width: "100%", height: "200px", marginTop: "5%" }}
              />
              <br />
              <p>
                Constantly advance <br /> your marketing
              </p>
            </div>
          </div>
        </div>

        <div className="sectionContainer row">
          <div className="col s12 m12 l6 offset-l3">
            <div className="smallHeading">
              <h5>Creative</h5>
            </div>
            <div className="sectionHeading">
              <h1>
                Know your ads inside <br />
                and out-perform.
              </h1>
            </div>
          </div>
        </div>

        <div className="statsContainer row">
          <div className="col s12 m6 l6">
            <div className="statsBody row">
              <div className="firstStat">
                <div className="statImage" style={{ float: "left" }}>
                  <img
                    className="responsive-img"
                    src={landingLove}
                    style={{ width: "100%", height: "50px" }}
                    alt=""
                  />
                </div>
                <p>the objective of the campaign</p>
              </div>
              <div className="secondStat">
                <div className="statImage" style={{ float: "left" }}>
                  <img
                    className="responsive-img"
                    src={positiveAttitude}
                    style={{ width: "100%", height: "50px" }}
                    alt=""
                  />
                </div>
                <p>how much to spend</p>
              </div>
              <div className="thirdStat">
                <div className="statImage" style={{ float: "left" }}>
                  <img
                    className="responsive-img"
                    src={pleasentSurprise}
                    style={{ width: "100%", height: "50px" }}
                    alt=""
                  />
                </div>
                <p>who to target</p>
              </div>
              <div className="fourthStat">
                <div className="statImage" style={{ float: "left" }}>
                  <img
                    className="responsive-img"
                    src={spreadLove}
                    style={{ width: "100%", height: "50px" }}
                    alt=""
                  />
                </div>
                <p>the type of advertising you'll use</p>
              </div>
            </div>
          </div>
          <div className="col m6 l6 statsContent hide-on-small-only">
            <div className="statHeading">
              <h2>
                Every second counts, <br />
                so every detail matters.
              </h2>
            </div>
            <div className="statPara">
              <p>
                ShadiRegistrar.com is a family to family interaction platform.
                It's better to involve family. Free sign up/Rishta Form. No
                Charges to view available Rishta Profiles.
              </p>
            </div>
            <div className="statButton">
              <button className="browser-default">Learn More</button>
            </div>
          </div>
        </div>

        <div className="sectionContainer row">
          <div className="col s12 m12 l6 offset-l3">
            <div className="smallHeading">
              <h5>Creative</h5>
            </div>
            <div className="sectionHeading">
              <h1>Why choose us?</h1>
            </div>
          </div>
        </div>

        <div className="reasonsContainer row">
          <div className="reasonsRow row">
            <div className="col s3 m2 l2">
              <div className="reasonsImg">
                <img
                  className="responsive-img"
                  src={landingLove}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col s9 m4 l4">
              <div className="reasonsHeading">
                <h6>Solving the problem</h6>
              </div>
              <div className="reasonsPara">
                <p>
                  ShadiRegistrar.com is a family to family interaction platform.
                  It's better to involve family.
                </p>
              </div>
            </div>
            <div className="col s3 m2 l2">
              <div className="reasonsImg">
                <img
                  className="responsive-img"
                  src={positiveAttitude}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col s9 m4 l4">
              <div className="reasonsHeading">
                <h6>Our Solution</h6>
              </div>
              <div className="reasonsPara">
                <p>
                  ShadiRegistrar.com is a family to family interaction platform.
                  It's better to involve family.
                </p>
              </div>
            </div>
          </div>
          <div className="reasonsRow row">
            <div className="col s3 m2 l2">
              <div className="reasonsImg">
                <img
                  className="responsive-img"
                  src={landingWedding}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col s9 m4 l4">
              <div className="reasonsHeading">
                <h6>Solving the problem</h6>
              </div>
              <div className="reasonsPara">
                <p>
                  ShadiRegistrar.com is a family to family interaction platform.
                  It's better to involve family.
                </p>
              </div>
            </div>
            <div className="col s3 m2 l2">
              <div className="reasonsImg">
                <img
                  className="responsive-img"
                  src={pleasentSurprise}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col s9 m4 l4">
              <div className="reasonsHeading">
                <h6>Our Solution</h6>
              </div>
              <div className="reasonsPara">
                <p>
                  ShadiRegistrar.com is a family to family interaction platform.
                  It's better to involve family.
                </p>
              </div>
            </div>
          </div>
          <div className="reasonsRow row">
            <div className="col s3 m2 l2">
              <div className="reasonsImg">
                <img
                  className="responsive-img"
                  src={landingLove}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col s9 m4 l4">
              <div className="reasonsHeading">
                <h6>Solving the problem</h6>
              </div>
              <div className="reasonsPara">
                <p>
                  ShadiRegistrar.com is a family to family interaction platform.
                  It's better to involve family.
                </p>
              </div>
            </div>
            <div className="col s3 m2 l2">
              <div className="reasonsImg">
                <img
                  className="responsive-img"
                  src={spreadLove}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col s9 m4 l4">
              <div className="reasonsHeading">
                <h6>Our Solution</h6>
              </div>
              <div className="reasonsPara">
                <p>
                  ShadiRegistrar.com is a family to family interaction platform.
                  It's better to involve family.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sectionContainer row">
          <div className="col s12 m12 l6 offset-l3">
            <div className="smallHeading">
              <h5>Creative</h5>
            </div>
            <div className="sectionHeading">
              <h1>Pricing Plans</h1>
            </div>
          </div>
        </div>

        <div className="pricingContainer row">
          <div className="col s12 m12 l4">
            <div className="firstPricing">
              <div className="priceHeading">
                <h3>
                  Rs 0<span>/month</span>
                </h3>
              </div>
              <div className="priceTitle">
                <h3>Easy</h3>
              </div>
              <div className="pricePara">
                <p>
                  All the basics for businesses
                  <br />
                  that are just getting started.
                </p>
              </div>
              <div className="priceLine">
                <hr className="line" />
              </div>
              <div className="pricePoints">
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> One
                    project
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> Your
                    dashboard
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CloseCircleFilled style={{ color: "#ff00ea" }} />{" "}
                    Components included
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CloseCircleFilled style={{ color: "#ff00ea" }} /> Advanced
                    charts
                  </h5>
                </div>
              </div>
              <div className="priceButton">
                <button>Get Easy</button>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l4">
            <div className="secondPricing">
              <div className="priceHeading">
                <h3>
                  Rs 2,999<span>/6 months</span>
                </h3>
              </div>
              <div className="priceTitle">
                <h3>Basic</h3>
              </div>
              <div className="pricePara">
                <p>
                  Better for growing businesses
                  <br />
                  that want more customers.
                </p>
              </div>
              <div className="priceLine">
                <hr className="line" />
              </div>
              <div className="pricePoints">
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> Two
                    project
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> Your
                    dashboard
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} />{" "}
                    Components included
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> Advanced
                    charts
                  </h5>
                </div>
              </div>
              <div className="priceButton">
                <button>Get Basic</button>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l4">
            <div className="thirdPricing">
              <div className="priceHeading">
                <h3>
                  Rs 4,999<span>/6 months</span>
                </h3>
              </div>
              <div className="priceTitle">
                <h3>Premium</h3>
              </div>
              <div className="pricePara">
                <p>
                  Advanced features for pros who
                  <br />
                  need more customization.
                </p>
              </div>
              <div className="priceLine">
                <hr className="line" />
              </div>
              <div className="pricePoints">
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> Unlimited
                    project
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> Your
                    dashboard
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> 300+
                    components
                  </h5>
                </div>
                <div className="point">
                  <h5>
                    <CheckCircleFilled style={{ color: "#4aaa5f" }} /> Chat
                    support
                  </h5>
                </div>
              </div>
              <div className="priceButton">
                <button>Get Premium</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

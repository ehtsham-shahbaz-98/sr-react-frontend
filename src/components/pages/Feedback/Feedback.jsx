import React, { useState } from "react";

import "./feedback.css";

import { Rate } from "antd";

const behaviorDesc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

const hostingDesc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

const familyValid = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
  {
    value: "Some What",
    label: "Some What",
  },
];

const familyRejection = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];

const RishtaIdData = [
  {
    value: "111",
    label: "111",
  },
  {
    value: "112",
    label: "112",
  },
  {
    value: "113",
    label: "113",
  },
  {
    value: "114",
    label: "114",
  },
  {
    value: "115",
    label: "115",
  },
];

const marriageProposalData = [
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
];

const rejectionData = [
  {
    label: "Behavior Difference",
    value: "Behavior Difference",
  },
  {
    label: "Financial Difference",
    value: "Financial Difference",
  },
  {
    label: "Cultural Difference",
    value: "Cultural Difference",
  },
  {
    label: "Education Difference",
    value: "Education Difference",
  },
  {
    label: "Language Difference",
    value: "Language Difference",
  },
  {
    label: "Sect Difference",
    value: "Sect Difference",
  },
  {
    label: "Caste Difference",
    value: "Caste Difference",
  },
  {
    label: "Age Difference",
    value: "Age Difference",
  },
  {
    label: "Cross City Issue",
    value: "Cross City Issue",
  },
  {
    label: "All Good",
    value: "All Good",
  },
  {
    label: "Others",
    value: "Others",
  },
];

const recommendProfileData = [
  {
    label: "Recommended",
    value: "Recommeded",
  },
  {
    label: "Not Recommended",
    value: "Not Recommended",
  },
];

const Feedback = () => {
  const [behaviorValue, setBehaviorValue] = useState(3);
  const [hostingValue, setHostingValue] = useState(3);
  const [visible, setVisible] = useState(true);

  const [validFamily, setValidFamily] = useState("");
  const [rejectFamily, setRejectFamily] = useState("");
  const [rishtaID, setRishtaID] = useState("");
  const [marriageStatus, setMarriageStatus] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [recommendProfile, setRecommendProfile] = useState("");

  const handleValidFamily = (event) => {
    setValidFamily(event.target.value);
  };

  const handleRejectFamily = (event) => {
    setRejectFamily(event.target.value);
  };

  const handleRishtaIdChange = (event) => {
    setRishtaID(event.target.value);
  };

  const handleMarriageStatus = (event) => {
    setMarriageStatus(event.target.value);
  };

  const handleRejectReason = (event) => {
    setRejectReason(event.target.value);
  };

  const handleRecommendChange = (event) => {
    setRecommendProfile(event.target.value);
  };

  const handleBehaviorChange = (value) => {
    setBehaviorValue(value);
  };

  const handleHostingChange = (value) => {
    setHostingValue(value);
  };

  return (
    <div className="feedBackContainer row">
      <div className="col l6 feedbackImageContainer hide-on-med-and-down">
        <div className="feedbackImageHeading">
          <h1>
            Shadi Registar
            <br /> Feedback Form
          </h1>
        </div>
      </div>
      <div className="col s12 m12 l6 feedbackForm">
        <div className="feedbackHeader">
          <div className="row">
            <div className="col s12 feedbackHeading">
              <h1>Feedback Form</h1>
            </div>
          </div>
          <div className="row">
            <div className="col s12 feedbackSubHeading">
              <h3>Give us your feedback!</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>How was the family behavior?</h5>
          </div>
          <div className="col s6 feedbackRatingStars">
            <span>
              <Rate
                tooltips={behaviorDesc}
                onChange={handleBehaviorChange}
                value={behaviorValue}
              />
              {behaviorValue ? (
                <span className="ant-rate-text" style={{ fontSize: "18px" }}>
                  {behaviorDesc[behaviorValue - 1]}
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
        {/* <div className="row">
          <div className="col s12 feedbackRatingStars">
            <span>
              <Rate
                tooltips={behaviorDesc}
                onChange={handleBehaviorChange}
                value={behaviorValue}
              />
              {behaviorValue ? (
                <span className="ant-rate-text" style={{ fontSize: "18px" }}>
                  {behaviorDesc[behaviorValue - 1]}
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div> */}
        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>How was the hosting?</h5>
          </div>
          <div className="col s6 feedbackRatingStars">
            <span>
              <Rate
                tooltips={hostingDesc}
                onChange={handleHostingChange}
                value={hostingValue}
              />
              {hostingValue ? (
                <span className="ant-rate-text" style={{ fontSize: "18px" }}>
                  {hostingDesc[hostingValue - 1]}
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
        {/* <div className="row">
          <div className="col s12 feedbackRatingStars">
            <span>
              <Rate
                tooltips={hostingDesc}
                onChange={handleHostingChange}
                value={hostingValue}
              />
              {hostingValue ? (
                <span className="ant-rate-text" style={{ fontSize: "18px" }}>
                  {hostingDesc[hostingValue - 1]}
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div> */}

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Review for ID?</h5>
          </div>
          <div className="col s6 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "100%" }}>
              <select
                class="browser-default"
                value={rishtaID}
                onChange={handleRishtaIdChange}
              >
                <option value="">Select ID</option>
                {RishtaIdData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Marriage proposal status?</h5>
          </div>
          <div className="col s6 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "100%" }}>
              <select
                class="browser-default"
                value={marriageStatus}
                onChange={handleMarriageStatus}
              >
                <option value="">Select Status</option>
                {marriageProposalData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>What went wrong?</h5>
          </div>
          <div className="col s6 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "100%" }}>
              <select
                class="browser-default"
                value={rejectReason}
                onChange={handleRejectReason}
              >
                <option value="">Select Reason</option>
                {rejectionData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Do you recommend this Rishta Profile?</h5>
          </div>
          <div className="col s6 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "100%" }}>
              <select
                class="browser-default"
                value={recommendProfile}
                onChange={handleRecommendChange}
              >
                <option value="">Select Recommend</option>
                {recommendProfileData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Was the family information valid?</h5>
          </div>
          <div className="col s6 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "100%" }}>
              <select
                class="browser-default"
                value={validFamily}
                onChange={handleValidFamily}
              >
                <option value="">Select Validity</option>
                {familyValid.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col s6 offset-s3 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "360px" }}>
              <select
                class="browser-default"
                value={validFamily}
                onChange={handleValidFamily}
              >
                <option value="">Select Validity</option>
                {familyValid.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Did family accept your proposal?</h5>
          </div>
          <div className="col s6 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "100%" }}>
              <select
                class="browser-default"
                value={rejectFamily}
                onChange={handleRejectFamily}
              >
                <option value="">Select Status</option>
                {familyRejection.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col s6 offset-s3 feedbackSelect">
            <div className="feedbackCustomSelect" style={{ width: "360px" }}>
              <select
                class="browser-default"
                value={rejectFamily}
                onChange={handleRejectFamily}
              >
                <option value="">Select Validity</option>
                {familyRejection.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col s12 feedbackRatingQuestion">
            <h5>Please elaborate your experience</h5>
          </div>
        </div> */}
        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Family experience description?</h5>
          </div>
          <div className="col s6 feedbackDescription">
            <textarea
              className="feedbackTextArea"
              placeholder="Describe your experience..."
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Candidate Rejection Reason?</h5>
          </div>
          <div className="col s6 feedbackDescription">
            <textarea
              className="feedbackTextArea"
              placeholder="Rejection reason of candidate..."
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col s6 feedbackRatingQuestion">
            <h5>Private Feedback?</h5>
          </div>
          <div className="col s6 feedbackDescription">
            <textarea
              className="feedbackTextArea"
              placeholder="Give private feedback..."
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col s12 feedbackButtonBody">
            <button className="feedbackButton">Send Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

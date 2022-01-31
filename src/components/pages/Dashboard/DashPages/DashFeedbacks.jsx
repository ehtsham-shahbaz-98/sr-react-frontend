import React from "react";

import { EditOutlined, EyeOutlined } from "@ant-design/icons";

import "./DashStyles/DashFeedbacks.css";

const DashFeedbacks = () => {
  return (
    <div className="dash-feedbacks-body">
      <div className="dash-feedbacks-heading">
        <h1>Feedbacks Provided</h1>
      </div>
      <div className="dash-feedbacks-header row">
        <div className="col s12 m12 l2">
          <div className="dash-rishta-avatar">
            <p>Rishta-ID</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-rishta-id">
            <p>Avatar</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-rishta-edit">
            <p>Reason</p>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-rishta-profile">
            <p>Family Feedback</p>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-rishta-details">
            <p>Candidate Feedback</p>
          </div>
        </div>
      </div>
      <div className="dash-feedbacks-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-feedbacks-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
      <div className="dash-feedbacks-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-feedbacks-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
      <div className="dash-feedbacks-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-feedbacks-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
      <div className="dash-feedbacks-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-feedbacks-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-feedbacks-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashFeedbacks;

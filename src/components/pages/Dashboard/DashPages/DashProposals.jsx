import React from "react";

import { EditOutlined, EyeOutlined } from "@ant-design/icons";

import "./DashStyles/DashProposals.css";

const DashProposals = () => {
  return (
    <div className="dash-proposals-body">
      <div className="dash-proposals-heading">
        <h1>Proposals</h1>
      </div>
      <div className="dash-proposals-header row">
        <div className="col s2 m2 l2">
          <div className="dash-rishta-avatar">
            <p>Rishta-ID</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-rishta-id">
            <p>Desired-ID</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-rishta-edit">
            <p>Proposal Status</p>
          </div>
        </div>

        <div className="col s2 m2 l2">
          <div className="dash-rishta-profile">
            <p>Review Status</p>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-rishta-details">
            <p>Edit Proposal Status</p>
          </div>
        </div>
      </div>
      <div className="dash-proposals-list-body row">
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-proposals-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
      <div className="dash-proposals-list-body row">
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-proposals-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
      <div className="dash-proposals-list-body row">
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-proposals-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
      <div className="dash-proposals-list-body row">
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s2 m2 l2">
          <div className="dash-proposals-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-proposals-list-details">
            <p>Proposal Status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProposals;

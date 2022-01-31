import React from "react";

import { EditOutlined, EyeOutlined } from "@ant-design/icons";

import "./DashStyles/DashViewers.css";

const DashViewers = () => {
  return (
    <div className="dash-viewers-body">
      <div className="dash-viewers-heading">
        <h1>My Viewers</h1>
      </div>
      <div className="dash-viewers-header row">
        <div className="col s12 m12 l2">
          <div className="dash-rishta-avatar">
            <p>Avatar</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-rishta-id">
            <p>ID</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-rishta-edit">
            <p>Edit</p>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-rishta-profile">
            <p>Profile</p>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-rishta-details">
            <p>Details</p>
          </div>
        </div>
      </div>
      <div className="dash-viewers-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-avatar">
            <img
              className="dash-viewers-image responsive-img"
              src="https://shadiregistrar.com/static/images/avatars/males/male_bearded_formal.png"
              alt=""
            />
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-viewers-list-details">
            <p>Details</p>
          </div>
        </div>
      </div>
      <div className="dash-viewers-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-avatar">
            <img
              className="dash-viewers-image responsive-img"
              src="https://shadiregistrar.com/static/images/avatars/males/male_bearded_formal.png"
              alt=""
            />
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-viewers-list-details">
            <p>Details</p>
          </div>
        </div>
      </div>
      <div className="dash-viewers-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-avatar">
            <img
              className="dash-viewers-image responsive-img"
              src="https://shadiregistrar.com/static/images/avatars/males/male_bearded_formal.png"
              alt=""
            />
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-viewers-list-details">
            <p>Details</p>
          </div>
        </div>
      </div>
      <div className="dash-viewers-list-body row">
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-avatar">
            <img
              className="dash-viewers-image responsive-img"
              src="https://shadiregistrar.com/static/images/avatars/males/male_bearded_formal.png"
              alt=""
            />
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l2">
          <div className="dash-viewers-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-viewers-list-details">
            <p>Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashViewers;

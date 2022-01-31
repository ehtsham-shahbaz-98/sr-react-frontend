import React from "react";

import { EditOutlined, EyeOutlined } from "@ant-design/icons";

import "./DashStyles/DashFavorites.css";

const DashFavorites = () => {
  return (
    <div className="dash-favorites-body">
      <div className="dash-favorites-heading">
        <h1>Favorites</h1>
      </div>
      <div className="dash-favorites-header row">
        <div className="col s12 m12 l3">
          <div className="dash-rishta-avatar">
            <p>Rishta-ID</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-rishta-id">
            <p>Avatar</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-rishta-edit">
            <p>Details</p>
          </div>
        </div>

        <div className="col s12 m12 l3">
          <div className="dash-rishta-profile">
            <p>Favorite</p>
          </div>
        </div>
      </div>
      <div className="dash-favorites-list-body row">
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
      </div>
      <div className="dash-favorites-list-body row">
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
      </div>
      <div className="dash-favorites-list-body row">
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
      </div>
      <div className="dash-favorites-list-body row">
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>398</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-id">
            <p>111</p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-edit">
            <button className="browser-default">
              <EditOutlined /> Edit
            </button>
          </div>
        </div>

        <div className="col s12 m12 l3">
          <div className="dash-favorites-list-profile">
            <button className="browser-default">
              <EyeOutlined /> View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashFavorites;

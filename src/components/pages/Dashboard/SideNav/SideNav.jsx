import React, { useState } from "react";

import "./SideNav.css";

import {
  EyeOutlined,
  HomeOutlined,
  FileTextOutlined,
  BarChartOutlined,
  ArrowUpOutlined,
  StarOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import { SideNavData } from "./SideNavData";

// import { menuIcon } from "../../../../assets/images/svgs/menu_icon.svg";

const SideNav = () => {
  const [toggleState, setToggleState] = useState(1);

  // const [activeLink, setActiveLink] = useState(0);

  // const handleActiveLink = (key) => {
  //   if (key ) {
  //     setActiveLink(1);
  //   }
  // };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="side-nav-body">
        <ul className="side-nav-list">
          {/* {SideNavData.map((val, key) => {
      return (
        <li key={key} className="side-nav-row">
          <div id="icon">{val.icon}</div>
          <div id="title" className="hide-on-med-and-down">
            {val.title}
          </div>
        </li>
      );
    })} */}

          <li
            className="side-nav-row"
            onClick={() => {
              toggleTab(1);
            }}
          >
            <div id="icon">
              <HomeOutlined />
            </div>
            <div id="title" className="hide-on-med-and-down">
              Home
            </div>
          </li>

          <li
            className="side-nav-row"
            onClick={() => {
              toggleTab(2);
            }}
          >
            <div id="icon">
              <FileTextOutlined />
            </div>
            <div id="title" className="hide-on-med-and-down">
              Rishtas
            </div>
          </li>

          <li
            className="side-nav-row"
            onClick={() => {
              toggleTab(3);
            }}
          >
            <div id="icon">
              <BarChartOutlined />
            </div>
            <div id="title" className="hide-on-med-and-down">
              Proposals
            </div>
          </li>

          <li
            className="side-nav-row"
            onClick={() => {
              toggleTab(4);
            }}
          >
            <div id="icon">
              <ArrowUpOutlined />
            </div>
            <div id="title" className="hide-on-med-and-down">
              Reviews
            </div>
          </li>

          <li
            className="side-nav-row"
            onClick={() => {
              toggleTab(5);
            }}
          >
            <div id="icon">
              <StarOutlined />
            </div>
            <div id="title" className="hide-on-med-and-down">
              Feedbacks
            </div>
          </li>

          <li
            className="side-nav-row"
            onClick={() => {
              toggleTab(6);
            }}
          >
            <div id="icon">
              <HeartOutlined />
            </div>
            <div id="title" className="hide-on-med-and-down">
              Favourites
            </div>
          </li>

          <li
            className="side-nav-row"
            onClick={() => {
              toggleTab(7);
            }}
          >
            <div id="icon">
              <EyeOutlined />
            </div>
            <div id="title" className="hide-on-med-and-down">
              Viewers
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;

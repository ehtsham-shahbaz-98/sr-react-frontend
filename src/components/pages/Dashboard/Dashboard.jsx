import React, { useState } from "react";

import "./SideNav/SideNav.css";

import "./Dashboard.css";

import {
  EyeOutlined,
  HomeOutlined,
  FileTextOutlined,
  BarChartOutlined,
  ArrowUpOutlined,
  StarOutlined,
  HeartOutlined,
} from "@ant-design/icons";

// import SideNav from "./SideNav/SideNav";
import Home from "./Home/Home";
import DashRishtas from "./DashPages/DashRishtas";
import DashProposals from "./DashPages/DashProposals";
import DashReviews from "./DashPages/DashReviews";
import DashFeedbacks from "./DashPages/DashFeedbacks";
import DashFavorites from "./DashPages/DashFavorites";
import DashViewers from "./DashPages/DashViewers";
import DashStats from "./DashStats/DashStats";

const Dashboard = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="dashboard-body row hide-on-med-and-down">
        <div className="col s1 m2 l2" style={{ margin: "0", padding: "0" }}>
          <div
            style={{
              // position: "fixed",
              // width: "100%",
              height: "auto",
            }}
          >
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
                  style={
                    toggleState === 1
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 2
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 3
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 4
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 5
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 6
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 7
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
            {/* <SideNav /> */}
          </div>
        </div>
        <div
          // className="col s11 m10 l10"
          className={toggleState === 1 ? "col s7 m7 l7" : "col s11 m10 l10"}
          style={{ margin: "0", padding: "0" }}
        >
          <div className={toggleState === 1 ? "" : "hide"}>
            <Home />
          </div>
          <div className={toggleState === 2 ? "" : "hide"}>
            <DashRishtas />
          </div>
          <div className={toggleState === 3 ? "" : "hide"}>
            <DashProposals />
          </div>
          <div className={toggleState === 4 ? "" : "hide"}>
            <DashReviews />
          </div>
          <div className={toggleState === 5 ? "" : "hide"}>
            <DashFeedbacks />
          </div>
          <div className={toggleState === 6 ? "" : "hide"}>
            <DashFavorites />
          </div>
          <div className={toggleState === 7 ? "" : "hide"}>
            <DashViewers />
          </div>
        </div>
        <div
          // className="hide"
          className={
            toggleState === 1 ? "col s4 m3 l3 hide-on-small-only" : "hide"
          }
          style={{ margin: "0", padding: "0" }}
        >
          <DashStats />
        </div>
      </div>
      <div className="dashboard-body row hide-on-large-only">
        <div className="col s2 m2 l2" style={{ margin: "0", padding: "0" }}>
          <div
            style={{
              height: "auto",
            }}
          >
            <div className="side-nav-body">
              <ul className="side-nav-list">
                <li
                  style={
                    toggleState === 1
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 2
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 3
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 4
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 5
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 6
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
                  style={
                    toggleState === 7
                      ? {
                          background: "#eee",
                        }
                      : {}
                  }
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
          </div>
        </div>
        <div
          // className="col s11 m10 l10"
          className="col s10 m10 l10"
          style={{ margin: "0", padding: "0" }}
        >
          <div className={toggleState === 1 ? "" : "hide"}>
            <Home />
          </div>
          <div className={toggleState === 2 ? "" : "hide"}>
            <DashRishtas />
          </div>
          <div className={toggleState === 3 ? "" : "hide"}>
            <DashProposals />
          </div>
          <div className={toggleState === 4 ? "" : "hide"}>
            <DashReviews />
          </div>
          <div className={toggleState === 5 ? "" : "hide"}>
            <DashFeedbacks />
          </div>
          <div className={toggleState === 6 ? "" : "hide"}>
            <DashFavorites />
          </div>
          <div className={toggleState === 7 ? "" : "hide"}>
            <DashViewers />
          </div>
        </div>
        {/* <div
          
          className={
            toggleState === 1 ? "col s4 m3 l3 hide-on-small-only" : "hide"
          }
          style={{ margin: "0", padding: "0" }}
        >
          <DashStats />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;

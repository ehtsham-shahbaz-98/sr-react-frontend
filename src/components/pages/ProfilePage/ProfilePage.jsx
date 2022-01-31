import React, { useState } from "react";

import "./ProfilePage.css";

import {
  Avatar,
  Progress,
  Collapse,
  Image,
  Divider,
  Modal,
  Button,
  Descriptions,
  Badge,
  Typography,
  Tabs,
  Tooltip,
} from "antd";
import {
  HighlightOutlined,
  AntDesignOutlined,
  CaretRightOutlined,
  MailOutlined,
  UserOutlined,
  ArrowRightOutlined,
  EyeInvisibleOutlined,
  DownOutlined,
  EditOutlined,
  GlobalOutlined,
  FileTextOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const { Paragraph } = Typography;

const FinalProfile = () => {
  const [activateFirstEdit, setActivateFirstEdit] = useState(false);
  const [activateSecondEdit, setActivateSecondEdit] = useState(false);
  const [activateThirdEdit, setActivateThirdEdit] = useState(false);

  const [visible, setVisible] = useState(false);
  const [firstActiveTab, setFirstActiveTab] = useState(true);
  const [secondActiveTab, setSecondActiveTab] = useState(false);
  const [thirdActiveTab, setThirdActiveTab] = useState(false);
  const [fourthActiveTab, setFourthActiveTab] = useState(false);
  const [fifthActiveTab, setFifthActiveTab] = useState(false);
  const [sixthActiveTab, setSixthActiveTab] = useState(false);

  const FirstTabActive = () => {
    setFirstActiveTab(true);
    setSecondActiveTab(false);
    setThirdActiveTab(false);
    setFourthActiveTab(false);
    setFifthActiveTab(false);
    setSixthActiveTab(false);
  };

  const SecondTabActive = () => {
    setFirstActiveTab(false);
    setSecondActiveTab(true);
    setThirdActiveTab(false);
    setFourthActiveTab(false);
    setFifthActiveTab(false);
    setSixthActiveTab(false);
  };

  const ThirdTabActive = () => {
    setFirstActiveTab(false);
    setSecondActiveTab(false);
    setThirdActiveTab(true);
    setFourthActiveTab(false);
    setFifthActiveTab(false);
    setSixthActiveTab(false);
  };

  const FourthTabActive = () => {
    setFirstActiveTab(false);
    setSecondActiveTab(false);
    setThirdActiveTab(false);
    setFourthActiveTab(true);
    setFifthActiveTab(false);
    setSixthActiveTab(false);
  };

  const FifthTabActive = () => {
    setFirstActiveTab(false);
    setSecondActiveTab(false);
    setThirdActiveTab(false);
    setFourthActiveTab(false);
    setFifthActiveTab(true);
    setSixthActiveTab(false);
  };

  const SixthTabActive = () => {
    setFirstActiveTab(false);
    setSecondActiveTab(false);
    setThirdActiveTab(false);
    setFourthActiveTab(false);
    setFifthActiveTab(false);
    setSixthActiveTab(true);
  };

  return (
    <>
      <div className="MainContainer">
        <div className="row">
          <div className="col s12 m12 l7 LeftContainer">
            <div className="row">
              <div className="col s12 ProfileHeader">
                <div className="row">
                  <div className="col s12 CoverPhotoBody">
                    {activateFirstEdit === false ? (
                      <Image
                        preview={true}
                        className="profileUserImg"
                        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col s8 m9 l9 ProfileInfoBody">
                    <div className="profileName">
                      <h1>
                        <span>
                          {activateFirstEdit === false ? (
                            "Mary Jane"
                          ) : (
                            <EditText
                              style={{ textAlign: "center" }}
                              placeholder="Click to Edit"
                              inline
                            />
                          )}
                        </span>
                      </h1>
                    </div>
                    <div className="profileSub">
                      <h5>
                        <span>
                          {activateFirstEdit === false ? (
                            "Manager at Google"
                          ) : (
                            <EditText
                              style={{ textAlign: "center" }}
                              placeholder="Edit Profession"
                              inline
                            />
                          )}
                        </span>
                      </h5>
                    </div>
                    <div className="profileLocation">
                      <p>
                        <span>
                          San Francisco, CA USA
                          {/* <EditText
                            style={{ textAlign: "center" }}
                            defaultValue="San Francisco, CA USA"
                          /> */}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col s4 m3 l3 buttonBody">
                    <div className="editProfile">
                      <button
                        className={
                          activateFirstEdit === true ? "hide" : "btn editButton"
                        }
                        onClick={() => {
                          setActivateFirstEdit(true);
                        }}
                      >
                        <EditOutlined
                          style={{ fontSize: "20px", color: "green" }}
                        />
                      </button>
                      <button
                        className={
                          activateFirstEdit === true ? "btn editButton" : "hide"
                        }
                        onClick={() => {
                          setActivateFirstEdit(false);
                        }}
                      >
                        <CloseCircleOutlined
                          style={{ fontSize: "20px", color: "red" }}
                        />
                      </button>
                    </div>
                    <div
                      className="smallProgress"
                      style={{
                        marginTop: "30px",
                        textAlign: "left",
                      }}
                    >
                      <Progress
                        percent={75}
                        steps={4}
                        // size="small"
                        strokeColor="#52c41a"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 ProfileTabs">
                <div className="row hide-on-med-and-down">
                  <div
                    className="col s2 tabIndex"
                    style={
                      firstActiveTab
                        ? {
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                          }
                        : {}
                    }
                    onClick={FirstTabActive}
                  >
                    <h5
                      style={
                        firstActiveTab
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
                      secondActiveTab
                        ? {
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                          }
                        : {}
                    }
                    onClick={SecondTabActive}
                  >
                    <h5
                      style={
                        secondActiveTab
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
                      thirdActiveTab
                        ? {
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                          }
                        : {}
                    }
                    onClick={ThirdTabActive}
                  >
                    <h5
                      style={
                        thirdActiveTab
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
                      fourthActiveTab
                        ? {
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                          }
                        : {}
                    }
                    onClick={FourthTabActive}
                  >
                    <h5
                      style={
                        fourthActiveTab
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
                      fifthActiveTab
                        ? {
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                          }
                        : {}
                    }
                    onClick={FifthTabActive}
                  >
                    <h5
                      style={
                        fifthActiveTab
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
                      sixthActiveTab
                        ? {
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                          }
                        : {}
                    }
                    onClick={SixthTabActive}
                  >
                    <h5
                      style={
                        sixthActiveTab
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
                <div className="row hide-on-large-only">
                  <div className="row ProfileTabs">
                    <div
                      className="col s4 tabIndex"
                      style={
                        firstActiveTab
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "5px",
                              boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                            }
                          : {}
                      }
                      onClick={FirstTabActive}
                    >
                      <h5
                        style={
                          firstActiveTab
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
                      className="col s4 tabIndex"
                      style={
                        secondActiveTab
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "5px",
                              boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                            }
                          : {}
                      }
                      onClick={SecondTabActive}
                    >
                      <h5
                        style={
                          secondActiveTab
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
                      className="col s4 tabIndex"
                      style={
                        thirdActiveTab
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "5px",
                              boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                            }
                          : {}
                      }
                      onClick={ThirdTabActive}
                    >
                      <h5
                        style={
                          thirdActiveTab
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
                  </div>
                  <div className="row ProfileTabs">
                    <div
                      className="col s4 tabIndex"
                      style={
                        fourthActiveTab
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "5px",
                              boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                            }
                          : {}
                      }
                      onClick={FourthTabActive}
                    >
                      <h5
                        style={
                          fourthActiveTab
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
                      className="col s4 tabIndex"
                      style={
                        fifthActiveTab
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "5px",
                              boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                            }
                          : {}
                      }
                      onClick={FifthTabActive}
                    >
                      <h5
                        style={
                          fifthActiveTab
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
                      className="col s4 tabIndex"
                      style={
                        sixthActiveTab
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "5px",
                              boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)",
                            }
                          : {}
                      }
                      onClick={SixthTabActive}
                    >
                      <h5
                        style={
                          sixthActiveTab
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
            </div>
            <div className="row">
              <div className="col s12 TabsInformation">
                <div className="row">
                  <div className="col s10 tabSection">
                    {firstActiveTab ? <h1>Personal Details</h1> : ""}
                    {secondActiveTab ? <h1>Religion Details</h1> : ""}
                    {thirdActiveTab ? <h1>Job Details</h1> : ""}
                    {fourthActiveTab ? <h1>Family Details</h1> : ""}
                    {fifthActiveTab ? <h1>Requirements</h1> : ""}
                    {sixthActiveTab ? <h1>Feedback</h1> : ""}
                  </div>
                  <div className="col s2 tabEdit">
                    <div className="">
                      <button
                        className={
                          activateSecondEdit === true
                            ? "hide"
                            : "btn editButton"
                        }
                        onClick={() => {
                          setActivateSecondEdit(true);
                        }}
                      >
                        <EditOutlined
                          style={{ fontSize: "20px", color: "green" }}
                        />
                      </button>
                      <button
                        className={
                          activateSecondEdit === true
                            ? "btn editButton"
                            : "hide"
                        }
                        onClick={() => {
                          setActivateSecondEdit(false);
                        }}
                      >
                        <CloseCircleOutlined
                          style={{ fontSize: "20px", color: "red" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 tabInfo">
                    <p>
                      {activateSecondEdit === false ? (
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, reiciendis repudiandae numquam assumenda expedit consequuntur animi laudantium magni minima corrupti officiis voluptatibus modi a? Ipsam unde provident placeat officia quisquam."
                      ) : (
                        <EditTextarea
                          style={{
                            textAlign: "center",
                            resize: "none",
                            height: "150px",
                          }}
                          placeholder="Click to edit"
                          inline
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 AboutMe">
                <div className="row">
                  <div className="col s10 aboutHeading">
                    <h1>About Me</h1>
                  </div>
                  <div className="col s2 aboutEdit">
                    <button className="btn editButton">
                      <EditOutlined
                        style={{ fontSize: "20px", color: "green" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 ExtraInfo hide-on-large-only">
                <div className="row">
                  <div className="col s12 progressInfo">
                    <h1>My Manager</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 ManagerDetails">
                    <div className="row">
                      <div className="col s2">
                        <img
                          className="managerImage"
                          src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                        />
                      </div>
                      <div className="col s10">
                        {" "}
                        <div className="addHead">Elon Musk</div>
                        <div className="addInfo">
                          Chief Executive Officer of Tesla
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s2">
                        <img
                          className="managerImage"
                          src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
                        />
                      </div>
                      <div className="col s10">
                        {" "}
                        <div className="addHead">Jeff Bezos</div>
                        <div className="addInfo">
                          Chief Executive Officer of Amazon
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s2">
                        <img
                          style={{ border: "4px solid #3aa05c" }}
                          className="managerImage"
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                      </div>
                      <div className="col s10">
                        {" "}
                        <div className="addHead">Mary Jane</div>
                        <div className="addInfo">Manager at Google</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col s12">
                    <h5>Complete</h5>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col s12 AdditionalDetails hide-on-large-only">
                <div className="row">
                  <div className="col s9 additionalHeading">
                    <h1>Additional Information</h1>
                  </div>
                  <div className="col s3 additionalEdit">
                    <div className="">
                      <button
                        className={
                          activateThirdEdit === true ? "hide" : "btn editButton"
                        }
                        onClick={() => {
                          setActivateThirdEdit(true);
                        }}
                      >
                        <EditOutlined
                          style={{ fontSize: "20px", color: "green" }}
                        />
                      </button>
                      <button
                        className={
                          activateThirdEdit === true ? "btn editButton" : "hide"
                        }
                        onClick={() => {
                          setActivateThirdEdit(false);
                        }}
                      >
                        <CloseCircleOutlined
                          style={{ fontSize: "20px", color: "red" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="addBody">
                  <div className="row">
                    <div className="col s1">
                      <MailOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Email</div>
                      <div className="addInfo">
                        {activateThirdEdit === false ? (
                          "elon.musk@gmail.com"
                        ) : (
                          <EditText placeholder="Edit Email" inline />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <GlobalOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Languages</div>
                      <div className="addInfo">
                        {" "}
                        {activateThirdEdit === false ? (
                          "English, Spanish"
                        ) : (
                          <EditText placeholder="Edit Languages" inline />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <UserOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Nick Name</div>
                      <div className="addInfo">
                        {" "}
                        {activateThirdEdit === false ? (
                          "Elon"
                        ) : (
                          <EditText placeholder="Edit Nick Name" inline />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <FileTextOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Education</div>
                      <div className="addInfo">
                        {" "}
                        {activateThirdEdit === false ? (
                          "Stanford University"
                        ) : (
                          <EditText placeholder="Edit Education" inline />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l4 offset-l1 RightContainer hide-on-med-and-down">
            <div className="row">
              <div className="col s12 ExtraInfo">
                <div className="row">
                  <div className="col s12 progressInfo">
                    <h1>My Manager</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 ManagerDetails">
                    <div className="row">
                      <div className="col s2">
                        <img
                          className="managerImage"
                          src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                        />
                      </div>
                      <div className="col s10">
                        {" "}
                        <div className="addHead">Elon Musk</div>
                        <div className="addInfo">
                          Chief Executive Officer of Tesla
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s2">
                        <img
                          className="managerImage"
                          src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
                        />
                      </div>
                      <div className="col s10">
                        {" "}
                        <div className="addHead">Jeff Bezos</div>
                        <div className="addInfo">
                          Chief Executive Officer of Amazon
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s2">
                        <img
                          style={{ border: "4px solid #3aa05c" }}
                          className="managerImage"
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                      </div>
                      <div className="col s10">
                        {" "}
                        <div className="addHead">Mary Jane</div>
                        <div className="addInfo">Manager at Google</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col s12">
                    <h5>Complete</h5>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col s12 AdditionalDetails">
                <div className="row">
                  <div className="col s9 additionalHeading">
                    <h1>Additional Information</h1>
                  </div>
                  <div className="col s3 additionalEdit">
                    <div className="">
                      <button
                        className={
                          activateThirdEdit === true ? "hide" : "btn editButton"
                        }
                        onClick={() => {
                          setActivateThirdEdit(true);
                        }}
                      >
                        <EditOutlined
                          style={{ fontSize: "20px", color: "green" }}
                        />
                      </button>
                      <button
                        className={
                          activateThirdEdit === true ? "btn editButton" : "hide"
                        }
                        onClick={() => {
                          setActivateThirdEdit(false);
                        }}
                      >
                        <CloseCircleOutlined
                          style={{ fontSize: "20px", color: "red" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="addBody">
                  <div className="row">
                    <div className="col s1">
                      <MailOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Email</div>
                      <div className="addInfo">
                        {activateThirdEdit === false ? (
                          "elon.musk@gmail.com"
                        ) : (
                          <EditText placeholder="Edit Email" inline />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <GlobalOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Languages</div>
                      <div className="addInfo">
                        {" "}
                        {activateThirdEdit === false ? (
                          "English, Spanish"
                        ) : (
                          <EditText placeholder="Edit Languages" inline />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <UserOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Nick Name</div>
                      <div className="addInfo">
                        {" "}
                        {activateThirdEdit === false ? (
                          "Elon"
                        ) : (
                          <EditText placeholder="Edit Nick Name" inline />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <FileTextOutlined
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                    <div className="col s11">
                      <div className="addHead">Education</div>
                      <div className="addInfo">
                        {" "}
                        {activateThirdEdit === false ? (
                          "Stanford University"
                        ) : (
                          <EditText placeholder="Edit Education" inline />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalProfile;

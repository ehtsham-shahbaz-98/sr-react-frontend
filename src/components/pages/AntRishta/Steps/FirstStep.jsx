import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";

import "../ant.css";

// import PictureUpload from "../PictureUpload";

const antGenderData = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

var stepLength = 7;

const FirstStep = ({ current, next }) => {
  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    imgWindow.document.write(image.outerHTML);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    next();
    console.log(data);
  };

  const [antGender, setAntGender] = useState("");

  const handleGenderChange = (event) => {
    console.log(event.target.value);
    setAntGender(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3
              class="heading"
              // contenteditable="true"
              style={{ color: "black" }}
            >
              Select Gender
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col s12">
              <div className="rishta-form-input">
                <select
                  name="gender"
                  class="browser-default"
                  {...register("gender", { required: true })}
                  value={antGender}
                  onChange={(val) => handleGenderChange(val)}
                >
                  <option value="">Select Gender</option>
                  {antGenderData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.gender && (
                <span style={{ color: "darkblue" }}>
                  Select Atleast One Option
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div className="col s12">
              <p style={{ fontSize: "18px", color: "black" }}>
                Upload Images (Max 5)
              </p>
            </div>
          </div>
          <div class="row">
            <div className="col s12">
              {/* <PictureUpload /> */}
              <ImgCrop
                rotate={false}
                grid={true}
                zoom={true}
                minZoom={1}
                shape={"round"}
              >
                <Upload
                  name="rishtaPictures"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  {...(fileList.length < 1 && {
                    ...register("rishtaPictures", { required: true }),
                  })}
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  beforeUpload={beforeUpload}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </ImgCrop>
              {errors.rishtaPictures && (
                <span style={{ color: "darkblue" }}>
                  Upload Atleast One Picture
                </span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              {current < 1 && (
                <button
                  type="submit"
                  className="btn black text-center"
                  style={{
                    width: "70%",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FirstStep;

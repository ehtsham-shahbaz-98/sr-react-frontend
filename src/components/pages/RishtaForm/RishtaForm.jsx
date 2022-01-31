import React from "react";

import { Steps, Button, Popover, message } from "antd";

import LandingPage from "../LandingPage/LandingPage";

import "./RishtaForm.css";

const { Step } = Steps;

const RishtaForm = () => {
  return (
    <div className="rishta-form-body">
      <div className="row">
        <div className="col s12">
          <Steps>
            <Step title="First Step" description={<LandingPage />} />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default RishtaForm;

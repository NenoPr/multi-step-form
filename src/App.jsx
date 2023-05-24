import { useState, useEffect } from "react";
import PI_Form from "../components/PI_Form";
import Plan_Form from "../components/Plan_Form";
import AD_Form from "../components/AD_Form";
import SUM_Form from "../components/SUM_Form";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    plan: {
      plan: "arcade",
      yearlySubscription: false,
    },
    planPrice: {
      monthly: {
        arcade: 9,
        advanced: 12,
        pro: 15,
      },
      yearly: {
        arcade: 90,
        advanced: 120,
        pro: 150,
      },
    },
    addons: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
    addonsPrice: {
      onlineService: 1,
      largerStorage: 2,
      customizableProfile: 2,
    },
    showComponent: "PI_Form",
  });

  const handleComponents = () => {
    if (form.showComponent === "PI_Form")
      return <PI_Form props={{ form, setForm }}></PI_Form>;
    if (form.showComponent === "Plan_Form")
      return <Plan_Form props={{ form, setForm }}></Plan_Form>;
    if (form.showComponent === "AD_Form")
      return <AD_Form props={{ form, setForm }}></AD_Form>;
    if (form.showComponent === "SUM_Form")
      return <SUM_Form props={{ form, setForm }}></SUM_Form>;
  };

  return (
    <>
      <div className="main-container">
        <div className="sidebar-container">
          <div className="sidebar-step-1 sidebar">
            <div className="sidebar-counter sidebar-counter-1">
              <div>1</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 1</div>
              <div className="sidebar-step-desc">YOUR INFO</div>
            </div>
          </div>
          <div className="sidebar-step-2 sidebar">
            <div className="sidebar-counter sidebar-counter-2">
              <div>2</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 2</div>
              <div className="sidebar-step-desc">SELECT PLAN</div>
            </div>
          </div>
          <div className="sidebar-step-3 sidebar">
            <div className="sidebar-counter sidebar-counter-3">
              <div>3</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 3</div>
              <div className="sidebar-step-desc">ADD-ONS</div>
            </div>
          </div>
          <div className="sidebar-step-4 sidebar">
            <div className="sidebar-counter sidebar-counter-4">
              <div>4</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 4</div>
              <div className="sidebar-step-desc">SUMMARY</div>
            </div>
          </div>
        </div>

        <div className="form-container" id="form-component">
          {handleComponents()}
        </div>
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/NenoPr">Neno</a>.
      </div>
    </>
  );
}

export default App;

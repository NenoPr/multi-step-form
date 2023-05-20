import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PI_Form from "../components/PI_Form";
import Plan_Form from "../components/Plan_Form";
import AD_Form from "../components/AD_Form";
import SUM_Form from "../components/SUM_Form";
import "./App.css";

function App() {
  const [form, setForm] = useState([]);

  return (
    <>
      <div className="main-container">
        <div className="sidebar-container">
          <div className="sidebar-step-1 sidebar">
            <div className="sidebar-counter">
              <div>1</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 1</div>
              <div className="sidebar-step-desc">YOUR INFO</div>
            </div>
          </div>
          <div className="sidebar-step-2 sidebar">
            <div className="sidebar-counter">
              <div>2</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 2</div>
              <div className="sidebar-step-desc">SELECT PLAN</div>
            </div>
          </div>
          <div className="sidebar-step-3 sidebar">
            <div className="sidebar-counter">
              <div>3</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 3</div>
              <div className="sidebar-step-desc">ADD-ONS</div>
            </div>
          </div>
          <div className="sidebar-step-4 sidebar">
            <div className="sidebar-counter">
              <div>4</div>
            </div>
            <div className="sidebar-info">
              <div className="sidebar-step-text">STEP 4</div>
              <div className="sidebar-step-desc">SUMMARY</div>
            </div>
          </div>
        </div>

        <div className="step-container step-1-pi-container">
          {/* <PI_Form props={setForm}></PI_Form> */}
          {/* <Plan_Form></Plan_Form> */}
          {/* <AD_Form></AD_Form> */}
          <SUM_Form></SUM_Form>
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

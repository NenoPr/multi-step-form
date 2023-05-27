import { useState, useEffect } from "react";
import "/src/assets/stylesheets/stylesheet-plan.css";

function Plan_Form(data) {
  const [formData, setFormData] = useState(data.props.form.plan);
  const [activeSubscription, setActiveSubscription] = useState(
    data.props.form.plan.yearlySubscription
  );
  const [planPrice, setPlanPrice] = useState({
    arcade: "$9/mo",
    advanced: "$12/mo",
    pro: "$15/mo",
  });

  useEffect(() => {
    document.querySelectorAll(".sidebar-counter").forEach((item) => {
      item.classList.remove("sidebar-counter-active");
      if (item.classList.contains("sidebar-counter-2")) {
        item.classList.add("sidebar-counter-active");
      }
    });
  }, []);

  useEffect(() => {
    handleSliderCss();
    console.log(planPrice);
    if (activeSubscription) {
      setPlanPrice({
        arcade: "$90/yo",
        advanced: "$120/yo",
        pro: "$150/yo",
      });
    } else {
      setPlanPrice({
        arcade: "$9/mo",
        advanced: "$12/mo",
        pro: "$15/mo",
      });
    }
    document.querySelectorAll(".plan-selection").forEach((elem) => {
      if (elem.getAttribute("plan") === formData.plan) {
        elem.classList.add("plan-selection-selected");
      }
    });
  }, [activeSubscription]);

  const handleSliderCss = (event) => {
    const yearly = document.querySelector(".plan-yearly");
    const monthly = document.querySelector(".plan-monthly");
    if (activeSubscription) {
      monthly.classList.remove("plan-rate-selected");
      yearly.classList.add("plan-rate-selected");
    } else {
      yearly.classList.remove("plan-rate-selected");
      monthly.classList.add("plan-rate-selected");
    }
  };

  const handleChange = (event) => {
    document.querySelectorAll(".plan-selection").forEach((elem) => {
      elem.classList.remove("plan-selection-selected");
    });
    event.target.classList.add("plan-selection-selected");
    const plan = event.target.getAttribute("plan");
    setFormData((prevFormData) => ({ ...prevFormData, ["plan"]: plan }));
  };

  const handleSubscription = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      yearlySubscription: !activeSubscription,
    }));
    setActiveSubscription(!activeSubscription);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(
    //   `Plan: ${formData.plan}, Yearly Subscription: ${formData.yearlySubscription}`
    // );
    if (formData.plan === "") {
      document.querySelector(".plan-selection-error").innerText =
        "Please select a plan.";
      return;
    }
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      ["plan"]: {
        plan: formData.plan,
        yearlySubscription: formData.yearlySubscription,
      },
      showComponent: "AD_Form",
    }));
  };

  const goBack = () => {
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      showComponent: "PI_Form",
    }));
  };

  return (
    <>
      <div className="component-container">
        <div className="form-header-container">
          <div className="form-header">Select your plan</div>
          <div className="form-desc">
            You have the option of monthly or yearly billing.
          </div>
        </div>
        <div className="plan-container">
          <div className="selection-container">
            <div
              className="plan-selection"
              onClick={handleChange}
              plan="arcade"
            >
              <img
                src="./src/assets/images/icon-arcade.svg"
                alt="arcade"
                className="plan-image"
              />
              <div className="plan-desc">
                <div className="plan-name">Arcade</div>
                <div className="plan-price">{planPrice.arcade}</div>
                {formData.yearlySubscription ? (
                  <div className="plan-yearly-free">2 months free</div>
                ) : (
                  <div className="plan-yearly-free plan-yearly-invisible">
                    2 months free
                  </div>
                )}
              </div>
            </div>
            <div
              className="plan-selection"
              onClick={handleChange}
              plan="advanced"
            >
              <img
                src="./src/assets/images/icon-advanced.svg"
                alt="advanced"
                className="plan-image"
              />
              <div className="plan-desc">
                <div className="plan-name">Advanced</div>
                <div className="plan-price">{planPrice.advanced}</div>
                {formData.yearlySubscription ? (
                  <div className="plan-yearly-free">2 months free</div>
                ) : (
                  <div className="plan-yearly-free plan-yearly-invisible">
                    2 months free
                  </div>
                )}
              </div>
            </div>
            <div className="plan-selection" onClick={handleChange} plan="pro">
              <img
                src="./src/assets/images/icon-pro.svg"
                alt="pro"
                className="plan-image"
              />
              <div className="plan-desc">
                <div className="plan-name">Pro</div>
                <div className="plan-price">{planPrice.pro}</div>
                {formData.yearlySubscription ? (
                  <div className="plan-yearly-free">2 months free</div>
                ) : (
                  <div className="plan-yearly-free plan-yearly-invisible">
                    2 months free
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="plan-rate">
            <div className="plan-rate-text plan-monthly">Monthly</div>
            <label className="switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onChange={handleSubscription}
                checked={activeSubscription}
              />
              <div className="slider round"></div>
            </label>
            <div className="plan-rate-text plan-yearly">Yearly</div>
          </div>
          <div className="plan-selection-error"></div>
        </div>
      </div>
      <div className="form-buttons">
        <button className="form-previous-step" onClick={goBack}>
          Go Back
        </button>
        <button className="form-next-step" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </>
  );
}

export default Plan_Form;

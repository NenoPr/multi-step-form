import React, { useState, useEffect } from "react";
import "/src/assets/stylesheets/stylesheet-summary.css";

function AD_Form(data) {
  const [formData, setFormData] = useState(data.props.form);
  const [activeSubscription, setActiveSubscription] = useState(
    data.props.form.plan.yearlySubscription
  );

  const [addonPrice, setAddonPrice] = useState({
    online: "+$1/mo",
    larger: "+$2/mo",
    profile: "+$2/mo",
  });

  useEffect(() => {
    document.querySelectorAll(".sidebar-counter").forEach((item) => {
      item.classList.remove("sidebar-counter-active");
      if (item.classList.contains("sidebar-counter-4")) {
        item.classList.add("sidebar-counter-active");
      }
    });
    if (activeSubscription) {
      setAddonPrice({
        online: "+$10/yr",
        larger: "+$20/yr",
        profile: "+$20/yr",
      });
    } else {
      setAddonPrice({
        online: "+$1/mo",
        larger: "+$2/mo",
        profile: "+$2/mo",
      });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      showComponent: "CONFIRM_Form",
    }));
  };

  const goBack = () => {
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      showComponent: "AD_Form",
    }));
  };

  const upperCase = (item) => {
    return item[0].toUpperCase() + item.slice(1);
  };

  const showPricing = (data) => {
    if (!data.plan.yearlySubscription) {
      return "$" + data.planPrice.monthly[data.plan.plan] + "/mo";
    } else return "$" + data.planPrice.yearly[data.plan.plan] + "/yr";
  };

  const showTotalAddonPrice = () => {
    let sum = 0;
    if (activeSubscription) {
      sum = sum + formData.planPrice.yearly[formData.plan.plan];
      formData.addons.onlineService ? (sum = sum + 10) : "";
      formData.addons.largerStorage ? (sum = sum + 20) : "";
      formData.addons.customizableProfile ? (sum = sum + 20) : "";
    } else {
      sum = sum + formData.planPrice.monthly[formData.plan.plan];
      formData.addons.onlineService ? sum++ : "";
      formData.addons.largerStorage ? (sum = sum + 2) : "";
      formData.addons.customizableProfile ? (sum = sum + 2) : "";
    }
    if (activeSubscription) return `+$${sum}/yr`;
    else return `+$${sum}/mo`;
  };

  const backToPlan = () => {
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      showComponent: "Plan_Form",
    }));
  };

  return (
    <>
      <div className="component-container">
        <div className="form-header-container">
          <div className="form-header">Finishing up</div>
          <div className="form-desc">
            Double-check everything looks OK before confirming.
          </div>
        </div>
        <div className="summary-container-main">
          <div className="summary-container">
            <div className="summary-plan-container">
              <div className="summary-plan">
                <div className="summary-plan-desc">
                  {upperCase(formData.plan.plan)}{" "}
                  {formData.plan.yearlySubscription ? "(Yearly)" : "(Monthly)"}
                </div>
                <a className="change-plan-link" onClick={backToPlan}>
                  Change
                </a>
              </div>
              <div className="summary-pricing">{showPricing(formData)}</div>
            </div>
            <div className="summary-line"></div>
            <div className="summary-addons">
              {formData.addons.onlineService ? (
                <div className="summary-service">
                  <div className="summary-service-plan">Online service</div>
                  <div className="summary-service-price">
                    {addonPrice.online}
                  </div>
                </div>
              ) : null}
              {formData.addons.largerStorage ? (
                <div className="summary-service">
                  <div className="summary-service-plan">Larger storage</div>
                  <div className="summary-service-price">
                    {addonPrice.larger}
                  </div>
                </div>
              ) : null}
              {formData.addons.customizableProfile ? (
                <div className="summary-service">
                  <div className="summary-service-plan">
                    Customizable profile
                  </div>
                  <div className="summary-service-price">
                    {addonPrice.profile}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="summary-total-container">
            <div className="summary-total-text">Total (per month)</div>
            <div className="summary-total-price">{showTotalAddonPrice()}</div>
          </div>
        </div>
      </div>
      <div className="form-buttons">
        <button className="form-previous-step" onClick={goBack}>
          Go Back
        </button>
        <button className="form-confirm" onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </>
  );
}

export default AD_Form;

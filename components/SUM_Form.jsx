import React, { useState } from "react";
import "/src/assets/stylesheets/stylesheet-summary.css";

function AD_Form(data) {
  const [formData, setFormData] = useState(data.props.form);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.phone}`
    );
  };

  const goBack = () => {
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      showComponent: "AD_Form"
    }));
  }

  const upperCase = (item) => {
    return item[0].toUpperCase() + item.slice(1)
  }

  const showPricing = (data) => {
    if (!data.plan.yearlySubscription) {
      return "$" + data.planPrice.monthly[data.plan.plan] + "/mo"
    } else return "$" + data.planPrice.yearly[data.plan.plan] + "/yr"
  }

  const showAddOns = () => {
    let node = {}
    let node2;
    if (formData.addons.onlineService) {
      node2 = React.createElement(
        <div className="summary-service">
            <div className="summary-service-plan">Online storage</div>
            <div className="summary-service-price">+$1/mo</div>
          </div>
      )
    }
    return node2;
  }

  return (
    <>
      <div className="form-header-container">
        <h2 className="form-header">Finishing up</h2>
        <p className="form-desc">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="summary-container">
        <div className="summary-plan-container">
          <div className="summary-plan">
            <div className="summary-plan-desc">{upperCase(formData.plan.plan)} {formData.plan.yearlySubscription ? "(Yearly)" : "(Monthly)"}</div>
            <a href="">Change</a>
          </div>
          <div className="summary-pricing">{showPricing(formData)}</div>
        </div>
        <div className="summary-line"></div>
        <div className="summary-addons">
          {/* {showAddOns()} */}
          <div className="summary-service">
            <div className="summary-service-plan">Online storage</div>
            <div className="summary-service-price">+$1/mo</div>
          </div>
          <div className="summary-service">
            <div className="summary-service-plan">Larger storage</div>
            <div className="summary-service-price">+$2/mo</div>
          </div>
        </div>
      </div>
      <div className="summary-total-container">
        <div className="summary-total-text">Total (per month)</div>
        <div className="summary-total-price">+$12/mo</div>
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

import { useState, useEffect } from "react";
import "/src/assets/stylesheets/stylesheet-addon.css";

function AD_Form(data) {
  const [addonsData, setAddonsData] = useState(data.props.form.addons);

  useEffect(() => {
    document.querySelectorAll(".sidebar-counter").forEach((item) => {
      item.classList.remove("sidebar-counter-active");
      if (item.classList.contains("sidebar-counter-3")) {
        item.classList.add("sidebar-counter-active");
      }
    });
  }, []);

  const handleChange = (event) => {
    const addon = event.target.getAttribute("addon");
    setAddonsData((prevAddonsData) => ({
      ...prevAddonsData,
      [addon]: !addonsData[addon],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(
    //   `Online: ${addonsData.onlineService}, Storage: ${addonsData.largerStorage}, Profile: ${addonsData.customizableProfile}`
    // );
    console.log(addonsData.onlineService);
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      ["addons"]: addonsData,
      showComponent: "SUM_Form",
    }));
    console.log("Data form", data.props.form);
  };

  const goBack = () => {
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      showComponent: "Plan_Form",
    }));
  };

  return (
    <>
      <div className="form-header-container">
        <div className="form-header">Pick add-ons</div>
        <div className="form-desc">
          Add-ons help enhance your gaming experience.
        </div>
      </div>
      {
        <div className="addon-container">
          <div
            className="addon-selection"
            addon="onlineService"
            selection={addonsData.onlineService ? "true" : "false"}
            onClick={handleChange}
          >
            <input
              type="checkbox"
              name="online-service"
              id="online-service"
              className="addon-checkbox onlineService-check"
              checked={addonsData.onlineService}
              onChange={() => {}}
            />
            <div className="addon-desc-container">
              <div className="addon-name">Online service</div>
              <div className="addon-desc">Access to multiplayer games</div>
            </div>
            <div className="addon-price">+$1/mo</div>
          </div>

          <div
            className="addon-selection"
            addon="largerStorage"
            selection={addonsData.largerStorage ? "true" : "false"}
            onClick={handleChange}
          >
            <input
              type="checkbox"
              name="larger-storage"
              id="larger-storage"
              className="addon-checkbox largerStorage-check"
              checked={addonsData.largerStorage}
              onChange={() => {}}
            />
            <div className="addon-desc-container">
              <div className="addon-name">Larger storage</div>
              <div className="addon-desc">Extra 1TB of cloud save</div>
            </div>
            <div className="addon-price">+$2/mo</div>
          </div>
          <div
            className="addon-selection"
            addon="customizableProfile"
            selection={addonsData.customizableProfile ? "true" : "false"}
            onClick={handleChange}
          >
            <input
              type="checkbox"
              name="customizable-profile"
              id="customizable-profile"
              className="addon-checkbox customizableProfile-check"
              checked={addonsData.customizableProfile}
              onChange={() => {}}
            />
            <div className="addon-desc-container">
              <div className="addon-name">Customizable Profile</div>
              <div className="addon-desc">Custom theme on your profile</div>
            </div>
            <div className="addon-price">+$2/mo</div>
          </div>
        </div>
      }

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

export default AD_Form;

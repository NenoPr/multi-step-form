import { useEffect, useState } from "react";
import "/src/assets/stylesheets/stylesheet-pi.css";

function PI_Form(data) {
  const [formData, setFormData] = useState(data.props.form.personalInfo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    document.querySelectorAll(".sidebar-counter").forEach((item) => {
      item.classList.remove("sidebar-counter-active");
      if (item.classList.contains("sidebar-counter-1")) {
        item.classList.add("sidebar-counter-active");
      }
    });
  }, []);

  const checkEmailValidity = (email) => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailFormat)) {
      return false;
    } else {
      document.querySelector(".pi-error-email").classList.add("pi-form-error");
      document.querySelector(".pi-error-email").innerText =
        "Please provide a valid email.";
      document.querySelector(".pi-input-email").classList.add("pi-input-error");
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(
    //   `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.phone}`
    // );
    let error = false;
    if (checkEmailValidity(formData.email));
    if (formData.name === "") {
      document.querySelector(".pi-error-name").classList.add("pi-form-error");
      document.querySelector(".pi-input-name").classList.add("pi-input-error");
      error = true;
    }
    if (formData.email === "") {
      document.querySelector(".pi-error-email").classList.add("pi-form-error");
      document.querySelector(".pi-input-email").classList.add("pi-input-error");
      error = true;
    }
    if (formData.phone === "") {
      document.querySelector(".pi-error-phone").classList.add("pi-form-error");
      document.querySelector(".pi-input-phone").classList.add("pi-input-error");
      error = true;
    }
    if (error) return;
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      showComponent: "Plan_Form",
      personalInfo: formData,
    }));
  };

  return (
    <>
      {
        <div className="component-container">
          <div className="form-header-container">
            <div className="form-header">Personal Info</div>
            <div className="form-desc">
              Please provide your name, email address, and phone number.
            </div>
          </div>

          <div className="form form-pi">
            <div className="form-input-container form-pi-name-container">
              <div className="form-pi-text-container">
                <div className="form-text form-pi-text">Name</div>
                <div className="pi-error-name">This field is required</div>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-input pi-input-name"
                placeholder="e.g. Stephen King"
              />
            </div>
            <div className="form-input-container form-pi-email-container">
              <div className="form-pi-text-container">
                <div className="form-text form-pi-text">Email Address</div>
                <div className="pi-error-email">This field is required</div>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-input pi-input-email"
                placeholder="e.g. stephenking@lorem.com"
              />
            </div>
            <div className="form-input-container form-pi-phone-container">
              <div className="form-pi-text-container">
                <div className="form-text form-pi-text">Phone Number</div>
                <div className="pi-error-phone">This field is required</div>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-input pi-input-phone"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
          </div>
        </div>
      }
      <div className="form-buttons">
        <button className="form-previous-step-pi"></button>
        <button className="form-next-step" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </>
  );
}

export default PI_Form;

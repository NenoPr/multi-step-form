import { useState, useEffect } from "react";
import "/src/assets/stylesheets/stylesheet-confirm.css";

function CONFIRM_Form(data) {
  return (
    <>
      <div className="confirm-container">
        <div className="confirm-image-container">
          <img
            src="./src/assets/images/icon-thank-you.svg"
            alt="thank-you-checkmark"
            className="confirm-image"
          />
        </div>
        <div className="confirm-thanks-text">Thank you!</div>
        <div className="confirm-text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaiming.com
        </div>
      </div>
    </>
  );
}

export default CONFIRM_Form;

function PI_Form(props) {
  return (
    <>
      <div className="form-header-container">
        <h2 className="form-header">Personal Info</h2>
        <p className="form-desc">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="form form-pi">
        <div className="form-input-container form-pi-name-container">
          <div className="form-text form-pi-text">Name</div>
          <input
            type="text"
            className="text-input form-pi-input"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="form-input-container form-pi-email-container">
          <div className="form-text form-pi-text">Email Address</div>
          <input
            type="text"
            className="text-input form-pi-input"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="form-input-container form-pi-phone-container">
          <div className="form-text form-pi-text">Phone Number</div>
          <input
            type="text"
            className="text-input form-pi-input"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
      <button className="form-next-step">Next Step</button>
    </>
  );
}

export default PI_Form;

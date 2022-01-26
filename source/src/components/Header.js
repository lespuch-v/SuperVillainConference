import React from "react";

const Header = () => {
  const [formData, setFormData] = React.useState({ fullName: "", email: "" });
  const [onModal, setOnModel] = React.useState(false)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setOnModel(prevValue => !prevValue)
  }

  return (
    <div className="form-container">
      {onModal && <section className="modal">
        <h1>Thank your {formData.fullName} for your Registration!</h1>
        <h1>Please confirm your email address: {formData.email}</h1>
      <button onClick={()=> setOnModel(prevValue => !prevValue)}>Thanks!</button>
      </section>}
      <form onSubmit={handleSubmit}> 
        <input
        className="name-email"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          name="fullName"
          value={formData.fullName}
        />
        <input
        className="name-email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <button className="button-54">Sign up</button>
      </form>
    </div>
  );
};

export default Header;

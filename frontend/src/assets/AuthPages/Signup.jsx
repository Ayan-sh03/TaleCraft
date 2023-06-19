import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:3000/api/v1/tales/register",
        formData,
        config
      );

      // console.log("Registration successful");
      // console.log(data); // Response from the server
      navigate("/tales");

      // Optionally, you can perform additional actions upon successful registration, such as redirecting to a login page.
    } catch (error) {
      console.log(error.response.data); // Display the error message sent by the server
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label htmlFor="password">Password</label>
        <input
          type={isChecked ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="Confirmpassword">Confirm Password</label>
        <input type={isChecked ? "text" : "password"} id="Confirmpassword" />

        <div className="show-pass">
          <label htmlFor="showPass">Show Password</label>
          <input
            type="checkbox"
            id="showPass"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>

        <button>Sign Up</button>
        <p>
          Already Registered? <a>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;

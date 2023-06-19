import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
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
        "http://localhost:3000/api/v1/tales/login",
        form,
        config
      );

      console.log("login successfull");
      navigate("/tales");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button>Login</button>
        <p>
          Haven't Registered Yet? <a>Register Now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

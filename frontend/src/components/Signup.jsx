import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  function handleApi(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const url = 'http://localhost:3003/Signup';
    const data = { firstName, lastName, email, password };

    axios.post(url, data)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate('/Login');
  }

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Login
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleApi}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
              className="input"
            />

            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

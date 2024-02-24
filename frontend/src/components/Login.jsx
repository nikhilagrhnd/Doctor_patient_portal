import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 

    const url = 'http://localhost:3003/Login';
    const data = { email, password };

    console.log({ email, password });

    // Add your API call logic here
    axios.post(url, data)
      .then((res) => {
        if (res.data.token) {
          alert(res.data.message);
          localStorage.setItem('token', res.data.token);
          navigate('/');
        }
        else{
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleLogin}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="input"
            />
            <button type="submit" className="green_btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


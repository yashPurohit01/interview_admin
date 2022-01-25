import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styles from "../../styles/components/mainContent/login.module.scss";

import { BsFacebook, BsGoogle } from "react-icons/bs";

export default function MainContent_register() {

  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");

  const creden = {
    Fullname: Fullname,
    Email: Email,
    password: Password,
    CPassword: CPassword,
  };
  const submitHandler = (e) => {
  

    e.preventDefault();
    axios
      .post("https://shivila.herokuapp.com/api-token-auth/", creden)
      .then((res) => {
        const token = res.data.token;
        console.log(token);
        const data = {
          usertoken: token,
          role: "Admin",
        };
        localStorage.setItem("token", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err.response.status);
      });
    

  };
  return (
    // Content In Login Page
    <section className={styles.login}>
      {/* Profile Details */}
      <div className={styles.content}>
        {/* Left Side Message */}
        <div className={styles.message}>
          <h2 className={styles.title}>
            Register To
            <br />
            Get Your Account
          </h2>
          <p className={styles.details}>
            Already Have An Account..?
            <br />
            Sign In{" "}
            <Link to="/login" className={styles.btnSwitch}>
              Here
            </Link>
          </p>
        </div>

        {/* Register Form */}
        <form className={styles.loginForm} onSubmit={submitHandler} action="" method="POST">
          {/* Input Fields */}
          <div className={styles.inputField}>
            <input
              className={styles.input}
              type="text"
              placeholder="Your Name"
              pattern="^[a-zA-Z\s]{1,100}$"
              value={Fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email ID"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              required
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Confirm Password"
              value={CPassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
            <input
              className={styles.input}
              type="tel"
              placeholder="Enter your phone number:"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
            <input
              className={styles.input}
              type="tel"
              placeholder="Enter OTP"
              required
            />
            <button>Get OTP</button>
          </div>

          {/* Login Button */}
          <div className={styles.submit}>
            <input
              className={styles.btn}
              type="submit"
              value="Create Account"
            />
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <span className={styles.line}></span>
            <p className={styles.text}>OR</p>
            <span className={styles.line}></span>
          </div>

          {/* Social Logins */}
          <div className={styles.social}>
            <button className={styles.google}>
              <BsGoogle className={styles.icon} />
            </button>
            <button className={styles.facebook}>
              <BsFacebook className={styles.icon} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import { Link,} from "react-router-dom";

import {  useState } from "react";

import styles from "../../styles/components/mainContent/login.module.scss";

import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../ReduxStore/Actions/LoginAction";

export default function MainContent_login() {
  const dispatch = useDispatch();
  
 
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");


  const credentials = {
    username: Username,
    password: Password,
  };

  const submitHandler = (e) => {
    e.preventDefault();

   
    dispatch(LoginAction(credentials))
     
   
  };

  return (
    // Content In Login Page
    <section className={styles.login}>
      {/* Profile Details */}
      <div className={styles.content}>
        {/* Left Side Message */}
        <div className={styles.message}>
          <h2 className={styles.title}>
            Sign In To
            <br />
            Your Account
          </h2>
          <p className={styles.details}>
            Don't Have Any Account..?
            <br />
            Register{" "}
            <Link to="/register" className={styles.btnSwitch}>
              Here
            </Link>
          </p>
        </div>

        {/* Login Form */}

        <div className={styles.loginForm}>
          <form onSubmit={submitHandler}>
            {/* Input Fields */}
            <div className={styles.inputField}>
              <input
                className={styles.input}
                type="text"
                placeholder="Email ID"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={styles.input}
                type= "password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            {/* Forget Password Link */}
            <div className={styles.extra}>
              <button className={styles.forget}>
                <p className={styles.text}>Forget Password</p>
              </button>
            </div>

            {/* Login Button */}

            {/* <p className={styles.text}>Login To Account</p> */}

            <input
              type="submit"
              styles={{ marginTop: ".5rem" }}
              className={styles.submit}
              value="Login To Account"
              onSubmit={()=> dispatch(LoginAction(credentials))}
            />
          </form>
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
        </div>
      </div>
    </section>
  );
}

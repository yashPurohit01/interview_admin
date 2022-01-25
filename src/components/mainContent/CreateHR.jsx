import styles from "../../styles/components/mainContent/createJob.module.scss";

export default function MainContent_CreateHR() {
  return (
    // Content In Login Page
    <section className={styles.createJob}>
      {/* Profile Details */}
      <div className={styles.content}>
        {/* Left Side Message */}
        <div className={styles.message}>
          <h2 className={styles.title}>Create HR</h2>
          <p className={styles.details}>Please fill the required details</p>
        </div>

        {/* Login Form */}
        <form className={styles.loginForm} action="" method="POST">
          {/* Input Fields */}
          <div className={styles.inputField}>
            <div className={styles.group}>
              <p className={styles.title}>Name</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Email</p>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Password</p>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Confirm Password</p>
              <input
                className={styles.input}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Mobile</p>
              <input
                className={styles.input}
                type="tel"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className={`${styles.group} ${styles.OTP}`}>
              <p className={styles.title}>Enter OTP</p>
              <div className={styles.btnOTP}>
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Enter OTP"
                  required
                />
                <input
                  className={styles.btnGet}
                  type="submit"
                  value="Get OTP"
                />
                <input
                  className={styles.btnVerify}
                  type="submit"
                  value="Verify"
                />
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div className={styles.submit}>
            <input className={styles.btn} type="submit" value="Create HR" />
          </div>
        </form>
      </div>
    </section>
  );
}

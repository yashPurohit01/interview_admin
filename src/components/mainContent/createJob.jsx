import styles from "../../styles/components/mainContent/createJob.module.scss";

export default function MainContent_createJob() {
  return (
    // Content In Login Page
    <section className={styles.createJob}>
      {/* Profile Details */}
      <div className={styles.content}>
        {/* Left Side Message */}
        <div className={styles.message}>
          <h2 className={styles.title}>Create New Job</h2>
          <p className={styles.details}>Please fill the required details</p>
        </div>

        {/* Login Form */}
        <form className={styles.loginForm} action="" method="POST">
          {/* Input Fields */}
          <div className={styles.inputField}>
            <div className={styles.group}>
              <p className={styles.title}>Job Title</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Job Role"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Minimum Qualification</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Degree"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Minimum Experience</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Details Here"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Required Skills</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Minimum 3 Skills"
                required
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}> Job Description</p>
              <textarea
                className={styles.input}
                placeholder="Description"
                required
              ></textarea>
            </div>
          </div>

          {/* Login Button */}
          <div className={styles.submit}>
            <input className={styles.btn} type="submit" value="Create Post" />
          </div>
        </form>
      </div>
    </section>
  );
}

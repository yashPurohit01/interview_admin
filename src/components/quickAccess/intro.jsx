import styles from "../../styles/components/quickAccess/intro.module.scss";

import { BsBriefcaseFill, BsStackOverflow } from "react-icons/bs";

export default function QuickAccess_Intro_Links({ setQuickAcess }) {
  return (
    <section className={styles.overview}>
      {/* Quick Links & Shortcuts */}
      <div className={styles.quickLinks}>
        <h2 className={styles.head}>Quick Links</h2>
        <button
          className={styles.link}
          // onClick={() => setQuickAcess("CreateHR")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>User Management</p>
        </button>
        <button
          className={styles.link}
          onClick={() => setQuickAcess("CreateHR")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>Create HR</p>
        </button>

        <button
          className={styles.link}
          onClick={() => setQuickAcess("viewEdit")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>View / Edit schedule</p>
        </button>
        <button
          className={styles.link}
          onClick={() => setQuickAcess("LinkShare")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>Link Share</p>
        </button>
        <button
          className={styles.link}
          // onClick={() => setQuickAcess("CreateJob")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>Live Status</p>
        </button>
        <button
          className={styles.link}
          onClick={() => setQuickAcess("CreateJob")}
        >
          <BsBriefcaseFill className={styles.icon} />
          <p className={styles.title}>Create New Job</p>
        </button>

        <button
          className={styles.link}
          onClick={() => setQuickAcess("JobView")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>View Open Jobs</p>
        </button>
        <button
          className={styles.link}
          // onClick={() => setQuickAcess("CreateJob")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>View Resume</p>
        </button>
        <button
          className={styles.link}
          // onClick={() => setQuickAcess("CreateJob")}
        >
          <BsStackOverflow className={styles.icon} />
          <p className={styles.title}>View Document</p>
        </button>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import styles from "../../styles/components/mainContent/intro.module.scss";
// import { BsInfoCircleFill } from "react-icons/bs";
export default function MainContent_intro() {
  return (
    // Content In Home Page
    <section className={styles.intro}>
      {/* Heading */}
      <div className={styles.head}>
        <h2 className={styles.details}>Today's Meetings</h2>
      </div>
      {/* Scheduled Meetings */}
      <div className={styles.meetingList}>
        {/* Start - Group 01 */}
        <div className={styles.group}>
          {/* Time */}
          <div className={styles.timeline}>
            <h2 className={styles.details}>Time - 10:00</h2>
          </div>
          {/* Start - Meetings */}
          <div className={styles.itemsContainer}>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 10:00</p>
              </div>
            </button>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 10:20</p>
              </div>
            </button>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 10:40</p>
              </div>
            </button>
          </div>
          {/* End - Meetings */}
        </div>
        {/* End - Group 01 */}
        {/* Start - Group 02 */}
        <div className={styles.group}>
          {/* Time */}
          <div className={styles.timeline}>
            <h2 className={styles.details}>Time - 15:00</h2>
          </div>
          {/* Start - Meetings */}
          <div className={styles.itemsContainer}>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 15:00</p>
              </div>
            </button>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 15:20</p>
              </div>
            </button>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 15:40</p>
              </div>
            </button>
          </div>
          {/* End - Meetings */}
        </div>
        {/* End - Group 02 */}
        {/* Start - Group 03 */}
        <div className={styles.group}>
          {/* Time */}
          <div className={styles.timeline}>
            <h2 className={styles.details}>Time - 18:00</h2>
          </div>
          {/* Start - Meetings */}
          <div className={styles.itemsContainer}>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 18:00</p>
              </div>
            </button>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 18:20</p>
              </div>
            </button>
            <button className={styles.item}>
              <Link to="/" className={styles.logo}>
                <img
                  className={styles.image}
                  src="/image/account/avatorimage.png"
                  alt="Logo"
                />
              </Link>
              <div className={styles.details}>
                <h3 className={styles.title}>Candidate Name</h3>
                <h4 className={styles.category}>Qualification</h4>
                <h4 className={styles.category}>Skills</h4>
                <p className={styles.time}>Time : 18:40</p>
              </div>
            </button>
          </div>
          {/* End - Meetings */}
        </div>
        {/* End - Group 03 */}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

import styles from "../../styles/components/navigation/main.module.scss";

import {
  BsFillHouseDoorFill,
  BsDoorOpenFill,
  BsFillPersonLinesFill,
  BsStack,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Logout } from "../../ReduxStore/Actions/LogoutAction";

export default function Navigation_main() {
   const dispatch = useDispatch()
  return (
    // Main Navigation Menu
    <section className={styles.nav}>
      {/* Navigation Logo */}
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          <img
            className={styles.image}
            src="/image/common/logo.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={styles.page}>
        {/* Home */}
        <Link to="/" className={styles.pageLink}>
          <BsFillHouseDoorFill className={styles.icon} />
        </Link>

        {/* Contact */}
        <Link to="/admin/contact" className={styles.pageLink}>
          <BsFillPersonLinesFill className={styles.icon} />
        </Link>

        {/* Activity */}
        <Link to="/admin/activity" className={styles.pageLink}>
          <BsStack className={styles.icon} />
        </Link>
      </nav>

      {/* Admin Links */}
      <div className={styles.admin}>
        {/* Settings */}
        {/* <button className={`${styles.adminLink} ${styles.settings}`}>
          <BsGearFill className={styles.icon} />
        </button> */}

        {/* Logout */}
        <Link to="/login" onClick={dispatch(Logout)} className={`${styles.adminLink} ${styles.logout}`}>
          <BsDoorOpenFill className={styles.icon} />
        </Link>

        {/* Report */}
        {/* <button className={`${styles.adminLink} ${styles.issue}`}>
          <BsExclamationLg className={styles.icon} />
        </button> */}
      </div>
    </section>
  );
}

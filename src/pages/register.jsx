// Login Page -Admin

import MainContent_register from "../components/mainContent/register";

import styles from "../styles/pages/login.module.scss";
import global from "../styles/pages/global.module.scss";

export default function Register() {
  return (
    <section className={`${global.parentContainer} ${styles.login}`}>
      {/* Login Screen */}
      <section className={global.fullScreen}>
        <MainContent_register />
      </section>
    </section>
  );
}

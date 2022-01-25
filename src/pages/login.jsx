// Login Page -Admin

import MainContent_login from "../components/mainContent/login"

import styles from "../styles/pages/login.module.scss"
import global from "../styles/pages/global.module.scss"


export default function Login() {

    return (
        <section className={`${global.parentContainer} ${styles.login}`}>

            {/* Login Screen */}
            <section className={global.fullScreen}>
                <MainContent_login />
            </section>              

        </section>
    )
}

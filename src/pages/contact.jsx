// Contact Page
import Navigation_context from "../components/navigation/context"

import QuickAccess_teamList from "../components/quickAccess/teamList"
import QuickAccess_contactList from "../components/quickAccess/contactList"

import styles from "../styles/pages/contact.module.scss"
import global from "../styles/pages/global.module.scss"


export default function Contact() {

    return (
        <section className={`${global.parentContainer} ${styles.home}`}>



            {/* At A Glance Panel */}
            <section className={global.level_2}>
                <QuickAccess_teamList />
                <QuickAccess_contactList />
            </section>


            {/* Main Content */}
            <section className={global.level_3}>
                <section className={global.tools}>
                    <Navigation_context/>
                </section>
                <section className={global.content}>

                </section>
            </section>                

        </section>
    )
}
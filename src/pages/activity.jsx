// Home Page -Admin
import Navigation_Context from "../components/navigation/context"

import QuickAccess_Activity_History from "../components/quickAccess/activityHistory"
import MainContent_Activity_History from "../components/mainContent/activityHistory"

import styles from "../styles/pages/home.module.scss"
import global from "../styles/pages/global.module.scss"
import { useState } from "react"


export default function Activity() {

    const [selectedmonth , setMonth] = useState("");
  
    return (
        <section className={`${global.parentContainer} ${styles.home}`}>

            {/* Main Navigation On Left Side */}
            


            {/* At A Glance Panel */}
            <section className={global.level_2}>
                <QuickAccess_Activity_History setMonth={setMonth} />
            </section>


            {/* Main Content */}
            <section className={global.level_3}>
                <section className={global.tools}>
                    <Navigation_Context   />
                </section>
                <section className={global.content}>
                    <MainContent_Activity_History selectedmonth={selectedmonth }/>
                </section>
            </section>                

        </section>
    )
}
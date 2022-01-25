// Home Page -Admin

import Navigation_main from "../components/navigation/main"
import Navigation_context from "../components/navigation/context"

import QuickAccess_activityHistory from "../components/quickAccess/activityHistory"
import MainContent_activityHistory from "../components/mainContent/activityHistory"

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
                <QuickAccess_activityHistory setMonth={setMonth} />
            </section>


            {/* Main Content */}
            <section className={global.level_3}>
                <section className={global.tools}>
                    <Navigation_context   />
                </section>
                <section className={global.content}>
                    <MainContent_activityHistory selectedmonth={selectedmonth }/>
                </section>
            </section>                

        </section>
    )
}
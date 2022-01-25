import styles from "../../styles/components/mainContent/viewJobs.module.scss"

import { BsGem } from "react-icons/bs";


export default function MainContent_viewJobs() {
    
    return (
        // Content In Home Page
        <section className={styles.intro}>

            {/* Heading */}
            <div className={styles.head}>
                <h2 className={styles.details}>Open Jobs</h2>
            </div>

            {/* Scheduled Meetings */}
            <div className={styles.jobList}>

                <button className={styles.item}>
                    <BsGem className={styles.icon} />
                    <div className={styles.details}>
                        <h3 className={styles.title}>React Developer</h3>
                        <h4 className={styles.experience}>Exp : 3 Years</h4>
                        <p className={styles.date}>Date : 1 Jan 2022</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <BsGem className={styles.icon} />
                    <div className={styles.details}>
                        <h3 className={styles.title}>Django Meeting</h3>
                        <h4 className={styles.experience}>Exp : 2 Years</h4>
                        <p className={styles.date}>Date : 5 Jan 2022</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <BsGem className={styles.icon} />
                    <div className={styles.details}>
                        <h3 className={styles.title}>Frontend Designer</h3>
                        <h4 className={styles.experience}>Exp : 3 Years</h4>
                        <p className={styles.date}>Date : 10 Jan 2022</p>
                    </div>
                </button>

            </div>

        </section>
    )
}
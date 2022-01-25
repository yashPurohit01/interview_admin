import styles from "../../styles/components/quickAccess/introMessage.module.scss"


export default function QuickAccess_introMessage() {

    return (
        <section className={styles.overview}>
            
            {/* Greetings */}
            <div className={styles.welcome}>
                <p className={styles.title}>Good Morning</p>
                <p className={styles.subTitle}>Welcome Subhajit Ghosh</p>
                <p className={styles.message}>Let's Start the Day</p>
            </div>

        </section>
    )
}
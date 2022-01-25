import styles from "../../styles/components/quickAccess/contactList.module.scss"


export default function QuickAccess_contactList() {

    return (
        <section className={styles.contact}>

            {/* Heading */}
            <h2 className={styles.head}>Contact List</h2>

            {/* Contacts */}
            <div className={styles.list}>

                {/* Individual Contact Item */}
                <button className={styles.item}>
                    <img className={styles.image}  alt=" " src="/image/account/account_1.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Aditi Shrivastava</p>
                        <p className={styles.designation}>Data Analyst</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_2.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Ananya Maity</p>
                        <p className={styles.designation}>Accountant</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_3.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Ankan Roy</p>
                        <p className={styles.designation}>Project Manager</p>
                    </div>
                </button>                    

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_4.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Jaydeep Samanta</p>
                        <p className={styles.designation}>Android Developer</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_5.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Mithu Kumari</p>
                        <p className={styles.designation}>Frontend Developer</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_6.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Mou Jana</p>
                        <p className={styles.designation}>Backend Developer</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_7.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Moumita Bhanja</p>
                        <p className={styles.designation}>Full Stack Developer</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_8.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Pabitra Jana</p>
                        <p className={styles.designation}>Python Developer</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_9.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Praksh Maity</p>
                        <p className={styles.designation}>Backend Developer</p>
                    </div>
                </button>

                <button className={styles.item}>
                    <img className={styles.image} alt=" " src="/image/account/account_10.png" />
                    <div className={styles.details}>
                        <p className={styles.name}>Prithwisha Jana</p>
                        <p className={styles.designation}>IOS Developer</p>
                    </div>
                </button>

            </div>        

        </section>
    )
}
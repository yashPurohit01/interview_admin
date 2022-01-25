import styles from "../../styles/components/quickAccess/teamList.module.scss";


export default function QuickAccess_teamList() {
  return (
    <section className={styles.team}>
      {/* Heading */}
      <h2 className={styles.head}>Team List</h2>

      {/* Contacts */}
      <div className={styles.list}>
        {/* Individual Contact Item */}
        <button className={styles.item}>
          <img className={styles.image} alt="" src="/image/team/team_1.jpg" />
          <div className={styles.details}>
            <p className={styles.name}>Web Dev Team</p>
            <p className={styles.size}>23 Members</p>
          </div>
        </button>

        <button className={styles.item}>
          <img className={styles.image} alt="" src="/image/team/team_2.jpg" />
          <div className={styles.details}>
            <p className={styles.name}>Android Dev Team</p>
            <p className={styles.size}>15 Memebers</p>
          </div>
        </button>

        <button className={styles.item}>
          <img className={styles.image} alt="" src="/image/team/team_3.jpg" />
          <div className={styles.details}>
            <p className={styles.name}>Game Dev Team</p>
            <p className={styles.size}>10 Members</p>
          </div>
        </button>

        {/* <button className={styles.item}>
                    <BsPlusLg className={styles.icon} />
                </button>                          */}
      </div>
    </section>
  );
}

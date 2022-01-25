import styles from "../../styles/components/navigation/context.module.scss";
import React, { useState } from "react";
import UserProfile from "../mainContent/Profile";

export default function Navigation_context() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    // Context Menu On Top
    <section className={styles.header}>
      <div className={styles.right}>
        {/* Profile Image */}
        <button
          className={styles.profile}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <img className={styles.image} src="./image/account/avatorimage.png" alt="" />
        </button>
        {modalOpen && <UserProfile setOpenModal={setModalOpen} />}
      </div>
    </section>
  );
}

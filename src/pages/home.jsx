// Home Page -Admin

import Navigation_main from "../components/navigation/main";
import Navigation_context from "../components/navigation/context";
import QuickAccess_introMessage from "../components/quickAccess/introMessage";
import MainContent_intro from "../components/mainContent/intro";
import MainContent_viewEdit from "../components/mainContent/ViewEdit";
import MainContent_createJob from "../components/mainContent/createJob";
import MainContent_viewJobs from "../components/mainContent/viewJobs";
import QuickAccess_introLinks from "../components/quickAccess/intro";
import MainContent_CreateHR from "../components/mainContent/CreateHR";
import LinkShare from "../components/mainContent/Link";
import styles from "../styles/pages/home.module.scss";
import global from "../styles/pages/global.module.scss";
import { useState } from "react";

export default function Home() {
  const [quickAcess, setQuickAcess] = useState("");

  const GlobalContent = () => {
    switch (quickAcess) {
      case "JobView":
        return <MainContent_viewJobs />;

      case "CreateJob":
        return <MainContent_createJob />;

      case "CreateHR":
        return <MainContent_CreateHR />;

      case "viewEdit":
        return <MainContent_viewEdit />;

      case "LinkShare":
        return <LinkShare />;

      default:
        return <MainContent_intro />;
    }
  };

  return (
    <section className={`${global.parentContainer} ${styles.home}`}>
      {/* Main Navigation On Left Side */}
      

      {/* At A Glance Panel */}
      <section className={global.level_2}>
        <QuickAccess_introMessage />
        <QuickAccess_introLinks setQuickAcess={setQuickAcess} />
      </section>

      {/* Main Content */}
      <section className={global.level_3}>
        <section className={global.tools}>
          <Navigation_context />
        </section>
        <section className={global.content}>
          {/*  <MainContent_viewJobs />
                    <MainContent_createJob />
                    <MainContent_intro /> */}
          {<GlobalContent />}
        </section>
      </section>
    </section>
  );
}

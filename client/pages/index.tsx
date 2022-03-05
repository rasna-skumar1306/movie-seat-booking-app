import type { NextPage } from "next";
import ScreenGenerator from "../components/screen/ScreenGenerator";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ScreenGenerator />
    </div>
  );
};

export default Home;

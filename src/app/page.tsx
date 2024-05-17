import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Sample text</h1>
      </main>
    </>
  );
}

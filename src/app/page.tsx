import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"; // Corrected import
import styles from "./page.module.css"; // Removed duplicate import

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
    </div>
  );
}

import Link from "next/link";
import styles from './main-header.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.list}>
            <Link href="/events">Browse all Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

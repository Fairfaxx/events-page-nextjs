import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/events-list";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

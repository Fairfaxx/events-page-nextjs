import EventItem from "./event-item";
import styles from './event-list.module.css'

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <EventItem
            key={item.id}
            id={item.id}
            location={item.location}
            title={item.title}
            date={item.date}
            image={item.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default EventList;

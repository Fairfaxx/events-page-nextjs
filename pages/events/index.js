import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/events-list"
import EventsSearch from "../../components/events/events-search";
import {Fragment} from 'react';
const AllEventsPage = () => {
  const events = getAllEvents();

  if (!events) {
    return <h3>Not Found any events!</h3>;
  }

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;

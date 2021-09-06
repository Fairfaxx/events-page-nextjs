import { Fragment } from "react";
import { getAllEvents } from "../../helpers/api-utils";
import { useRouter } from "next/router";

import EventList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = (props) => {
  const { events } = props;
  const router = useRouter();

  if (!events) {
    return <h3>Not Found any events!</h3>;
  }

  function findEventsHandler(year, month) {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 120
  };
}

export default AllEventsPage;

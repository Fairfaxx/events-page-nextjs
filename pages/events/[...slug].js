import { Fragment } from "react";
import { getFilteredEvents } from "../../helpers/api-utils";
import { useRouter } from "next/router";
import Button from "../../components/UI/button";
import ErrorAlert from "../../components/ui/error-alert";
import EventList from "../../components/events/events-list";
import ResultsTitle from "../../components/events/results-title";

const FilteredEventPage = (props) => {
  const router = useRouter();

  //const filteredData = router.query.slug;
  // console.log(filteredData);

  // if (!filteredData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = filteredData[0];
  // const filteredMonth = filteredData[1];
  // const yearNum = +filteredYear;
  // const monthNum = +filteredMonth;

  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events found for this filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={props.events} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  const yearNum = +filteredYear;
  const monthNum = +filteredMonth;

  if (
    isNaN(yearNum) ||
    isNaN(monthNum) ||
    yearNum < 2021 ||
    yearNum > 2030 ||
    monthNum < 1 ||
    monthNum > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: yearNum,
    month: monthNum,
  });

  return {
    props: { 
    events: filteredEvents,
    date: {
      year: yearNum,
      month: monthNum,
    },
  }
}
}

export default FilteredEventPage;

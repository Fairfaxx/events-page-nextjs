import { Fragment } from "react";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import Button from "../../components/UI/button";
import ErrorAlert from "../../components/ui/error-alert";
import EventList from "../../components/events/events-list";
import ResultsTitle from "../../components/events/results-title";

const FilteredEventPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;
  console.log(filteredData);

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

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

  const filteredEvents = getFilteredEvents({
    year: yearNum,
    month: monthNum,
  });

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

  const date = new Date(yearNum, monthNum - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventPage;

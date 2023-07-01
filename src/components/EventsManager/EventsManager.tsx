import CreateEvent from "./CreateEvent";
import DisplayEvents from "./DisplayEvents";
import EventDetails from "./EventDetails";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface EventsManagerProps {}
const EventsManager = (props: EventsManagerProps) => {
  return (
    <div className="grid grid-cols-3 gap-12 mt-8">
      <CreateEvent />
      <DisplayEvents />
      <EventDetails />
    </div>
  );
};
export default EventsManager;

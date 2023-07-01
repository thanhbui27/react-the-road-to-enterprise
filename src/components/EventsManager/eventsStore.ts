import { create } from "zustand";
import { events } from "./eventsData";
import type { Event } from "./eventsTypes";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { withImmer } from "@/store/middleware/withImmer";
import { createStoreWithSubscribe } from "@/store/helpers";

export type EventsState = {
  events: typeof events;
  selectedEvent: Event["id"];
  selectEvent: (id: string) => void;
  createEvent: (event: Event) => void;
};

export const useEventsStore = createStoreWithSubscribe<EventsState>(
  (set) => ({
    events: [...events],
    selectEvent: (id: string) => {
      set({ selectedEvent: id });
    },
    createEvent: (event) => {
      set((state) => ({
        events: [...state.events, event],
      }));
    },
    selectedEvent: "",
  }),
  {
    name: "Events",
  }
);
// export const useEventsStore = create<EventsState>()(
//   devtools(
//     subscribeWithSelector(
//       withImmer((set: any) => ({
//         events: [...events],
//         selectedEvent: "",
//         selectEvent: (id: string) => {
//           set({ selectedEvent: id });
//         },
//         createEvent: (event: any) => {
//           set((state: any) => ({
//             events: [...state.events, event],
//           }));
//         },
//       }))
//     )
//   )
// );

export type PastEventsState = {
  events: typeof events;
};
export const usePastEventsStore = create<PastEventsState>()(
  devtools(
    persist(
      (set) => ({
        events: [],
      }),
      {
        name: "PastEvents",
      }
    )
  )
);

useEventsStore.subscribe(
  (state) => state.events,
  (events) => {
    const pastEvents = events.filter((event) => {
      const [day, month, year] = event.endDate
        .split("/")
        .map((item) => parseInt(item));
      const [hour, minute] = event.endTime.split(":");
      return (
        new Date(year, month - 1, day, parseInt(hour), parseInt(minute)) <
        new Date()
      );
    });
    usePastEventsStore.setState({
      events: pastEvents,
    });
  },
  { fireImmediately: true }
);

export type UpcomingAndPastEventsState = {
  pastEvents: typeof events;
  upcomingEvents: typeof events;
};
export const useUpcomingAndPastEventsStore =
  create<UpcomingAndPastEventsState>()(
    devtools(
      persist(
        (set) => ({
          pastEvents: [],
          upcomingEvents: [],
        }),
        {
          name: "UpcomingAndPastEvents",
        }
      )
    )
  );

useEventsStore.subscribe(
  (state) => state.events,
  (events) => {
    const upcomingEvents: Event[] = [];
    const pastEvents: Event[] = [];
    for (const event of events) {
      const [day, month, year] = event.endDate
        .split("/")

        .map((item) => parseInt(item));
      const [hour, minute] = event.endTime.split(":");
      const isUpcoming =
        new Date(year, month - 1, day, parseInt(hour), parseInt(minute)) >
        new Date();
      if (isUpcoming) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    }
    useUpcomingAndPastEventsStore.setState({
      pastEvents,
      upcomingEvents,
    });
  },
  { fireImmediately: true }
);

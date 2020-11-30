import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import * as actionCreators from "../../store/actions/calenderActions";
import EventModal from "../modal/modal";

import { CalendarWrapper } from "../../styled-component/styledComponnets";
import "./calendar.css";

const MyCalender = () => {
  const events = useSelector((state) => state.events);
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) => {
    if (search === "") {
      return event;
    } else {
      return event.state.includes(search.toLowerCase());
    }
  });
  useEffect(() => {
    if (id) {
      dispatch(actionCreators.getEvents(id));
    }
  }, [id, dispatch]);

  const dateSelected = (dateInfo) => {};

  const manageEvents = (eventInfo) => {
    setShowModal(true);
    dispatch(
      actionCreators.selectedEventID(eventInfo.event._def.extendedProps._id)
    );
  };

  const contentHandler = (eventInfo) => {
    return (
      <>
        <i>{eventInfo.event.title}</i>
        <p>{eventInfo.event._def.extendedProps.description}</p>
        <img
          className="eventImage"
          src={eventInfo.event._def.extendedProps.image}
          alt="eventImage"
        />
      </>
    );
  };
  const eventChanged = (eventInfo) => {
    console.log(eventInfo);
    let date = eventInfo.event._instance.range.start
      .toISOString()
      .replace(/T.*$/, "");
    console.log(date, "date changed");
    const id = eventInfo.event._def.extendedProps._id;
    const data = {
      date,
    };
    dispatch(actionCreators.editEvent(id, data));
  };
  const onHideModal = () => {
    setShowModal(false);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <CalendarWrapper>
        <div className="search">
          <input
            className=" form-control"
            type="text"
            placeholder="Search/Filer"
            value={search}
            onChange={searchHandler}
          />
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "title",
            center: "today",
            right: "dayGridMonth,timeGridWeek,timeGridDay,prev,next",
          }}
          initialView="dayGridMonth"
          eventTextColor="black"
          editable={true}
          droppable={true}
          dayMaxEventRows={(true, 2)}
          selectable={true}
          events={filteredEvents}
          eventContent={contentHandler}
          select={dateSelected}
          eventClick={manageEvents}
          eventChange={eventChanged}
        />
      </CalendarWrapper>
      <EventModal onHide={onHideModal} show={showModal} />
    </>
  );
};

export default MyCalender;

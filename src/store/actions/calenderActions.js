import * as actionTypes from "./actionsTypes";
import axios from "axios";

const addNewEventToReducer = (event) => {
  return {
    type: actionTypes.NEW_EVENT,
    event,
  };
};

export const createEvent = (eventData) => {
  return async (dispatch) => {
    await axios.post("http://localhost:5000/event/createEvent", eventData);
    dispatch(addNewEventToReducer(eventData));
  };
};

const eventsInCalendar = (events) => {
  return {
    type: actionTypes.GET_EVENTS_DB,
    events,
  };
};

export const getEvents = (id) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:5000/event/getEvents/${id}`)
      .then((res) => {
        dispatch(eventsInCalendar(res.data.userEvents));
      });
  };
};

export const selectedEventID = (eventId) => {
  return {
    type: actionTypes.EVENT_ID,
    eventId,
  };
};

export const eventDeleted = (id) => {
  return {
    type: actionTypes.EVENT_DELETED,
    id,
  };
};
export const eventDelete = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:5000/event/deleteEvent/${id}`)
      .then((res) => console.log("res", res.data))
      .catch((err) => console.log(err));
    dispatch(eventDeleted(id));
  };
};

const changeInEvent = (id, data) => {
  return {
    type: actionTypes.EDITED_EVENT,
    id,
    data,
  };
};

export const editEvent = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/event/changeEvent/${id}`, data)
      .then((res) => {
        console.log(res);
        dispatch(changeInEvent(id, data));
      })
      .catch((err) => console.log(err));
  };
};

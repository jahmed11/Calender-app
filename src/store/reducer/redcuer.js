import * as actionType from "../actions/actionsTypes";
const initialState = {
  id: null,
  token: null,
  eventId: null,
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGGED_IN:
      return {
        ...state,
        token: action.token,
        id: action.id,
      };

    case actionType.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.newEvent],
      };

    case actionType.GET_EVENTS_DB:
      return {
        ...state,
        events: [...action.events],
      };
    case actionType.EVENT_ID:
      return {
        ...state,
        eventId: action.eventId,
      };

    case actionType.NEW_EVENT:
      return {
        ...state,
        events: [...state.events, action.event],
      };

    case actionType.EVENT_DELETED:
      let filteredEvents = state.events.filter(
        (event) => event._id !== action.id
      );
      return {
        ...state,
        events: [...filteredEvents],
      };

    case actionType.EDITED_EVENT:
      const index = state.events.findIndex((event) => event._id === action.id);
      let events = [...state.events];
      if (action.data.title && action.data.description) {
        events[index].title = action.data.title;
        events[index].description = action.data.description;
      } else if (action.data.title && !action.data.description) {
        events[index].title = action.data.title;
      } else {
        events[index].description = action.data.description;
      }
      return {
        ...state,
        events: events,
      };
    default:
      return state;
  }
};

export default reducer;

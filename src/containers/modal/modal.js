import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import Input from "../../components/input";
import * as actionCreator from "../../store/actions/calenderActions";
import { ModalButtonDiv } from "../../styled-component/styledComponnets";

const EventModal = (props) => {
  const eventId = useSelector((state) => state.eventId);
  const dispatchDelete = useDispatch();
  const dispatchUpdate = useDispatch();

  const [input, setInput] = useState({ title: "", description: "" });

  const onChangeHandler = (event) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleEventDelete = () => {
    if (eventId) {
      dispatchDelete(actionCreator.eventDelete(eventId));
    }
    props.onHide();
  };
  const eventEditCalendar = () => {
    let data;
    if (input.title && input.description) {
      data = {
        title: input.title,
        description: input.description,
      };
    } else if (input.title && !input.description) {
      data = {
        title: input.title,
      };
    } else {
      data = {
        description: input.description,
      };
    }

    dispatchUpdate(actionCreator.editEvent(eventId, data));
    props.onHide();
  };
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete or Edit the Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          type="text"
          name="title"
          placeholder="new title"
          value={input.title}
          changed={onChangeHandler}
        />
        <Input
          type="text"
          name="description"
          placeholder="change description"
          value={input.description}
          changed={onChangeHandler}
        />

        <ModalButtonDiv>
          <Button
            disabled={!input.title && !input.description}
            onClick={eventEditCalendar}
            variant="warning"
          >
            Edit
          </Button>
        </ModalButtonDiv>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleEventDelete}>
          Delete
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;

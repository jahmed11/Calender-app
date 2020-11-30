import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as actionCreator from "../../store/actions/calenderActions";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import ImageUpload from "../../components/imageUpload";
import Button from "../../components/button";
import { projectStorage } from "../../firebase/firebase";
import { Wrapper } from "../../styled-component/styledComponnets";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const AddEvent = () => {
  const classes = useStyles();
  const creator = useSelector((state) => state.id);
  console.log(creator);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("");
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    date: "",
    state: "",
  });

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
  }, [file]);
  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  const inputChangeHandler = (event) => {
    setInputValue((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const imageChangeHandler = useCallback(
    (event) => {
      if (event.target.files && event.target.files.length === 1) {
        const image = event.target.files[0];
        setFile(image);
      }
    },
    [setFile]
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("eventCreation");
    const storageRef = projectStorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        console.log("uploading");
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const eventData = {
          state: select,
          title: inputValue.title,
          date: inputValue.date,
          image: url,
          description: inputValue.description,
          creator,
        };
        console.log(eventData);
        dispatch(actionCreator.createEvent(eventData));
      }
    );
  };

  return (
    <>
      <Wrapper>
        <form style={{ textAlign: "center" }} onSubmit={formSubmitHandler}>
          <FormControl className={classes.formControl}>
            <InputLabel>State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              onChange={handleSelectChange}
            >
              <MenuItem value="scheduled">Scheduled</MenuItem>
              <MenuItem value="deleted">Deleted</MenuItem>
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="under_review">Under Review</MenuItem>
            </Select>
          </FormControl>
          <Input
            type="text"
            placeholder="title"
            name="title"
            value={inputValue.title}
            changed={inputChangeHandler}
          />
          <Input
            type="date"
            placeholder="yyyy-mm-dd"
            name="date"
            value={inputValue.date}
            changed={inputChangeHandler}
          />
          <Textarea
            name="description"
            placeholder="description"
            value={inputValue.description}
            changed={inputChangeHandler}
          />
          <ImageUpload changed={imageChangeHandler} previewImage={preview} />
          <Button className="btn-outline-primary">Submit</Button>
        </form>
      </Wrapper>
    </>
  );
};

export default AddEvent;

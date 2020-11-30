import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionCreator from "../../store/actions/authActions";
import Input from "../../components/input";
import Button from "../../components/button";

import { ButtonDiv, Wrapper } from "../../styled-component/styledComponnets";

const Signup = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    setInputValue((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: inputValue.name,
      email: inputValue.email,
      password: inputValue.password,
    };
    dispatch(actionCreator.signup(userData));
  };

  return (
    <Wrapper>
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          placeholder="name"
          name="name"
          value={inputValue.name}
          changed={inputChangeHandler}
        />
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={inputValue.email}
          changed={inputChangeHandler}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={inputValue.password}
          changed={inputChangeHandler}
        />
        <ButtonDiv>
          <Button className="btn btn-primary">Signup</Button>
        </ButtonDiv>
      </form>
    </Wrapper>
  );
};

export default Signup;

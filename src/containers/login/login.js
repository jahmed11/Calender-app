import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions/authActions";
import Input from "../../components/input";
import Button from "../../components/button";
import styled from "styled-components";
import { ButtonDiv, Wrapper } from "../../styled-component/styledComponnets";

const P = styled.p`
  margin-top: 5px;
`;
const RouteButton = styled.button`
  border: none;
  background-color: white;
  color: blue;
`;
const Login = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

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
      email: inputValue.email,
      password: inputValue.password,
    };
    dispatch(actionCreators.login(userData));
  };

  return (
    <Wrapper>
      <form onSubmit={formSubmitHandler}>
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
          <Button className="btn btn-primary">Login</Button>
          <P className="p">If you don't have an account</P>
          <RouteButton>
            <Link to="/signup">Create a new account</Link>
          </RouteButton>
        </ButtonDiv>
      </form>
    </Wrapper>
  );
};

export default Login;

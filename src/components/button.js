import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
  width: 310px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const button = (props) => {
  console.log("button running");
  return (
    <FormButton className={props.className} type={props.type}>
      {props.children}
    </FormButton>
  );
};

export default React.memo(button);

import React from "react";
import { Label, InputDiv } from "../styled-component/styledComponnets";

const input = (props) => {
  return (
    <InputDiv className="form-group">
      <Label htmlFor={props.name}>{props.name}</Label>
      <input
        className="form-control"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.changed}
      />
    </InputDiv>
  );
};

export default React.memo(input);

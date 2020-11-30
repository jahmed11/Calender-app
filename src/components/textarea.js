import React from "react";
import { Label } from "../styled-component/styledComponnets";
const textarea = (props) => {
  return (
    <div>
      <Label htmlFor={props.name}>{props.name}</Label>
      <textarea
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.changed}
        rows="4"
        cols="37"
      />
    </div>
  );
};

export default textarea;

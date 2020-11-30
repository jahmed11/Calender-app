import styled from "styled-components";

export const Label = styled.label`
  display: block;
  text-transform: capitalize;
`;
export const InputDiv = styled.div`
  width: 310px;
  margin: 5px auto;
`;

export const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 10px;
  button: {
    border: none;
  }
`;

export const Wrapper = styled.div`
  margin-top: 100px;
`;

export const WrapperImg = styled.div`
  text-align: center;
`;

export const ImageUploaded = styled.img`
  display: block;
  width: 310px;
  height: 310px;
  border: 1px solid;
  text-align: center;
  margin: 10px auto;
`;

//app.js home page

export const Header = styled.div`
  width: 100%;
  background-color: black;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
export const NAV = styled.div`
  text-align: center;
  margin-top: 22px;
  a {
    margin: 0 15px;
    font-size: 20px;
    color: white;
    :hover {
      text-decoration: none;
      color: green;
    }
    .active {
      color: green;
    }
  }
`;
export const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

//calendar

export const CalendarWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const EventButton = styled.button`
  width: 310px;
  margin: 20px 5px;
  background-color: #007bff;
  border: none;
  padding: 11px 0;
  font-size: 24px;
  border-radius: 5;
  border-radius: 3px;
  :active {
    outline: none;
    border: none;
  }
`;

export const ModalButtonDiv = styled.div`
  text-align: center;
`;

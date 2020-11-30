import React, { useRef } from "react";
import {
  WrapperImg,
  ImageUploaded,
} from "../styled-component/styledComponnets";

const ImageUpload = (props) => {
  const filePicker = useRef();

  return (
    <WrapperImg>
      <input
        ref={filePicker}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={props.changed}
        style={{ display: "none" }}
      />
      <ImageUploaded src={props.previewImage} alt="preview" />

      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => filePicker.current.click()}
      >
        upload
      </button>
    </WrapperImg>
  );
};

export default React.memo(ImageUpload);

import React from "react";


function SaveBtn(props) {
  return (
    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success ml-1" {...props}  tabIndex="0">
      Save
    </button>
  );
}

export default SaveBtn;
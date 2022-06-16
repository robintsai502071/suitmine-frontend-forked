import React from 'react';

function Btn(props) {
  return (
    <>
      <button type="button" class="btn btn-primary widthbtn">
        {props.BtnText}
      </button>
    </>
  );
}

export default Btn;

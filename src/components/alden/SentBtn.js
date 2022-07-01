import React from 'react';

function SentBtn(props) {
  return (
    <>
      <button type="button" class="btn btn-primary widthbtn">
        {props.BtnText}
      </button>
    </>
  );
}

export default SentBtn;

//請先const BtnText
//BtnText: BtnText內的文字

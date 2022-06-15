import React from 'react';

const InputHere = (props) => {
  return (
    <>
      <div class="form-group">
        <div class="form-group">
          <label for="exampleInputEmail1">{props.labelName}</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={props.InputText}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
      </div>
    </>
  );
};

export default InputHere;

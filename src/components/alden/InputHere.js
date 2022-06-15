import React from 'react';
import Form from 'react-bootstrap/Form';

const InputHere = (props) => {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">{props.labelName}</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        className=" rounded-0 btnhere"
      />
    </>
  );
};

export default InputHere;

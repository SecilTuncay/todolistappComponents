import React from "react";

const button = (props) => (
    <button onClick={props.buttonClicked}>{props.children}</button>
)

export default button;
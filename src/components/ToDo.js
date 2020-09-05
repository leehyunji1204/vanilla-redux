import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClicks, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClicks}>DEL</button>
    </li>
  );
}
function mapDispatchProps(dispatch, onProps) {
  return {
    onBtnClicks: () => dispatch(remove(onProps.id)),
  };
}

export default connect(null, mapDispatchProps)(ToDo);

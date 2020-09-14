import React, { useState } from "react";
import { Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  search: {
    border: "1px solid black",
    borderRadius: "10px 10px 0 0",
    backgroundColor: "rgba(255, 255, 255, 0.15);",
    padding: "10px",
    margin: "1.5rem auto",
    display: "flex",
    flexDirection: "column",
    color: "white",
    width: "50%",
    minWidth: "300px"
  }
});

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const classes = useStyles();

  const onChange = e => {
    setText(e);
    getQuery(e);
  };

  return (
    <Input
      color="secondary"
      className={classes.search}
      placeholder="Search characters ..."
      onChange={e => onChange(e.target.value)}
      value={text}
    />
  );
};

export default Search;

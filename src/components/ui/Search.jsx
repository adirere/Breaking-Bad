import React, { useState } from "react";
import logo from "../../images/logo.png";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e);
    getQuery(e);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={e => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;

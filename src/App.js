import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const url = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(`${url}`);
        setItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  const getQuery = e => {
    setQuery(
      items.filter(item =>
        item.name.toLowerCase().includes(e.trim().toLowerCase())
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        aligItems: "center",
        justifyContent: "center"
      }}
    >
      <Header />
      <Search getQuery={getQuery} />
      <div style={{ margin: "auto", width: "95%" }}>
        <CharacterGrid isLoading={isLoading} items={items} query={query} />
      </div>
    </div>
  );
};

export default App;

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
        const result = await axios(`${url}?name=${query}`);
        setItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
      <Search getQuery={e => setQuery(e)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;

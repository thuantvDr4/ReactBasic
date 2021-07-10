import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
//
import { SearchBox } from "./libs/SearchBox.Component";
import { CardList } from "./components/card-list/CardList.Component";

function App() {
  const _MonsterFilter = useRef(null);
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
        _MonsterFilter.current = users;
      });
  }, []);

  useEffect(() => {
    console.log("[]---", _MonsterFilter.current);
    if (searchText) {
      const _filter = _MonsterFilter.current.filter((monster) =>
        monster.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setMonsters(_filter);
    } else {
      setMonsters(_MonsterFilter.current);
    }
  }, [searchText]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder={"search monster..."}
        handleChange={(text) => setSearchText(text)}
      />
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;

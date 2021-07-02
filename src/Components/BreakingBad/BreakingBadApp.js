import React, { useState, useEffect } from "react";
import "./BreakingBadApp.css";
import Header from "./Header";
import CharacterGrid from "./CharacterGrid";
import axios from "axios";
import Search from "./Search.js";
import Footer from "../Footer";

const BreakingBadApp = () => {
  // const mystyle = {
  //   backgroundImage: ` url("images/bg.jpg")`,
  //   backgroundPosition: `center`,
  //   backgroundSize: `cover`,
  //   backgroundRepeat: `no-repeat`,
  //   height: `100vh`,
  //   color: `#fff`,
  // };

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='bba-div'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      {/* <Footer /> */}
    </div>
  );
};

export default BreakingBadApp;

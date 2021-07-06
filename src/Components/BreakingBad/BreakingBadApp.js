import React, { useState, useEffect } from "react";
import styles from "./BreakingBad.module.css";
import Header from "./Header";
import CharacterGrid from "./CharacterGrid";
import axios from "axios";
import Search from "./Search.js";
import cx from "classnames";

const BreakingBadApp = () => {
  const mystyle = {
    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXa9U255tCrntxvL9dRk-fqI0Zk-d05SbRQ&usqp=CAU)`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    height: `100vh`,
    color: `#fff`,
  };

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
    <div className={cx(styles.div, styles.body)} style={mystyle}>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      {/* <Footer /> */}
    </div>
  );
};

export default BreakingBadApp;

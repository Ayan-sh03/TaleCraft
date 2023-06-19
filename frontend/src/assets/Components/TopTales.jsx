//display 30 latest tails

import axios from "axios";
import React, { useEffect, useState } from "react";
import Tale from "./Tale";

const TopTales = () => {
  const [tales, setTales] = useState([]);

  const fetchTales = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/tales/");
      const { finaltale } = data;
      // console.log(finaltale);
      setTales(finaltale);
    } catch (e) {
      console.error(e);
    }
  };

  const renderTails = () => {
    return tales.slice(0, 6).map((tale) => (
      // useCount.current+=1;

      <Tale key={tale.id} title={tale.title} description={tale.description} />
    ));
  };

  useEffect(() => {
    fetchTales();
  }, []);

  return (
    <main>
      <h1>Trending Tales</h1>
      <div className="grid">{renderTails()}</div>
    </main>
  );
};

export default TopTales;

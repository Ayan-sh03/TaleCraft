import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Tale from "./Tale";

const AllTales = () => {
  const [tales, setTales] = useState([]);
  const [count, setCount] = useState(0);
  const useCount = useRef(count);

  const fetchTales = async () => {
    const { data } = await axios.get("http://localhost:3000/api/v1/tales/");
    const { finaltale } = data;
    // console.log(finaltale);
    setTales(finaltale);
  };

  useEffect(() => {
    fetchTales();
  }, []);

  const renderTails = () => {
    return tales.slice(0, 6).map((tale) => (
      // useCount.current+=1;

      <Tale key={tale.id} title={tale.title} description={tale.description} />
    ));
  };

  // console.log(useCount);

  return (
    <div className="allTales" id="allTales">
      <h1>Latest Tales</h1>
      <div className="grid">{renderTails()}</div>
    </div>
  );
};

export default AllTales;

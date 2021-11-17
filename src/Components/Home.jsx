import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Obj from "./ArrayOfObject";
import "../App.css";

const Home = () => {
  const [data, setData] = useState(Obj);
  console.log(data);

  useEffect(() => {
    setData(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
            {data.map((item) => (
              <div className="col" key={item.id}>
                  <Link to={`/user/${item.id}/${item.title}/${item.discraption}`}>
                      <img src={item.img} alt={item.title} />
                  </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;

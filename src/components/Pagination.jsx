import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products/");
    const responce = await data.json();
    setList(responce.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_SIZE = 5;

  const totalProducts = list.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  return (
    <div>
      <div className="flex">
        {[...Array(noOfPages).keys()].map((n) => {
          return (
            <p
              onClick={() => handlePageChange(n)}
              className="cursor-pointer border w-5 p-1 h-7 m-1 "
              key={n}
            >
              {n}
            </p>
          );
        })}
      </div>

      {list.slice(start, end).map((item, index) => (
        <div className="flex flex-row" key={index}>
          <div className="border h-70 w-60 p-3 m-5 flex flex-col justify-center items-center">
            <img className="h-50 w-50" src={item.images} />
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pagination;

/*
import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const PAGE_SIZE = 5;

  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products/");
      const json = await data.json();
      setData(json.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = data.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = PAGE_SIZE * currentPage;
  const end = start + PAGE_SIZE;

  const handleClick = (n) => {
    setCurrentPage(n);
  };

  return (
    <div>
      <Card
        noOfPages={noOfPages}
        data={data}
        start={start}
        end={end}
        product={data}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;

import React from "react";
const Card = ({ noOfPages, data, start, end, handleClick }) => {
  return (
    <div>
      {[...Array(noOfPages).keys()].map((n) => {
        return (
          <p onClick={() => handleClick(n)} className="btn">
            {n}
          </p>
        );
      })}

      {data.slice(start, end).map((product) => {
        return (
          <div className="card" key={product.id}>
            <span className="p-title">{product.title}</span>
            <img className="p-img" src={product.images} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;

*/

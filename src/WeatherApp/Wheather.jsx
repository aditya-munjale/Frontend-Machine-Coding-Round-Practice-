import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";

const Wheather = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl text font-bold mt-5 mb-10">Wheather ForeCast</h1>
      <Input />
      <Button value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
};

export default Wheather;

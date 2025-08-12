import React from "react";
import { BgImg } from "./constants";
import { SearchBar } from "./SearchBar";

const GPTsearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="" src={BgImg}></img>
      </div>
      <SearchBar />
    </div>
  );
};

export default GPTsearch;

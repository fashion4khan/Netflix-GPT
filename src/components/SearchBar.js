import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";
import lang from "./langConstants";
import { useSelector } from "react-redux";

export const SearchBar = () => {
  const langKey = useSelector(store => store.lang.lang) || "en";
  return (
    <div className="flex justify-center pt-[10%]">
      <form className="w-1/2 bg-black flex items-center p-2 rounded-md">
        <input
          type="text"
          placeholder={lang[langKey]?.PlaceHolder || ""}
          className="flex-grow px-3 py-2 bg-black text-white border border-white rounded-md outline-none placeholder-gray-400"
        />
        <button
          type="submit"
          className="ml-3 flex items-center gap-1 px-3 py-2 bg-red-700 text-white text-sm rounded-md border border-white hover:bg-red-800 transition-colors"
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
          {lang[langKey]?.name || ""}
        </button>
      </form>
    </div>
  );
};

import React from "react";
import { RiSearchLine } from "@remixicon/react";

function Search({ searchInput, handleChange, fetchUserData, handleKeyDown }) {
  return (
    <div className="flex items-center font-mono text-white max-sm:w-1/2">
      <input
        type="text"
        placeholder="search github user..."
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="px-1.5 py-1.5 text-xs rounded-md border-2 border-white outline-none"
      />
      <button className="ml-0.5 cursor-pointer" onClick={fetchUserData}>
        <RiSearchLine />
      </button>
    </div>
  );
}

export default Search;

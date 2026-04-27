import React from "react";
import Search from "./Search";
import HeaderTitle from "./HeaderTitle";

function Header({ searchInput, fetchUserData, handleChange, handleKeyDown }) {
  return (
    <div className="bg-slate-700 h-15 shadow-lg flex justify-around items-center">
      <HeaderTitle />
      <Search
        searchInput={searchInput}
        fetchUserData={fetchUserData}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Header;

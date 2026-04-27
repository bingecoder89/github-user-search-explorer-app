import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import ErrorMessage from "./components/ErrorMessage";
import UserCard from "./components/UserCard";
import Loading from "./components/Loading";
import Header from "./components/Header";
const token = import.meta.env.VITE_GITHUB_TOKEN;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setUserData(null);
    setError(null);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchUserData();
    }
  };
  const fetchUserData = async () => {
    if (!searchInput.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${searchInput}`);
      if (!res.ok) {
        throw new Error("Oops! Something went wrong.");
      }
      const data = await res.json();
      console.log(data);
      setUserData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="h-full">
      <Header
        searchInput={searchInput}
        fetchUserData={fetchUserData}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <ErrorMessage error={error} />
      <Loading loading={loading} />
      <UserCard userData={userData} />
    </div>
  );
}
export default App;

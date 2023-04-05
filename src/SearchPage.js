import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term);
  const data = response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            alt=""
            src="https://www.wprost.pl/_thumb/eb/0a/916ecd6cd846ccd9b4bbc8bbe1ea.jpeg"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hiddeButtons />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;

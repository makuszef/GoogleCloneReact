import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { acitonTypes } from "./reducer";
function Search({ hideButtons }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("button", input);

    dispatch({
      type: acitonTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search"); // push to search page, redirect
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            {" "}
            {/*on enter triggers*/}
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            {" "}
            {/*on enter triggers*/}
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;

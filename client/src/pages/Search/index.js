import React, { useEffect } from "react";
import InputCard from "../../components/SearchCard";
import ResultsField from "../../components/ResultsField";
import { useStoreContext } from "../../utils/GlobalState";

function Search() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    console.log("LOADED");
  }, []);

  return(
    <div className="container-xl mb-3">
      <InputCard />

      <ResultsField results={state.results} button="Save"/>

    </div>
  )
};

export default Search;

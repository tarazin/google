import React, { useEffect } from "react";
import ResultsField from "../../components/ResultsField";
import { useStoreContext } from "../../utils/GlobalState";
import API from '../../utils/API';
import { SET_SAVED_RESULTS } from '../../utils/actions';

function Saved() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getBooks().then(res => {
      console.log(res.data);
      dispatch({
        type: SET_SAVED_RESULTS,
        savedResults: res.data
      });
    })
  }, []);

  return(
    <div className="container-xl mb-3">
      <ResultsField results={state.saved} button="Delete" />
    </div>
  )
};

export default Saved;

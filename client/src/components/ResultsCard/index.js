import React from "react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { SET_SAVED_RESULTS } from "../../utils/actions";

function ResultsCard({ index, result, button }) {
  const [state, dispatch] = useStoreContext();


  function click(e) {
    e.preventDefault();
    if (button === "Save")
      save();
    else if (button === "Delete")
      remove();
  }

  function remove() {
    console.log("REMOVING", result);
    console.log(result._id);
    API.deleteBook(result._id).then(res => {
      console.log(res);
      API.getBooks().then(res => {
        console.log(res.data);
        dispatch({
          type: SET_SAVED_RESULTS,
          savedResults: res.data
        });
      });
    });
  }



  function save() {
    console.log("SAVING", result);
    API.saveBook(result).then(res => {
      console.log(res);
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-10">
            <h4>{index}. {result.title}</h4>
            <p>Author(s): {result.authors}</p>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-info btn-sm m-2"><a href={result.link} className="text-white">View</a></button>
            <button type="button" className="btn btn-info btn-sm m-2" onClick={(e) => click(e)}>{button}</button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={result.image} className="card-img" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">{result.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsCard;

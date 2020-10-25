import React, { useEffect } from "react";
import ResultsCard from "../ResultsCard";

function ResultsField(props) {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3>Books 📗</h3>
      </div>
      <div className="card-body">
        {
          props.results.map((result, index) => {
            return <ResultsCard key={index} index={index + 1} result={result} button={props.button}/>
          })
        }
      </div>
    </div>
  )
};

export default ResultsField;
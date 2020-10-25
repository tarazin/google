import React, { useRef } from "react";
import API from "../../utils/API"
import { SET_SEARCH_RESULTS } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

function InputCard() {
  const [state, dispatch] = useStoreContext();

  const inputRef = useRef();

  function search(e) {
    e.preventDefault();
    API.getSearch(inputRef.current.value).then(res => {
      var books = res.data.items.map(book => {
        return ({
          authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(" ") : "",
          description: book.volumeInfo.description ? book.volumeInfo.description : "",
          image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
          link: book.volumeInfo.previewLink ? book.volumeInfo.previewLink : "",
          title: book.volumeInfo.title ? book.volumeInfo.title : ""
        });
      });
      dispatch({
        type: SET_SEARCH_RESULTS,
        searchResults: books
      });
    });
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2>Book Search 👀</h2>
        <p>Book 🤓</p>
        <input ref={inputRef} className="form-control form-control-lg" type="text" placeholder="Book Search" />
        <button type="button" className="btn btn-info btn-sm mr-auto mt-3" onClick={(e) => search(e)}>Search</button>
      </div>
    </div>
  )
}

export default InputCard;

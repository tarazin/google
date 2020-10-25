import axios from "axios";

export default {
  // Here ya boy it's gonna get ALL the books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // here it will retrieve books
  getSearch: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },
  // this will hopefully delete books
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves all the books to database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoutButton from "../Logout/Logout";
import "./AuthorPage.css";
import { useNavigate } from "react-router-dom";

const AuthorPage = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [bookData, SetBooks] = useState([]);

  // &filter=free-ebooks

  const GetData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=` +
          query +
          `&orderBy=newest&maxResults=40
          `
      );
      SetBooks(response.data.items);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    GetData();
  }, [query]);

  const navigate = useNavigate();

  var navigatebykey = (evt) => {
    if (evt.key === "Enter" && query) navigate("cardpage", { state: bookData });
  };

  return (
    <>
      <div className="searchContainer">
        <div className="wrapperSearch">
          <h1>Google Book</h1>
          <form className="search__bar">
            <input
              type="text"
              placeholder="Search for an author "
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyPress={navigatebykey}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
            <div className="listerizo">
              {query
                ? bookData.map((item) => {
                    return (
                      <>
                        {item.volumeInfo.authors ? (
                          // <a href="cardpage">
                          <div className="searchList">
                            {item.volumeInfo.authors}
                          </div>
                        ) : // </a>
                        null}
                      </>
                    );
                  })
                : null}
            </div>
          </form>
        </div>
        <div className="logout">
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default AuthorPage;

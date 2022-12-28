import React, { useEffect, useState } from "react";

import "./AuthorPage.css";

import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/Logout/Logout";

import { getBooksByQuery } from "../../actions/books";

// TODO: use memo here
const AuthorPage = () => {
  const [query, setQuery] = useState("");
  const [bookData, SetBooks] = useState([]);

  // &filter=free-ebooks

  useEffect(() => {
    // TODO: use usecallback here
    const getData = async () => {
      try {
        const response = await getBooksByQuery(query);
        SetBooks(response.data.items);
      } catch (err) {
        console.log(err);
      }
    };

    query &&
      setTimeout(() => {
        getData();
      }, 3000);
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
                ? bookData.map((item, index) => {
                    return (
                      <>
                        {item.volumeInfo.authors ? (
                          <div className="searchList" key={index}>
                            {item.volumeInfo.authors}
                          </div>
                        ) : null}
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

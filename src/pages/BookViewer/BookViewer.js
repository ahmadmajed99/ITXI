import React from "react";
import "./BookViewer.css";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const BookViewer = () => {
  const { state } = useLocation();

  let isbn_numb = state.volumeInfo.industryIdentifiers[0].identifier;

  let thumbnail =
    state.volumeInfo.imageLinks && state.volumeInfo.imageLinks.smallThumbnail;

  let ISBN_num = isbn_numb;

  const canvasRef = useRef();
  const [loaded, setLoaded] = useState(false);

  function alertNotFound() {
    alert("could not embed the book!");
  }

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasRef.current);
        viewer.load("ISBN:" + ISBN_num, alertNotFound);
      } else {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);
          window.viewer = viewer;
          viewer.load("ISBN:" + ISBN_num, alertNotFound);
        });
      }
    }
  }, [loaded, ISBN_num]);

  return (
    <div className="viewerContainer">
      <div className="viewerProps">
        <img src={thumbnail} alt="" className="viewerImage" />
        <div className="detailsViewer">
          <h1>{state.volumeInfo.title}</h1>
          <h3>{state.volumeInfo.authors}</h3>
          <span>{state.volumeInfo.publisher}</span>
          <div> Language: {state.volumeInfo.language}</div>
          <div>{state.volumeInfo.publishedDate}</div>
          <div>{state.volumeInfo.pageCount} Pages</div>
        </div>
        <div className="download-links">
          <a href={state.accessInfo.epub.acsTokenLink}>
            <button>Download as epub</button>
          </a>
          <a href={state.accessInfo.pdf.acsTokenLink}>
            <button>Download as pdf</button>
          </a>
        </div>
      </div>
      {loaded ? (
        <div
          ref={canvasRef}
          id="viewerCanvas"
          className="overlay-inner"
          // style="width: 600px; height: 500px"
        ></div>
      ) : (
        "Script not loaded"
      )}
    </div>
  );
};

export default BookViewer;

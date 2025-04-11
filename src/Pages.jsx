import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import doubleLinkedList from "./doubleLinkedList";
import "./Pages.css";

const Pages = () => {
  const pages = new doubleLinkedList();
  const navigate = useNavigate();

  pages.append("https:/youtube.com");
  pages.append("https://facebook.com");
  pages.append("https://instagram.com");
  pages.append("https://campus.uao.virtual.com");
  pages.append("https://stake.com.co");

  const [currentPage, setCurrentPage] = useState(pages.head);

  const back = () => {
    navigate("/", { replace: true });
  };

  const nextPage = () => {
    if (currentPage && currentPage.next) {
      setCurrentPage(currentPage.next);
    }
  };

  const previousPage = () => {
    if (currentPage && currentPage.prev) {
      setCurrentPage(currentPage.prev);
    }
  };

  return (
    <div className="pages-container">
      <h1 className="pages-title">Navegador</h1>
      <p className="page-display">{currentPage ? currentPage.value : "no page"}</p>
      <div className="pages-buttons">
        <button onClick={previousPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
        <button onClick={back} className="volver">Spotify</button>
      </div>
    </div>
  );
};

export default Pages;

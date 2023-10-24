import React from "react";
import NotFound from "../Img/not_found.svg";
import './NotFoundPage.scss';

function NotFoundPage() {
  return (
    <>
      <div className="container">
        <img className="error" src={NotFound} alt="Not found" />
      </div>
    </>
  );
}

export default NotFoundPage;

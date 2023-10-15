import React from "react";
import NotFound from "./Img/not_found.svg";

function NotFoundPage() {
  return (
    <>
      <div>NotFoundPage</div>
      <div>
        <img src={NotFound} alt="Not found" />
      </div>
    </>
  );
}

export default NotFoundPage;

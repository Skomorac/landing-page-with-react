import React from "react";
import "../../styles/jumbotron.css"

const Jumbotron = () => {
  return (
    <div class="py-1 px-3 mb-4 bg-light" id="jumbotronElmnt">
      <div class="container-fluid py-1">
        <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
        <p>
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button class="btn btn-primary btn-lg mb-5" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;

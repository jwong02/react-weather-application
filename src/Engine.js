import React from "react";
import "./Engine.css";

export default function Engine() {
  return (
    <form id="search-form" class="mb-3 mt-2">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="search for a city"
            autocomplete="off"
            autoFocus="on"
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-info w-100" />
        </div>
      </div>
    </form>
  );
}

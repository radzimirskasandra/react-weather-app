import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-4">
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Type a city"
              aria-label="Type a city"
              autoComplete="off"
              autoFocus="on"
              className="form-control border-black border-1 mb-2"
            />
          </div>

          <div className="col-sm-2">
            <input
              type="submit"
              value="Search"
              className="search-button btn btn-light btn-sm shadow-sm border-black border-1 mb-2"
            />
          </div>
          <div className="col-sm-2">
            <button
              id="button"
              type="button"
              className="current-button btn btn-dark btn-sm"
            >
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

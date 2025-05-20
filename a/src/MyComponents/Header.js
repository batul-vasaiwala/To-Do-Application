import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <div>
      {/* Bootstrap navbar with custom styling */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          {/* Brand name coming from props */}
          <a className="navbar-brand fw-bold fs-4" href="#">
            {props.title}
          </a>

          {/* Toggle button for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content: nav links and optional search */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Navigation links */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tasks
                </a>
              </li>
            </ul>

            {/* Conditional rendering of search bar */}
            {props.searchBar ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search your todos..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-light btn-sm" type="submit">
                  Search
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

// Type checking with PropTypes
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};

// Default props if not passed from parent
Header.defaultProps = {
  title: 'My To-Do App',
  searchBar: true,
};

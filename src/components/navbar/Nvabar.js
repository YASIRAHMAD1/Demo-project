import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {/* <!-- START Header --> */}
      <header className="header position-relative">
        {/* <!-- START Navigation --> */}
        <div className="navigation-bar" id="affix">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light navbar-reset">
              <Link className="logo" to="?a=home">
                <img className="logo-default" src="img/logo-light.png" alt="Bootbox" />
              </Link>
              <button className="navbar-toggler border-0 p-0" type="button" data-toggle="collapse" data-target="#theme-navbar" aria-controls="theme-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-lines"></span>
              </button>
              <div className="collapse navbar-collapse" id="theme-navbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/faq">FAQs</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/rules">Terms</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/support">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                  </li>
                </ul>
                <div className="my-3 my-lg-0">
                  <Link to="/login" className="btn btn-custom">Login</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- END Navigation --> */}
      </header>
    </div>
  );
}

export default Navbar;

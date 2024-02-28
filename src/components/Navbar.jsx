import React from "react";
import logo from "../assets/hm-logo.png";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import MainBody from "./MainBody";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="main">
          <div className="service">
            <Link className="service-link" to="">
              Customer Service
            </Link>
            <Link className="service-link" to="">
              Newsletter
            </Link>
            <Link className="service-link" to="">
              Find A Store
            </Link>
          </div>

          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="icons">
            <span className="material-symbols-outlined">person</span>
            <Link className="icons-link" to="">
              Sign in
            </Link>
            <span className="material-symbols-outlined">favorite</span>
            <Link className="icons-link" to="">
              Favorite
            </Link>
            <span className="material-symbols-outlined">shopping_bag</span>
            <Link className="icons-link" to="">
              Shopping bag(0)
            </Link>
          </div>
        </div>
        <div className="secondary-nav">
          <div className="links">
            <Link className="secondary-nav-links">Ladies</Link>
            <Link className="secondary-nav-links">Men</Link>

            <Link className="secondary-nav-links">Baby</Link>
            <Link className="secondary-nav-links">Kids</Link>
            <Link className="secondary-nav-links">H&M HOME</Link>

            <Link className="secondary-nav-links">Sale</Link>
          </div>
          <div className="search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>

      <MainBody/>
      <Footer/>
    </>
  );
}

export default Navbar;

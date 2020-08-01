import React from "react";
import logo from "../Image/nwwww.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="header" class="fixed-top">
          <div class="container">
            <div class="logo float-left">
              <Link to="/intro" class="scrollto">
                <img
                  src={logo}
                  alt=""
                  class="img-fluid"
                  style={{
                    width: "150px",
                    maxHeight: "120px",
                    marginTop: "-15%",
                  }}
                />
              </Link>
            </div>
            <nav class="main-nav float-right d-none d-lg-block">
              <ul>
                <li class="active">
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/team">Team</Link>
                </li>

                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;

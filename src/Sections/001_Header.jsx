import React from "react";
import logo from "../Image/nwwww.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="header" class="fixed-top">
          <div class="container">
            <div class="logo float-left">
              <a href="#intro" class="scrollto">
                <img src={logo} alt="" class="img-fluid" style={{width: "150px",maxHeight:"120px",marginTop:"-15%"}}/>
              </a>
            </div>
            <nav class="main-nav float-right d-none d-lg-block">
              <ul>
                <li class="active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                {/*<li>
                  <a href="#portfolio">Portfolio</a>
                </li>*/}
                <li>
                  <a href="#team">Team</a>
                </li>
                {/*  <li class="drop-down">
                  <a href="">Drop Down</a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li class="drop-down">
                      <a href="#">Drop Down 2</a>
                       <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                   </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 5</a>
                    </li>
                  </ul>
                </li>*/}
                <li>
                  <a href="#contact">Contact Us</a>
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
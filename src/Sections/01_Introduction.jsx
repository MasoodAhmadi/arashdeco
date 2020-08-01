import React from "react";
import intro from "../Image/qq1.png";
import { Link } from "react-router-dom";

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <section id="intro" class="clearfix">
          <div class="container">
            <div class="intro-img">
              <img src={intro} alt="" class="img-fluid" />
            </div>

            <div class="intro-info">
              <h2>
                We provide
                <br />
                <span>Decoration</span>
                <br />
                for your Weddings!
              </h2>
              <div>
                <Link to="/about" class="btn-get-started scrollto">
                  Get Started
                </Link>
                <Link to="/services" class="btn-services scrollto">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Introduction;

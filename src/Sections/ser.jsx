import React from "react";
import { Image_1 } from "../Image/q1.png";
//import { Card, Button, Col, Container, Row, Image } from "react-bootstrap";

class Services extends React.Component {
  render() {
    return (
      <div>
        <section id="services" class="section-bg">
          <div class="container">
            <header class="section-header">
              <h3>Services</h3>
              <p>we provide the fasted and best quality design for you</p>
            </header>
            <div className="row">
              <div className="logo">
                <img src={Image_1} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Services;

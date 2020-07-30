import React from "react";
import { Card } from "react-bootstrap";
import video from "../Image/video-1595268422.mp4";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 footer-info">
                  <h3>Arash Decor</h3>
                  <p>
                    This business is running only by Arash Ahmadi, owner and
                    designer from last 15 year experience in tailoring cloth to
                    providing decoration to wedding parties and other related
                    birthday parties near by location and address is mention to
                    web page, official hours and mobile number is written too.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    Hämeentie 37 <br />
                    00500 HELSINKI
                    <br />
                    FINLAND <br />
                    <strong>Phone:</strong> +358 442738577
                    <br />
                    <strong>Email:</strong> arashahmadi028@gmail.com
                    <br />
                  </p>

                  <div class="social-links">
                    <a href="#" class="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#" class="google-plus">
                      <i class="fa fa-google-plus"></i>
                    </a>
                    <a href="#" class="linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="video">
                  <Card.Body stlye={{ width: "100px" }}>
                    <video
                      muted
                      src={video}
                      autoPlay="true "
                      style={{ height: "200px", width: "240px" }}
                    />
                  </Card.Body>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong>Arash Decor</strong>. All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a>Masood Ahmadi</a>
            </div>
          </div>
        </footer>
        <div ref={this.myRef} />
      </div>
    );
  }
}
export default Footer;

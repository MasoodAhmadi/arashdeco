import React from "react";
import team2 from "../Image/pic1.jpg";
import team1 from "../Image/pic5.jpg";
import team3 from "../Image/pic3.jpg";
import team4 from "../Image/pic4.jpg";
import { Link } from "react-router-dom";

class Team extends React.Component {
  render() {
    return (
      <div>
        <section id="team">
          <div class="container">
            <div class="section-header">
              <h3>Team</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6 wow fadeInUp">
                <div class="member">
                  <img src={team1} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Haris Presidenti</h4>
                      <span>Song organizer</span>
                      <div class="social">
                        <Link to="">
                          <i class="fa fa-twitter"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-facebook"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-google-plus"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="member">
                  <img src={team2} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Arash Ahmadi</h4>
                      <span>CEO</span>
                      <div class="social">
                        <Link to="">
                          <i class="fa fa-twitter"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-facebook"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-google-plus"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="member">
                  <img src={team3} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Habil Ahmadi</h4>
                      <span>Assistant</span>
                      <div class="social">
                        <Link to="">
                          <i class="fa fa-twitter"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-facebook"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-google-plus"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="member">
                  <img src={team4} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Jamil Ahmadi</h4>
                      <span>Camera man</span>
                      <div class="social">
                        <Link to="">
                          <i class="fa fa-twitter"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-facebook"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-google-plus"></i>
                        </Link>
                        <Link to="">
                          <i class="fa fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Team;

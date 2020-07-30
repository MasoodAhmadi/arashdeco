import React from "react";
//import About from "../img/about-img.svg";
import About from "../Image/about1.jpg";

//import Extra from "../img//about-extra-1.svg";
import Extra from "../Image//about2.jpg";

//import Extra2 from "../img/about-extra-2.svg";
import Extra2 from "../Image/about3.jpg";

class AboutUs extends React.Component {
  render() {
    return (
      <main id="main">
        <div id="about">
          <div class="container">
            <header class="section-header">
              <h3>About Us</h3>
              <p>
                Here are a few wedding decoration ideas that are totally low
                maintenance, but beautiful and impactful.
              </p>
            </header>

            <div class="row about-container">
              <div class="col-lg-6 content order-lg-1 order-2">
                <p>
                  Depending on your contract, there might be a few limit when it
                  comes to the type of wedding decorations you can bring in or
                  reshaping you can make to the space. For example, a museum or
                  historic wedding probably won't be good with altering or
                  damaging their walls in any way.
                </p>

                <div class="icon-box wow fadeInUp">
                  <div class="icon">
                    <i class="fa fa-shopping-bag"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Logrus ry</a>
                  </h4>
                  <p class="description">
                    Designing and creating a dress is remarkably simple, and can
                    be done by anyone. As long as you have an idea, some paper,
                    some fabric, something to mark it with, something to cut it
                    with, and something with which to sew it together, you can
                    too!
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div class="icon">
                    <i class="fa fa-photo"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Ventage Design</a>
                  </h4>
                  <p class="description">
                    Fashion design is an exciting, constantly evolving field. It
                    also takes a lot of work, and can be incredibly competitive.
                    If you want to become a successful fashion designer, you
                    have a long road ahead of you.
                  </p>
                </div>

                <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div class="icon">
                    <i class="fa fa-bar-chart"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Arash Prospective</a>
                  </h4>
                  <p class="description">
                    This is where things can get a little complicated. But don't
                    worry, as long as you pin things together before you start
                    sewing, you'll be fine!
                  </p>
                </div>
              </div>

              <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={About} class="img-fluid" alt="" />
              </div>
            </div>

            <div class="row about-extra">
              <div class="col-lg-6 wow fadeInUp">
                <img src={Extra} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                <h4>Logrus ry - Nonprofit Organization</h4>
                <p>
                  Logrus ry is an organization that encourages young people in
                  various initiatives: education, culture and sports. We strive
                  to help young people make their own lives more interesting. We
                  open up perspective. It is difficult to describe all the
                  activities of our organization. The organization regularly
                  creates various projects in which anyone can participate. We
                  do various interesting things for example: we participate in
                  various festivals, seminars, competitions, clubs and summer
                  camps are celebrated; we organize youth art groups, trips,
                  concerts and evenings, our videos on different things and the
                  dream would be to set up your own youth TV program.
                </p>
                <p>
                  If you want to suggest cooperation and share something
                  important with us, or if you have interesting ideas,
                  enthusiasm and you want to try yourself in something new, if
                  you are interested in our activities and have questions, write
                  to us by e-mail: info@logrus.fi The office is located at
                  Haapaniemenkatu 7-9 B 1223, 00530 Helsinki, m. Hakaniemi.
                </p>
              </div>
            </div>

            <div class="row about-extra">
              <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
                <img src={Extra2} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                <h4>Arash Ompelimo</h4>
                <p>
                  Depending on you custom size, I can provide your choice cloth
                  design within a few days with suitable price, special offer to
                  new customer for the first visit to our shop
                </p>
                <p>
                  Established in 2010, Arash Ompelimo Custom Tailors is the
                  first few tailors in Helsinki to offer custom-tailored suits
                  and wedding suits. Our experienced and knowledgeable tailors
                  are meticulous in their workmanship and quality control. Arash
                  Ompelimo's Custom Tailors carries the finest and most
                  practical fabrics in a wide range of styles and designs for
                  our customers to choose from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default AboutUs;

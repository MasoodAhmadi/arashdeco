import React from "react";
import { Link } from "react-router-dom";

class WhyChooseUs extends React.Component {
  render() {
    return (
      <div>
        <section id="why-us" class="wow fadeIn">
          <div class="container">
            <header class="section-header">
              <h3>Why choose us?</h3>
              <p>
                Since we are providing the relevant and proper valued decoration
                at your requirement, please have a look what so far we have
                manage to design and implement best decoration to our customers
              </p>
            </header>

            <div class="row row-eq-height justify-content-center">
              <div class="col-lg-4 mb-4">
                <div class="card wow bounceInUp">
                  <i class="fa fa-diamond"></i>
                  <div class="card-body">
                    <h5 class="card-title">to be added</h5>
                    <p class="card-text">writing statement left</p>
                    <Link to="" class="readmore">
                      Read more{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card wow bounceInUp">
                  <i class="fa fa-language"></i>
                  <div class="card-body">
                    <h5 class="card-title">to be added</h5>
                    <p class="card-text">writing statement left</p>
                    <Link to="" class="readmore">
                      Read more{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card wow bounceInUp">
                  <i class="fa fa-object-group"></i>
                  <div class="card-body">
                    <h5 class="card-title">to be added</h5>
                    <p class="card-text">writing statement left. </p>
                    <Link to="" class="readmore">
                      Read more{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="row counters">
              <div class="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">100</span>
                <p>Customer</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">250</span>
                <p>Task</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1,364</span>
                <p>Hours Of Decoration so far</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">7</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default WhyChooseUs;

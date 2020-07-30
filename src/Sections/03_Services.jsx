import React from "react";
import { CardGroup, Card } from "react-bootstrap";

import Image_1 from "../Image/bbb.jpg";
import Image_2 from "../Image/ffff.jpg";
import Image_3 from "../Image/kkkkk.jpg";
import Image_4 from "../Image/image1.jpg";
import Image_5 from "../Image/image2.jpg";
import Image_6 from "../Image/image3.jpg";

class Services extends React.Component {
  render() {
    return (
      <main id="main">
        <section id="services" class="section-bg">
          <div class="container">
            <br />
            <header class="section-header">
              <h3>Services</h3>
              <p>we provide the fasted and best quality design for you</p>
            </header>
            {/* <div className="row">
              <div className="logo">
                <img src={Image_1} alt="" />
              </div>
              
    </div>*/}

            <CardGroup>
              <Card>
                <Card.Img variant="top" src={Image_1} />
                <Card.Body>
                  <Card.Title>Purple Design</Card.Title>
                  <Card.Text>
                    The stage requires very simple to decor for wedding and any
                    private family parties, requests can be implemented to add
                    by client requirements.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Year 2019</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Image_2} />
                <Card.Body>
                  <Card.Title>Green & White Design</Card.Title>
                  <Card.Text>
                    The table are manage and organized in manner with different
                    design and decoration, it can be added more materials in the
                    table also this requires client's request.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Year 2019</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Image_3} />
                <Card.Body>
                  <Card.Title>Red & White Design</Card.Title>
                  <Card.Text>
                    The table are manage and organized in manner with different
                    design and decoration, it can be add more materials in the
                    table also this requires client's request.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Year 2019</small>
                </Card.Footer>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={Image_4} />
                <Card.Body>
                  <Card.Title>Purple Design</Card.Title>
                  <Card.Text>
                    The table are manage and organized in manner with different
                    design and decoration, it can be add more materials in the
                    table also this requires client's request.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Year 2019</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Image_5} />
                <Card.Body>
                  <Card.Title>Green & White Design</Card.Title>
                  <Card.Text>
                    The stage requires very simple to decor for wedding and any
                    private family parties, requests can be implemented to add
                    by client requirements.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Year 2019</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Image_6} />
                <Card.Body>
                  <Card.Title>Red & White Design</Card.Title>
                  <Card.Text>
                    The stage requires very simple to decor for wedding and any
                    private family parties, requests can be implemented to add
                    by client requirements.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Year 2019</small>
                </Card.Footer>
              </Card>
            </CardGroup>
            <br />
          </div>
        </section>
      </main>
    );
  }
}
export default Services;

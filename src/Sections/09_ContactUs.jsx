import React from "react";
import { Form } from "react-bootstrap";

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <section id="contact">
          <div class="container-fluid">
            <div class="section-header">
              <h3>Contact Us</h3>
            </div>

            <div class="row wow fadeInUp">
              <div class="col-lg-6">
                <div class="map mb-4 mb-lg-0">
                  <iframe
                    title="a sample video"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.506238837833!2d24.96206131560245!3d60.18890464884753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920979389743e3%3A0x8eb2bed06f6d54da!2sH%C3%A4meentie%2037%2C%2000500%20Helsinki!5e0!3m2!1sen!2sfi!4v1595014637930!5m2!1sen!2sfi"
                    frameborder="0"
                    style={{ border: "0", width: "100%", height: "312px" }}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="row">
                  <div class="col-md-5 info">
                    <i class="ion-ios-location-outline"></i>
                    <p>Hämeentie 37 , 00500 HELSINKI</p>
                  </div>
                  <div class="col-md-4 info">
                    <i class="ion-ios-email-outline"></i>
                    <p>arashahmadi028@gmail.com</p>
                  </div>
                  <div class="col-md-3 info">
                    <i class="ion-ios-telephone-outline"></i>
                    <p>+358 442738577</p>
                  </div>
                </div>

                <div class="form">
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <Form action="" method="post" role="form" class="contactForm">
                    <div class="form-row">
                      <div class="form-group col-lg-6">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div class="validation"></div>
                      </div>
                      <div class="form-group col-lg-6">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div class="validation"></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div class="validation"></div>
                    </div>
                    <div class="text-center">
                      <button type="submit" title="Send Message">
                        Send Message
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ContactUs;

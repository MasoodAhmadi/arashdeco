import React from "react";
import Header from "../Sections/001_Header";
import Introduction from "../Sections/01_Introduction";
import AboutUs from "../Sections/02_AboutUs";
import Services from "../Sections/03_Services";
import WhyChooseUs from "../Sections/04_WhyChoose_us";
//import OurPortfolio from "../Sections/05_OurPortfolio";
//import Testimonials from "../Sections/06_Testimonials";
import Team from "../Sections/07_Team";
//import OurClient from "../Sections/08_OurClient";
import ContactUs from "../Sections/09_ContactUs";
import Footer from "../Sections/10_Footer";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Introduction />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        {/* <OurPortfolio />*/}
        {/*<Testimonials />*/}
        <Team />
        {/* <OurClient /> */}
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default Home;

// import React from "react";
// import App1 from "../img/portfolio/app1.jpg";
// import web3 from "../img/portfolio/web3.jpg";
// import app2 from "../img/portfolio/app2.jpg";
// import card2 from "../img/portfolio/card2.jpg";
// import web2 from "../img/portfolio/web2.jpg";
// import app3 from "../img/portfolio/app3.jpg";
// import card1 from "../img/portfolio/card1.jpg";
// import card3 from "../img/portfolio/card3.jpg";
// import web1 from "../img/portfolio/web1.jpg";

// class OurPortfolio extends React.Component {
//   render() {
//     return (
//       <div>
//         <section id="portfolio" class="clearfix">
//           <div class="container">
//             <header class="section-header">
//               <h3 class="section-title">Our Portfolio</h3>
//             </header>

//             <div class="row">
//               <div class="col-lg-12">
//                 <ul id="portfolio-flters">
//                   <li data-filter="*" class="filter-active">
//                     All
//                   </li>
//                   <li data-filter=".filter-app">App</li>
//                   <li data-filter=".filter-card">Card</li>
//                   <li data-filter=".filter-web">Web</li>
//                 </ul>
//               </div>
//             </div>

//             <div class="row portfolio-container">
//               <div class="col-lg-4 col-md-6 portfolio-item filter-app">
//                 <div class="portfolio-wrap">
//                   <img src={App1} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">App 1</a>
//                     </h4>
//                     <p>App</p>
//                     <div>
//                       <a
//                         href="img/portfolio/app1.jpg"
//                         data-lightbox="portfolio"
//                         data-title="App 1"
//                         class="link-preview"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="col-lg-4 col-md-6 portfolio-item filter-web"
//                 data-wow-delay="0.1s"
//               >
//                 <div class="portfolio-wrap">
//                   <img src={web3} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">Web 3</a>
//                     </h4>
//                     <p>Web</p>
//                     <div>
//                       <a
//                         href="img/portfolio/web3.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="Web 3"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="col-lg-4 col-md-6 portfolio-item filter-app"
//                 data-wow-delay="0.2s"
//               >
//                 <div class="portfolio-wrap">
//                   <img src={app2} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">App 2</a>
//                     </h4>
//                     <p>App</p>
//                     <div>
//                       <a
//                         href="img/portfolio/app2.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="App 2"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div class="col-lg-4 col-md-6 portfolio-item filter-card">
//                 <div class="portfolio-wrap">
//                   <img src={card2} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">Card 2</a>
//                     </h4>
//                     <p>Card</p>
//                     <div>
//                       <a
//                         href="img/portfolio/card2.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="Card 2"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="col-lg-4 col-md-6 portfolio-item filter-web"
//                 data-wow-delay="0.1s"
//               >
//                 <div class="portfolio-wrap">
//                   <img src={web2} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">Web 2</a>
//                     </h4>
//                     <p>Web</p>
//                     <div>
//                       <a
//                         href="img/portfolio/web2.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="Web 2"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="col-lg-4 col-md-6 portfolio-item filter-app"
//                 data-wow-delay="0.2s"
//               >
//                 <div class="portfolio-wrap">
//                   <img src={app3} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">App 3</a>
//                     </h4>
//                     <p>App</p>
//                     <div>
//                       <a
//                         href="img/portfolio/app3.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="App 3"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div class="col-lg-4 col-md-6 portfolio-item filter-card">
//                 <div class="portfolio-wrap">
//                   <img src={card1} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">Card 1</a>
//                     </h4>
//                     <p>Card</p>
//                     <div>
//                       <a
//                         href="img/portfolio/card1.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="Card 1"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="col-lg-4 col-md-6 portfolio-item filter-card"
//                 data-wow-delay="0.1s"
//               >
//                 <div class="portfolio-wrap">
//                   <img src={card3} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">Card 3</a>
//                     </h4>
//                     <p>Card</p>
//                     <div>
//                       <a
//                         href="img/portfolio/card3.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="Card 3"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 class="col-lg-4 col-md-6 portfolio-item filter-web"
//                 data-wow-delay="0.2s"
//               >
//                 <div class="portfolio-wrap">
//                   <img src={web1} class="img-fluid" alt="" />
//                   <div class="portfolio-info">
//                     <h4>
//                       <a href="#">Web 1</a>
//                     </h4>
//                     <p>Web</p>
//                     <div>
//                       <a
//                         href="img/portfolio/web1.jpg"
//                         class="link-preview"
//                         data-lightbox="portfolio"
//                         data-title="Web 1"
//                         title="Preview"
//                       >
//                         <i class="ion ion-eye"></i>
//                       </a>
//                       <a href="#" class="link-details" title="More Details">
//                         <i class="ion ion-android-open"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// export default OurPortfolio;

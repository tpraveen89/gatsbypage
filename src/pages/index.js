import React from "react";
import bg from "../img/hero-2.png";
export default function Home() {
  return (
    <div className="container">
      <section className="hero-barishal welcome_area" id="home">
        <div className="background-shapes">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
          <div className="dot4"></div>
          <div className="heart1">
            <i className="lni-heart"></i>
          </div>
          <div className="heart2">
            <i className="i lni-heart"></i>
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>

        <div className="container h-100">
          <div className="row h-100 justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <div className="welcome_text_area">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  There’s a better way to <span> increase </span> your revenue
                  and <span> sales.</span>
                </h2>
                <h5 className="wow fadeInUp" data-wow-delay="0.3s">
                  Appland is completely creative, lightweight, clean &amp; super
                  responsive app landing page. Put your app sales or promotions
                  into next level with it.
                </h5>
                <a
                  className="btn apland-btn mt-30 wow fadeInUp"
                  href="#"
                  data-wow-delay="0.4s"
                >
                  Start A Free Trial
                </a>
                <a
                  className="btn apland-btn btn-2 mt-30 ml-2 wow fadeInUp"
                  href="#"
                  data-wow-delay="0.5s"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div
                className="welcome_area_thumb text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img src={bg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/images/about_img01.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  Gainwise  <span>FX</span> No.1 Trading Strategy 
                </h2>
              </div>
              <p>
              Gainwise FX is a reliable, secure, and user-friendly trading platform offering innovative, real-time solutions with advanced tools for seamless trading.
              </p>
              <Link href="/" className="btn">
                Get started 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

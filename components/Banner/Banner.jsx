import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import CountDownTwo from "../CountDown/CountDownTwo";

const Banner = ({ title, progress, targetInfo, steps }) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src={"/img/banner/banner_shape01.png"} alt="" className="img-one" loading="lazy" />
        <img src={"/img/banner/banner_shape02.png"} alt="" className="img-two" loading="lazy" />
        <img src={"/img/banner/banner_shape03.png"} alt="" className="img-three" loading="lazy" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h2 className="title">
                {title} <span>FX</span> Trading Strategies
              </h2>
            </div>
            <div className="banner-progress-wrap">
              <ul>
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                {progress} <span>{targetInfo}</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">Trading View</h2>
              <CountDownOne />
              <CountDownTwo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Default Props
Banner.defaultProps = {
  title: "Gainwise",
  
  targetInfo: "",
  steps: ["Deposit", "Trade ", "Withdraw Earning 24/7"],
};

export default Banner;

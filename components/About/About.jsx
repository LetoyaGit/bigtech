import React from "react";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/h2_about_img.png"} alt="About Gainwise FX" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">ABOUT GAINWISE FX</span>
                <h2 className="title">Gainwise FX</h2>
              </div>
              <p>Trading FX made easy and seamless with Gainwise FX</p>
              <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i> BEST STRATEGIES
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Locked-in have can mountain thought
                  </li>
                </ul>
              </div>
              <a
                href={"/img/images/h2_about_img.png"}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-two"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            {/* Coinlib Widget */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <div id="coinlib-widget">
                    <script
                      type="text/javascript"
                      src="https://widget.coinlib.io/widget?type=single_ticker&theme=dark&coin=BTC&pref=USD"
                      async
                    ></script>
                  </div>
                `,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src={"/img/images/about_shape01.png"}
          alt=""
          className="shape-one"
        />
        <img
          src={"/img/images/about_shape02.png"}
          alt=""
          className="shape-two rotateme"
        />
      </div>
    </section>
  );
};

export default About;

import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Micro maverick",
      title: "KES 1500",
      info: [
        "Trade and earn 6% after 1 day",
        "Trade with a minimum of KES 1300",
        "Earning is unlimited and trading is done 24/7",
      ],
    },
    {
      roadmapTitle: "Five figure fortress",
      title: "kES 50,000",
      info: [
        "Trade and earn 13% after 2 day",
        "Trade with a minimum of KES 50,000",
        "Earning is unlimited and trading is done 24/7",
      ],
    },

    {
      roadmapTitle: "Elite Apex",
      title: "KES 75,000",
      info: [
        "Trade and earn 13% after 2 days",
        "Trade with a minimum of KES 75,000",
        "Earning is unlimited and trading is done 24/7",
      ],
    },

    {
      roadmapTitle: "Summit pro",
      title: "KES 150,000",
      info: [
        "Trade and earn 20% after 5 days",
        "Trade with a minimum of KES 150,000",
        "Earning is unlimited and trading is done 24/7",
      ],
    },
    {
      roadmapTitle: "Infinity pro",
      title: "200,000",
      info: [
        "Trade and earn 20% after 5 days",
        "Trade with a minimum of KES 200,000",
        "Earning is unlimited and trading is done 24/7",
      ],
    },
    
    
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our Pricing</span>
              <h2 className="title">
                Gainwise Strategy and <br /> Project <span>Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

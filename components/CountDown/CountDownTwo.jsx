import React, { useEffect, useRef } from 'react';

function CoinlibWidget() {
  const widgetContainer = useRef();

  useEffect(() => {
    // Clear the container before adding a new widget
    if (widgetContainer.current) {
      widgetContainer.current.innerHTML = ""; // Prevent duplication
    }

    // Create the iframe element for the widget
    const iframe = document.createElement("iframe");
    iframe.src = "https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes";
    iframe.width = "100%";
    iframe.height = "409px";
    iframe.scrolling = "auto";
    iframe.style.border = "0";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.frameBorder = "0";

    // Append the iframe to the widget container
    widgetContainer.current.appendChild(iframe);
  }, []); // Dependency array ensures this runs only once

  return (
    <div
      ref={widgetContainer}
      style={{
        height: "433px",
        backgroundColor: "#1D2330",
        overflow: "hidden",
        boxSizing: "border-box",
        border: "1px solid #282E3B",
        borderRadius: "4px",
        textAlign: "right",
        lineHeight: "14px",
        fontSize: "12px",
        fontFeatureSettings: "normal",
        textSizeAdjust: "100%",
        boxShadow: "inset 0 -20px 0 0 #262B38",
        padding: "0px",
        margin: "0px",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "413px",
          padding: "0px",
          margin: "0px",
          width: "100%",
        }}
      >
        {/* The widget iframe will render here */}
      </div>
      <div
        style={{
          color: "#626B7F",
          lineHeight: "14px",
          fontWeight: "400",
          fontSize: "11px",
          boxSizing: "border-box",
          padding: "2px 6px",
          width: "100%",
          fontFamily: "Verdana, Tahoma, Arial, sans-serif",
        }}
      >
        <a
          href="https://coinlib.io"
          target="_blank"
          style={{
            fontWeight: "500",
            color: "#626B7F",
            textDecoration: "none",
            fontSize: "11px",
          }}
        >
          Cryptocurrency Prices
        </a>
        &nbsp;by Coinlib
      </div>
    </div>
  );
}

export default CoinlibWidget;

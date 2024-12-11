import React, { useEffect, useRef } from 'react';

function CryptoWidget() {
  const widgetContainer = useRef();

  useEffect(() => {
    // Clear the container before adding a new widget
    if (widgetContainer.current) {
      widgetContainer.current.innerHTML = ""; // Prevent duplication
    }

    // Check if the script is already present
    if (!document.getElementById("crypto-widget-script")) {
      const script = document.createElement("script");
      script.id = "crypto-widget-script";
      script.src = "https://price-static.crypto.com/latest/public/static/widget/index.js";
      script.type = "text/javascript";
      script.async = true;

      // Append the script to the document body
      document.body.appendChild(script);

      // Wait for the script to load before rendering the widget
      script.onload = () => {
        createWidget();
      };
    } else {
      // Script is already present, directly create the widget
      createWidget();
    }

    function createWidget() {
      const widgetDiv = document.createElement("div");
      widgetDiv.id = "crypto-widget-CoinList";
      widgetDiv.setAttribute("data-theme", "dark");  // Set dark mode
      widgetDiv.setAttribute("data-design", "classic");  // Set classic design
      widgetDiv.setAttribute("data-coin-ids", "1,166,136,382,29,1986,1120");  // Set coin IDs
      widgetContainer.current.appendChild(widgetDiv);
    }
  }, []); // Dependency array ensures this runs only once

  return (
    <div ref={widgetContainer} style={{ height: "100%", width: "100%" }}>
      {/* The widget will render inside this container */}
    </div>
  );
}

export default CryptoWidget;

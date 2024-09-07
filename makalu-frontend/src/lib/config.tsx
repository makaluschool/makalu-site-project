import Autoplay from "embla-carousel-autoplay";
import React from "react";


export const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  
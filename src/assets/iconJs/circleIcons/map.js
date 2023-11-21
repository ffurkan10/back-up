import * as React from "react";
const MapSvg = (props, color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={5}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="m4 5-2-.624V0l2 .624V5Zm.333-.023V.601L5.656.023c.157-.068.344.056.344.25V4.07c0 .114-.063.216-.167.25l-1.5.657ZM.156.68l1.51-.657v4.376l-1.333.578C.177 5.045 0 4.921 0 4.727V.93C0 .816.063.714.156.68Z"
    />
  </svg>
);
export default MapSvg;

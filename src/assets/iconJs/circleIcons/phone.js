import * as React from "react";
const SvgComponent = (props, color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="m3.528.524.86 2.065a.83.83 0 0 1-.236.99l-1.054.882a7.227 7.227 0 0 0 3.441 3.441l.882-1.054a.83.83 0 0 1 .99-.236l2.065.86c.409.15.602.602.495 1.011l-.517 1.893a.852.852 0 0 1-.817.624A9.621 9.621 0 0 1 0 1.363C0 .976.258.653.624.546L2.517.029c.409-.107.86.086 1.01.495Z"
    />
  </svg>
);
export default SvgComponent;

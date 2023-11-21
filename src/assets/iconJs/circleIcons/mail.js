import * as React from "react";
const MailSvg = (props, color) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M1.031 0H9.97C10.527 0 11 .401 11 .875c0 .292-.172.547-.43.71L5.908 4.558a.775.775 0 0 1-.838 0L.408 1.586A.834.834 0 0 1 0 .875C0 .401.451 0 1.031 0ZM0 2.042l4.662 2.99c.494.31 1.16.31 1.654 0L11 2.041v3.791C11 6.49 10.377 7 9.625 7h-8.25C.602 7 0 6.49 0 5.833V2.042Z"
    />
  </svg>
);
export default MailSvg;

// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const NorthAfrica = (props) => {
  const { className, onClick } = props;

  return (
    <path
      id="north_africa"
      onClick={onClick}
      className={className}
      d="M 394.625,285.375 C 393.75,284.375 393.625,284 393.25,283.25 C 392.875,282.5 392.625,281.125 391.375,281 C 390.125,280.875 390.25,282.125 389.875,280.25 C 389.5,278.375 389.125,276.875 388.625,276.5 C 388.125,276.125 387.25,275.75 386.125,274.625 C 385,273.5 384.875,272.375 384.875,272.375 L 382.75,271 C 382.75,271 377.25,271.25 376.625,271.25 C 376,271.25 374.875,271.375 374.125,271.875 C 373.375,272.375 373.75,272.625 372.375,273.25 C 371,273.875 368.75,275 368.125,275.25 C 367.5,275.5 364.625,275.625 364.625,275.625 C 364.625,275.625 364.625,276.625 363.5,277.375 C 362.375,278.125 360.875,279 359.625,278.875 C 358.375,278.75 358.23106,278.30628 357.25,278.5 C 355.40217,278.86488 354.19141,280.08233 353.5,280 C 352.86709,279.92463 351.75,280.375 350.625,280.75 C 349.5,281.125 350.75,281.25 348.375,281.25 C 346,281.25 344.75,281.25 344,281.125 C 343.25,281 342.625,281.375 342,281.5 C 341.375,281.625 340.5,281.75 340.73211,281.9197 C 339.31789,281.9197 338.61079,282.98036 338.61079,282.98036 L 338.96434,287.57655 L 335.78236,291.11209 C 335.78236,291.11209 335.07525,293.94051 334.36814,296.06183 C 333.66104,298.18315 332.60038,300.30447 332.60038,300.30447 L 331.18616,304.19356 C 331.18616,304.19356 329.625,305 329.75,305.625 C 329.875,306.25 330.125,307.5 329.625,307.875 C 329.125,308.25 328.5,307.875 327.875,309.125 C 327.25,310.375 326.75,311.5 326.75,312 C 326.75,312.5 327.375,313 326.5,314 C 325.625,315 324.75,315.125 324.5,317.25 C 324.25,319.375 323.25,321.25 324.25,322.5 C 325.25,323.75 325.875,324.75 325.875,326.125 C 325.875,327.5 325.5,327.375 325.625,329.375 C 325.75,331.375 326,331.25 326,332.625 C 326,334 325.875,335.875 325.625,337.5 C 325.375,339.125 324.875,339.625 324.5,341.5 C 324.125,343.375 321.875,344.125 323.625,345.75 C 325.375,347.375 325.125,348.875 325.625,350.25 C 326.125,351.625 330.625,351.25 330.625,354.125 C 330.625,357 334,357.375 334.25,358.875 C 334.5,360.375 333.625,362.5 336.625,363.75 C 339.625,365 339.375,366.875 340,367.375 C 340.625,367.875 343.375,368.25 344,369 C 344.625,369.75 345.5,371 346.125,371.625 C 346.75,372.25 347.375,373.25 349.5,373.125 C 351.625,373 351.875,373.125 355.25,372.75 C 358.625,372.375 361,372.25 361.875,372.125 C 362.75,372 364.625,372.625 366,372 C 367.375,371.375 367.125,370.25 368.875,369.875 C 370.625,369.5 371.25,369.875 372.375,369.625 C 373.5,369.375 377.875,369.375 378.5,369.875 C 379.125,370.375 379.875,369.875 380.625,371.5 C 381.375,373.125 379.125,375.625 383.875,375.375 C 388.625,375.125 391.375,374.375 392,375.5 C 392.625,376.625 390.5,378.25 390.875,379.75 C 391.25,381.25 391.75,381.625 391.25,382.375 L 391.82057,382.68241 C 392.3509,383.74307 392.3509,384.2734 393.05801,384.62696 C 393.76512,384.98051 395.70966,383.38952 395.70966,383.38952 C 395.70966,383.38952 397.30065,383.38952 398.89164,383.74307 C 400.48263,384.09663 400.65941,383.38952 402.2504,383.03597 C 403.84139,382.68241 404.19494,384.2734 404.19494,384.2734 C 404.19494,384.2734 405.43238,385.15729 406.84659,384.2734 C 408.2608,383.38952 407.90725,383.03597 407.37692,381.62175 C 406.84659,380.20754 407.73047,379.85399 408.08403,375.9649 C 408.43758,372.07581 406.84659,374.02036 406.84659,374.02036 C 406.84659,374.02036 406.31626,372.78292 406.49304,370.30804 C 406.66981,367.83317 407.37692,369.60094 407.90725,368.54028 C 408.43758,367.47962 409.14469,367.47962 410.02857,366.77251 C 410.91245,366.0654 412.14989,366.0654 413.03378,365.53507 C 413.91766,365.00474 414.44799,363.94408 415.8622,363.41375 C 417.27642,362.88342 418.69063,362.17632 420.98873,361.11566 C 423.28682,360.055 422.75649,358.99434 422.75649,358.11045 C 422.75649,357.22657 425.05459,354.7517 425.05459,354.7517 C 425.05459,354.7517 424.52426,352.63038 423.64038,351.39294 C 422.75649,350.1555 423.28682,348.74129 423.28682,347.8574 C 423.28682,346.97352 423.64038,346.44319 424.17071,345.73608 C 424.70104,345.02898 424.34748,344.67542 424.34748,344.67542 L 425.23137,342.90766 C 425.23137,342.90766 425.7617,341.49344 425.7617,340.25601 C 425.7617,339.01857 425.05459,339.5489 424.34748,339.37212 C 423.64038,339.19535 424.17071,339.01857 425.23137,338.48824 C 426.29203,337.95791 425.93847,336.72047 426.11525,335.65981 C 426.29203,334.59915 425.7617,330.17973 425.58492,329.29585 C 425.40814,328.41197 421.69583,329.47263 420.81195,329.11907 C 419.92807,328.76552 419.39774,328.05841 419.39774,328.05841 C 419.39774,328.05841 418.69063,325.93709 418.51385,324.87643 C 418.33708,323.81577 415.8622,325.05321 414.97832,324.87643 C 414.09444,324.69966 414.80154,323.46222 414.44799,322.22478 C 414.09444,320.98735 412.68022,321.51768 411.79634,321.51768 C 410.91245,321.51768 409.49824,320.81057 408.2608,319.92669 C 407.02337,319.0428 406.66981,320.28024 405.2556,320.45702 C 403.84139,320.63379 403.84139,320.28024 403.31106,319.39636 C 402.78073,318.51247 401.01296,319.92669 399.42197,319.74991 C 397.83098,319.57313 398.18453,318.86603 397.30065,317.45181 C 396.41677,316.0376 395.53288,317.09826 393.58834,316.56793 C 391.6438,316.0376 392.3509,315.86082 392.17413,314.44661 C 391.99735,313.0324 390.75991,313.20917 390.75991,313.20917 C 390.75991,313.20917 390.58313,311.61818 390.40636,310.38074 C 390.22958,309.14331 390.58313,307.19876 390.58313,306.49166 C 390.58313,305.78455 390.22958,303.1329 388.99214,302.60257 C 387.75471,302.07224 388.63859,300.8348 388.63859,300.8348 C 388.63859,300.8348 388.10826,299.06704 388.28504,298.18315 C 388.46181,297.29927 389.69925,296.23861 390.58313,296.23861 C 391.46702,296.23861 391.99735,295.17795 391.99735,295.17795 C 391.99735,295.17795 390.58313,293.05663 389.87603,291.81919 C 389.16892,290.58176 391.11347,290.75853 391.11347,290.75853 L 391.99735,289.69787 C 391.99735,289.69787 392.3509,289.16754 393.94189,288.28366 C 395.53288,287.39977 394.625,285.375 394.625,285.375 z"
    />
  );
};

NorthAfrica.defaultProps = {
  className: ''
};

NorthAfrica.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default NorthAfrica;

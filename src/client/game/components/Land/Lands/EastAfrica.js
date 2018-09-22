// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const EastAfrica = (props) => {
  const { onClick } = props;

  return (
    <path
      id="east_africa"
      onClick={onClick}
      d="M 425.05459,354.7517 C 425.05459,354.7517 424.52426,352.63038 423.64038,351.39294 C 422.75649,350.1555 423.28682,348.74129 423.28682,347.8574 C 423.28682,346.97352 423.64038,346.44319 424.17071,345.73608 C 424.70104,345.02898 424.34748,344.67542 424.34748,344.67542 L 425.23137,342.90766 C 425.23137,342.90766 425.7617,341.49344 425.7617,340.25601 C 425.7617,339.01857 425.05459,339.5489 424.34748,339.37212 C 423.64038,339.19535 424.17071,339.01857 425.23137,338.48824 C 426.29203,337.95791 425.93847,336.72047 426.11525,335.65981 C 426.29203,334.59915 425.7617,330.17973 425.58492,329.29585 C 425.58492,329.29585 427.625,328 428.25,328.25 C 428.875,328.5 428.5,323.75 430.125,323.25 C 431.75,322.75 459.125,324.375 459,322.75 L 459.25,323 C 459.625,324.125 460.5,324 460.5,324 C 460.5,324 462.5,325.5 462.75,326.25 C 463,327 463.25,326.5 463.25,327.125 C 463.25,327.75 463.625,330 464.125,331.5 C 464.625,333 464.75,332.25 465.75,333.125 C 466.75,334 466,333.875 466,335.875 C 466,337.875 467,337.375 468,339 C 469,340.625 468.125,339.875 468.625,341.25 C 469.125,342.625 469.25,343.25 469.75,344.25 C 470.25,345.25 470.5,345 471.125,345 C 471.75,345 471.875,345.375 471.875,346.875 C 471.875,348.375 474.25,348.875 475.25,350.375 C 476.25,351.875 476.375,351.375 477,352.375 C 477.625,353.375 477,353.125 476.375,355.25 C 475.75,357.375 476.5,357.5 477.125,358.5 C 477.75,359.5 481.125,359.375 481.125,359.375 C 481.125,359.375 484.125,359.125 485.25,358.5 C 486.375,357.875 486.25,357.625 486.75,357.25 C 487.25,356.875 490.75,357.25 493.25,356.625 C 495.75,356 499,353.625 500.5,356.25 C 502,358.875 496.75,369.25 494.5,374.25 C 492.25,379.25 486,384.25 482.125,388 C 478.25,391.75 475.875,396.375 475.625,396.875 C 475.375,397.375 474.375,398.375 473.875,398.625 C 473.375,398.875 472.875,399.25 471.875,400.5 C 470.875,401.75 470.25,401.25 468.875,402.25 C 467.5,403.25 467.75,404.25 467.75,405 C 467.75,405.75 467.375,407.375 467,407.875 C 466.625,408.375 467.5,410.875 467.5,411.75 C 467.5,412.625 467.25,414.625 467.25,414.625 C 467.25,414.625 467.25,415 468.625,415.75 C 470,416.5 469.125,421 469.125,421 L 469.375,421.5 C 469.375,421.5 467.75,423.125 466.625,423.125 C 465.5,423.125 464,424.5 464,424.5 C 464,424.5 463.375,424.625 462.125,425 C 460.875,425.375 459.875,425.25 458.75,426.75 C 457.625,428.25 458.25,428.125 459.125,431 C 460,433.875 458.75,432.125 458.375,433.125 C 458,434.125 458.375,436.25 458.375,437.5 C 458.375,438.75 457.5,439.25 456.875,439.75 C 456.25,440.25 454.25,438.25 453.5,437 C 452.75,435.75 453.5,433.75 454,432.25 C 454.5,430.75 452.875,428.625 452.5,427.375 C 452.125,426.125 452.25,426 452.875,424.875 C 453.5,423.75 453,424 452.625,422.25 C 452.25,420.5 451.25,420.625 450.875,419.875 C 450.5,419.125 449.375,417.625 448.375,417.625 C 447.375,417.625 447.875,416 447.625,415.125 C 447.375,414.25 445.625,414.625 445,414.875 C 444.375,415.125 444.25,414.25 443.875,411.5 C 443.5,408.75 442.75,401.75 442.875,400.625 C 443,399.5 445.75,401.625 446.25,400.875 C 446.75,400.125 446.875,394.5 446.625,393 C 446.375,391.5 448.75,392.125 450.25,392 C 451.75,391.875 452,390 452.625,388.75 C 453.25,387.5 453.875,387.625 454.5,387.375 C 455.125,387.125 455,385.875 455.75,384.875 C 456.5,383.875 457.5,382.125 457.5,380.75 C 457.5,379.375 455.625,378 453.375,377.875 C 451.125,377.75 451.625,378.875 448.5,378.125 C 445.375,377.375 444.75,377.5 443.75,377.25 C 442.75,377 442.875,375.375 441.75,375 C 440.625,374.625 439.25,377.125 439.25,377.125 C 439.25,377.125 438,376.75 436.75,373.75 C 435.5,370.75 433.75,369.875 433.25,369.75 C 432.75,369.625 432.625,366.125 432.625,365.5 C 432.625,364.875 430.375,364.125 429.875,363.375 C 429.375,362.625 429,361.5 428.125,361.25 C 427.25,361 426.625,361 426.25,358.875 C 425.875,356.75 425.05459,354.7517 425.05459,354.7517 z"
    />
  );
};

EastAfrica.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default EastAfrica;
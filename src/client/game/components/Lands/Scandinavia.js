// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Scandinavia = (props) => {
  const { onClick } = props;
  return (
    <path
      id="scandinavia"
      onClick={onClick}
      d="M 429.125,137 C 428.5,136.875 427.625,136.5 427.25,135.75 C 426.875,135 426,134.125 425.375,134.375 C 424.75,134.625 425,134.75 423.75,134.75 C 422.5,134.75 421.875,133 420.875,133.625 C 419.875,134.25 420.625,134.625 419.375,134.875 C 418.125,135.125 416.75,135.25 415.5,135.25 C 414.25,135.25 414.5,135 413.125,135.25 C 411.75,135.5 410.75,136.25 410.25,135 C 409.75,133.75 409.625,134.125 409.625,132.875 C 409.625,131.625 410.375,130.75 410.625,129.625 C 410.875,128.5 410.125,127.375 411,126.25 C 411.875,125.125 412.5,124.875 412.875,124.25 C 413.25,123.625 413.625,122.875 413.75,122 C 413.875,121.125 413.875,121.375 413.875,120.5 C 413.875,119.625 413.5,118.875 413,118.5 C 412.5,118.125 412.625,118.125 411.5,118 C 410.375,117.875 410.75,117.125 409.625,118.375 C 408.5,119.625 407.5,119.75 407.375,120.75 C 407.25,121.75 407.875,122.125 407.25,123.375 C 406.625,124.625 406.5,124.5 406.25,125 C 406,125.5 406.5,126.25 406,126.75 C 405.5,127.25 405.125,127.25 404.25,127.75 C 403.375,128.25 402.75,127.875 402.625,129.375 C 402.5,130.875 402.25,130.5 402.625,131.5 C 403,132.5 403.25,132.625 403.5,133.375 C 403.75,134.125 404.25,134.5 404.25,136 C 404.25,137.5 404.625,138 404.625,138 C 404.625,138 405.125,139.75 405,140.625 C 404.875,141.5 404.5,143 404.125,143.875 C 403.75,144.75 403.375,145.25 402.75,145.875 C 402.125,146.5 402.375,146.625 401.625,147.375 C 400.875,148.125 400,148.375 399.375,148.75 C 398.75,149.125 398.625,150.375 398.625,150.375 L 398.625,152.75 C 398.625,152.75 399.25,154.375 398.125,154.875 C 397,155.375 396.75,155.5 396,156.625 C 395.25,157.75 396,158.625 395.125,159.375 C 394.25,160.125 394.5,160.25 393,160.125 C 391.5,160 391.25,160 390.75,159.375 C 390.25,158.75 389.625,157.625 388.875,157.5 C 388.125,157.375 388.25,157.625 387.75,157.375 C 387.25,157.125 387.625,156.625 386.875,156.625 C 386.125,156.625 385.75,157.125 385.75,156.625 C 385.75,156.125 385.75,156.375 385.75,155.25 C 385.75,154.125 385.75,150.625 385.75,150.625 L 383.875,147.75 L 384.5,146.125 L 383.75,144.875 L 382.875,144.375 C 382.875,144.375 381.5,144.875 381.375,145.375 C 381.25,145.875 381.25,146.25 381,146.75 C 380.75,147.25 379.625,148.75 378.75,148.875 C 377.875,149 376.75,149.125 376.75,149.125 C 376.75,149.125 376.375,150.125 375.625,149.75 C 374.875,149.375 375.125,149.5 374.25,148.5 C 373.375,147.5 373.125,146.375 373.125,145.875 C 373.125,145.375 373.375,145.25 372.75,144.75 C 372.125,144.25 372.125,144.25 371.5,143.625 C 370.875,143 370,142.5 370.125,141.375 C 370.25,140.25 370.5,139.125 370.75,138 C 371,136.875 370.375,135.75 370.375,135.75 L 369.90026,134.84149 C 369.36993,133.78083 369.90026,133.9576 369.01638,133.07372 C 368.13249,132.18984 367.42539,131.83628 367.95572,130.42207 C 368.48605,129.00786 367.60216,128.12397 369.01638,127.77042 C 370.43059,127.41687 370.25381,129.36141 370.60737,126.88653 C 370.96092,124.41166 369.90026,125.11877 371.31448,123.52778 C 372.72869,121.93679 372.90547,121.58323 372.90547,121.58323 C 372.90547,121.58323 373.78935,121.58323 374.1429,122.82067 C 374.49646,124.05811 374.49646,125.11877 375.20356,124.23488 C 375.91067,123.351 376.08745,122.29034 376.61778,121.58323 C 377.14811,120.87613 378.03199,119.99224 378.03199,119.99224 C 378.03199,119.99224 376.441,117.34059 378.38554,117.51737 C 380.33009,117.69415 380.33009,118.0477 380.86042,117.34059 C 381.39075,116.63349 381.21397,116.63349 382.45141,116.27993 C 383.68884,115.92638 383.86562,116.10316 384.0424,115.0425 C 384.21917,113.98184 384.7495,113.98184 385.45661,113.27473 C 386.16372,112.56762 386.16372,112.21407 386.34049,110.79986 C 386.51727,109.38564 386.16372,109.56242 387.75471,107.4411 C 389.3457,105.31978 389.3457,105.49655 389.87603,104.08234 C 390.40636,102.66813 390.40636,102.8449 390.93669,101.96102 C 391.46702,101.07714 392.17413,101.43069 392.70446,100.72358 C 393.23479,100.01648 393.41156,99.13259 393.41156,99.13259 L 394.29545,97.5416 C 394.29545,97.5416 392.52768,96.8345 394.11867,96.12739 C 395.70966,95.42028 395.88644,95.24351 397.12387,94.88995 C 398.36131,94.5364 399.24519,94.5364 399.24519,94.5364 C 399.24519,94.5364 400.39424,96.21578 400.57102,94.97834 C 400.7478,93.7409 400.04069,93.56413 401.10135,92.76863 C 402.16201,91.97314 402.78073,92.06153 403.13428,92.32669 C 403.48783,92.59186 403.31106,92.85702 404.10655,92.68024 C 404.90205,92.50347 405.78593,93.56413 406.0511,92.32669 C 406.31626,91.08925 404.90205,90.11698 406.58143,89.40988 C 408.2608,88.70277 409.14469,89.32149 409.67502,88.79116 C 410.20535,88.26083 409.40985,87.99566 410.47051,87.46533 C 411.53117,86.935 411.88473,87.20017 412.94539,86.84661 C 414.00605,86.49306 414.09444,85.34401 414.62477,85.25562 C 415.1551,85.16723 415.8622,85.25562 416.39253,85.78595 C 416.92286,86.31628 415.42026,86.75822 417.54158,86.40467 C 419.6629,86.05112 422.49133,84.72529 423.28682,85.34401 C 424.08232,85.96273 423.37521,87.02339 424.43587,87.02339 C 425.49653,87.02339 426.55719,86.58145 427.08752,86.935 C 427.61785,87.28855 427.52946,87.55372 428.32496,87.90727 C 428.32496,87.90727 429.25,91.875 428.625,92.375 C 428,92.875 429.375,96 428.625,96.5 C 427.875,97 427.5,102.75 427.5,105.375 C 427.5,108 428.875,112.125 428.5,114.25 C 428.125,116.375 429.125,119.375 429.125,119.375 C 429.125,119.375 429.75,120 429.75,121.625 C 429.75,123.25 430.625,124.125 430.625,124.125 C 430.625,124.125 431.0625,124.25 431.125,124.8125 C 431.1875,125.375 431.1875,126.25 430.9375,126.5 C 430.6875,126.75 430.125,127.1875 430.125,128.125 C 430.125,129.0625 430.375,129.4375 430.0625,129.875 C 429.75,130.3125 429.5,130.4375 429.375,131.5 C 429.25,132.5625 429.0625,134 429.3125,134.5625 C 429.5625,135.125 430,137.25 429.125,137 z"
    />
  );
};

Scandinavia.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Scandinavia;

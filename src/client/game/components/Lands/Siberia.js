// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Siberia = (props) => {
  const { onClick } = props;

  return (
    <path
      id="siberia"
      onClick={onClick}
      d="M 533.875,93.625 C 534.5,95.375 535,94.375 536.125,93.625 C 537.25,92.875 536.375,93 536.5,91.5 C 536.625,90 536.125,90.25 535.5,89.5 C 534.875,88.75 535.125,89.375 533.5,89.375 C 531.875,89.375 532.375,89.625 531.25,89.75 C 530.125,89.875 530.5,89.75 528.625,89.375 C 526.75,89 527.5,88 527.5,87.25 C 527.5,86.5 527,85.125 527,85.125 C 527,85.125 526,84.75 525.5,83.75 C 525,82.75 525.5,82.625 525.625,82.125 C 525.75,81.625 525.875,81 525.75,79.5 C 525.625,78 525.25,79 524.75,78.25 C 524.25,77.5 524.75,77 524.75,77 L 525.75,76 L 527.5,76.625 L 528.625,77 L 530.875,77.75 C 530.875,77.75 531,78 533,80.25 C 535,82.5 534,80.5 535.5,80.625 C 537,80.75 536.625,80 536.625,80 C 536.625,80 534.625,79 534.625,78.5 C 534.625,78 535.125,77.25 535.125,76.625 C 535.125,76 535,74.625 534.75,74.125 C 534.5,73.625 533.75,73.25 533.25,72.75 C 532.75,72.25 532,70.875 532,70.875 C 532,70.875 531.625,70.125 532.5,67.625 C 533.375,65.125 533.625,68.5 533.625,68.5 L 534.375,68.875 L 535.875,70.125 C 535.875,70.125 537.125,69.875 537.875,69.625 C 538.625,69.375 539.75,71.375 539.75,71.375 C 539.75,71.375 542,71.625 542.5,71.625 C 543,71.625 544,70.25 544,69.25 C 544,68.25 542,69.125 542,69.125 L 539,68.5 C 539,68.5 535.125,67.375 534.375,66.375 C 533.625,65.375 534.5,64.875 534.5,64.875 L 536.5,62.375 C 536.5,62.375 537.875,61 538.5,61 C 539.125,61 541.75,61 541.75,61 C 541.75,61 542.625,58.875 542.75,57.25 C 542.875,55.625 545,56.75 545,56.75 C 545,56.75 546.625,56.25 547,55.75 C 547.375,55.25 549.5,53.75 552.875,51.75 C 556.25,49.75 556.25,50.625 557.75,50.5 C 559.25,50.375 560.625,50.375 561.125,50.125 C 561.625,49.875 563.25,48.75 563.75,48.5 C 564.25,48.25 566.75,47 566.75,47.625 C 566.75,48.25 567,49.625 567.25,50.125 C 567.5,50.625 568.875,49.5 570.5,48.25 C 572.125,47 571.625,47.25 572.375,46.125 C 573.125,45 573.875,45.75 575,45.875 C 576.125,46 575.75,47.75 575.875,48.5 C 576,49.25 577.875,50.625 579,51.375 C 580.125,52.125 583.25,47.625 583.75,50 C 584.25,52.375 587,53.25 587,54 C 587,54.75 585.75,56.25 584.875,57 C 584,57.75 583.25,58.625 582.75,59.75 C 582.25,60.875 582.75,60.5 582.75,61.5 C 582.75,62.5 582,61.75 580.875,62.5 C 579.75,63.25 579.75,63.5 578.875,64.5 C 578,65.5 577.5,65 576.625,65.375 C 575.75,65.75 576,66.875 575.75,67.75 C 575.5,68.625 576.25,68.5 576.25,68.5 C 576.25,68.5 577.5,67.625 578.125,67.25 C 578.75,66.875 581.125,65.625 581.75,65.25 C 582.375,64.875 584,63.5 585.375,62 C 586.75,60.5 588.625,61.25 589.625,61 C 590.625,60.75 591.25,61.375 591.25,61.375 C 591.25,61.375 592.5,61.5 593.625,60.875 C 594.75,60.25 597.625,59.625 598.25,59.625 C 598.875,59.625 600.5,59.875 601.375,60.625 C 602.25,61.375 603.75,62.375 604.625,63 L 606.0625,62.9375 L 606.375,65.5 C 606.375,66 606.25,67.5 607.375,68.625 C 608.5,69.75 608.875,69.25 609.375,69.75 C 609.875,70.25 609.25,73.5 609.125,74.25 C 609,75 608.5,75 608,75.875 C 607.5,76.75 607.875,77.25 607.5,78.75 C 607.125,80.25 606.625,79.625 606.25,81.125 C 605.875,82.625 606.25,82.5 606.75,83.5 C 607.25,84.5 607.25,85.375 607.25,86.875 C 607.25,88.375 607,87.5 606.375,87.625 C 605.75,87.75 605.125,88.25 603.875,88.375 C 602.625,88.5 601.25,89 600.625,88.25 C 600,87.5 599.375,87.375 597.125,87.625 C 594.875,87.875 596.5,88.625 596.25,89.625 C 596,90.625 595.25,90.5 593.75,90.75 C 592.25,91 592.75,91.125 592.625,92.75 C 592.5,94.375 594.375,95.375 595.375,95.75 C 596.375,96.125 596.625,96.375 597,97 C 597.375,97.625 598.5,97.375 600,98.75 C 601.5,100.125 600.25,100.375 599.25,101.375 C 598.25,102.375 599.875,105.875 600.625,106.375 C 601.375,106.875 601.75,107.625 602.125,110.625 C 602.5,113.625 603.625,113.875 603.625,113.875 C 603.625,113.875 604.5,114.375 604.625,117.5 C 604.75,120.625 605.5,123.25 605.5,123.25 C 605.5,123.25 601.37782,130.90628 602.60757,134.2881 C 603.83732,137.66991 605.37451,143.81867 603.52988,145.97073 C 601.68525,148.1228 600.76294,148.1228 600.14806,146.89305 C 599.53319,145.66329 600.4555,145.35586 598.30344,145.04842 C 596.15137,144.74098 596.45881,145.66329 594.92162,145.97073 C 593.38443,146.27817 592.76956,147.81536 591.53981,146.58561 C 590.31006,145.35586 591.53981,145.04842 589.69518,145.66329 C 587.85055,146.27817 588.77287,148.43023 586.46709,148.89139 C 584.1613,149.35255 584.46874,148.58395 583.54643,150.12114 C 582.62411,151.65833 582.16296,152.11949 581.85552,152.88808 C 581.54808,153.65668 580.93321,153.50296 581.54808,154.88643 C 582.16296,156.2699 583.70015,154.27155 583.54643,157.03849 C 583.39271,159.80543 583.08527,161.49634 583.08527,161.49634 C 583.08527,161.49634 582.00924,160.72774 582.00924,162.57237 C 582.00924,164.417 582.77783,164.26328 582.47039,165.80047 C 582.16296,167.33765 581.39436,166.41534 581.85552,168.25997 C 582.31668,170.10459 583.54643,170.10459 583.54643,170.10459 C 583.54643,170.10459 583.85386,168.25997 584.46874,169.79716 C 585.08362,171.33434 584.31502,172.25666 585.39105,172.71781 C 586.46709,173.17897 585.39105,173.02525 587.08196,173.64013 C 587.08196,173.64013 587.7737,173.64013 588.08113,174.56244 C 588.38857,175.48475 589.23403,176.94508 588.38857,178.09797 C 587.54312,179.25087 586.85138,181.40293 587.7737,183.47814 C 588.69601,185.55334 590.31006,185.78392 590.15634,187.01367 C 590.00262,188.24342 589.77204,187.93598 589.61832,189.62689 C 589.4646,191.3178 589.77204,192.39383 589.38774,193.08556 C 589.00345,193.7773 588.77287,194.93019 588.23485,195.16077 C 587.69684,195.39135 586.85138,194.85333 586.31337,194.54589 C 585.77535,194.23846 586.15965,192.54755 585.23733,193.23928 C 584.31502,193.93102 584.1613,194.85333 583.39271,194.39217 C 582.62411,193.93102 582.70097,193.16242 582.00924,193.0087 C 581.3175,192.85499 579.93403,193.31614 580.62577,192.00953 C 581.3175,190.70292 582.16296,190.47234 582.23982,189.62689 C 582.31668,188.78144 582.70097,188.01284 582.23982,187.09053 C 581.77866,186.16822 581.47122,185.16904 580.70263,185.01532 C 579.93403,184.8616 579.93403,184.40045 579.01172,183.55499 C 578.08941,182.70954 578.01255,181.63351 577.32081,181.86409 C 576.62908,182.09467 575.47619,183.93929 573.86214,183.63185 C 572.24809,183.32442 571.63322,184.01615 571.0952,182.94012 C 570.55718,181.86409 570.3266,181.47979 569.71173,181.32607 C 569.09685,181.17235 568.78942,181.09549 568.94314,180.40376 C 569.09685,179.71202 569.17371,180.01946 569.17371,178.78971 C 569.17371,177.55996 569.25057,174.86988 568.32826,173.56327 C 567.40595,172.25666 567.40595,172.1798 567.40595,171.71864 C 567.40595,171.25749 567.8671,171.02691 567.09851,170.71947 C 566.32991,170.41203 565.17702,168.33683 564.94644,167.56823 C 564.71587,166.79964 563.56297,166.79964 563.17868,166.79964 C 562.79438,166.79964 561.87207,164.26328 561.87207,164.26328 C 561.87207,164.26328 557.95224,164.34014 558.0291,163.41782 C 558.10596,162.49551 558.56711,161.5732 558.64397,161.1889 C 558.72083,160.8046 559.33571,158.42196 558.72083,157.57651 C 558.10596,156.73105 557.02992,155.96246 556.41505,155.8856 C 555.80017,155.80874 554.72414,155.5013 554.10926,156.42361 C 553.49439,157.34593 552.95637,157.9608 552.64894,157.80708 C 552.3415,157.65337 551.88034,157.73023 551.72662,156.88477 C 551.5729,156.03932 551.18861,153.88725 552.3415,152.27321 C 553.49439,150.65916 553.11009,152.81122 553.80183,152.04263 C 554.49356,151.27403 554.87786,149.8137 554.87786,149.04511 C 554.87786,148.27651 554.4167,147.50792 555.41587,146.50875 C 556.41505,145.50958 557.18364,145.81701 557.6448,144.8947 C 558.10596,143.97239 558.87455,143.81867 558.33653,142.97321 C 557.79852,142.12776 556.95306,141.35917 556.8762,140.28313 C 556.79934,139.2071 557.18364,139.28396 556.49191,138.59223 C 555.80017,137.90049 555.26216,137.59305 555.1853,136.82446 C 555.10844,136.05587 556.56877,136.3633 555.10844,135.51785 C 553.64811,134.6724 553.18695,135.28727 553.41753,133.9038 C 553.64811,132.52033 553.41753,131.36744 553.87869,130.59885 C 554.33984,129.83025 553.57125,127.37075 553.26381,126.98645 C 552.95637,126.60215 552.18778,125.98728 551.80348,125.44926 C 551.41918,124.91125 551.49604,123.60464 551.18861,123.37406 C 550.88117,123.14348 549.72828,122.22117 549.42084,121.76001 C 549.1134,121.29885 549.1134,121.06828 548.80596,120.29968 C 548.49853,119.53109 547.26878,118.99307 546.96134,118.60877 C 546.6539,118.22448 544.27126,117.6096 544.11754,117.2253 C 543.96382,116.84101 543.88696,115.91869 544.04068,115.1501 C 544.1944,114.3815 544.42498,113.22861 544.1944,112.3063 C 543.96382,111.38399 543.88696,110.46167 543.8101,109.15506 C 543.73324,107.84845 543.19523,107.23358 542.19605,107.23358 C 541.19688,107.23358 540.73572,107.69473 540.65886,107.23358 C 540.582,106.77242 540.04399,105.15837 540.04399,104.77408 C 540.04399,104.38978 538.66052,100.77739 538.35308,100.54681 C 538.04564,100.31623 538.04564,100.23937 537.20019,99.47077 C 536.35474,98.70218 535.73986,98.08731 535.12498,98.01045 C 534.51011,97.93359 534.12581,97.24185 534.04895,96.47326 C 533.97209,95.70466 533.74151,93.78318 533.875,93.625 z"
    />
  );
};

Siberia.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Siberia;

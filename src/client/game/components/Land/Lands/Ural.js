// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Ural = (props) => {
  const { className, onClick } = props;
  return (
    <path
      id="ural"
      onClick={onClick}
      className={className}
      d="M 515.79395,165.91507 C 516.85461,165.38474 515.957,164.37843 515.957,162.61067 C 515.957,160.8429 515.42667,160.66612 515.24989,159.42869 C 515.07311,158.19125 514.71956,157.8377 514.54278,156.95381 C 514.36601,156.06993 516.13377,155.18605 516.84088,153.77183 C 517.54799,152.35762 516.84088,151.82729 516.6641,150.58985 C 516.48733,149.35242 514.89634,149.35242 514.89634,149.35242 L 511.71435,147.23109 L 510.30014,146.52399 C 510.30014,146.52399 510.12336,145.10977 510.30014,143.51878 C 510.47692,141.92779 511.3608,141.39746 512.06791,140.16003 C 512.77501,138.92259 512.77501,137.50838 512.77501,136.62449 C 512.77501,135.74061 511.00725,135.38706 511.00725,135.38706 C 511.00725,135.38706 511.00725,132.20508 511.00725,131.32119 C 511.00725,130.43731 511.00725,127.78566 511.00725,126.54822 C 511.00725,125.31078 510.30014,123.01269 509.76981,122.1288 C 509.23948,121.24492 510.30014,119.65393 510.30014,119.65393 C 510.30014,119.65393 509.41626,117.70939 509.23948,116.8255 C 509.0627,115.94162 510.30014,112.05253 510.30014,112.05253 L 512.24468,107.27956 L 513.48212,105.15824 C 513.48212,105.15824 513.48212,101.97626 514.01245,101.26915 C 514.54278,100.56205 514.36601,97.20329 514.36601,97.20329 C 514.36601,97.20329 513.6589,90.48578 512.95179,90.04383 L 513.625,87.75 L 512.625,86.875 L 512.25,84.375 L 509.75,83.75 L 510,80.375 C 510,80.375 511.5,78.875 512.125,78.875 C 512.75,78.875 510.625,76.75 510.375,75.875 C 510.125,75 510.375,74.625 510.875,74.375 C 511.375,74.125 511.125,73.375 511,72.375 C 510.875,71.375 510.875,71.25 510.875,71.25 L 511.75,68.75 L 514.625,69.75 C 514.625,69.75 515.25,70.75 515.875,70.875 C 516.5,71 517.125,70.875 517.625,70.875 C 518.125,70.875 517.875,71 518.625,72.5 C 519.375,74 519.375,72.5 520.5,72.75 C 521.625,73 521.625,74.125 521.5,74.875 C 521.375,75.625 520.75,76.25 520.125,77.375 C 519.5,78.5 519.625,78.125 518.625,79.25 C 517.625,80.375 520.125,81.125 520.125,81.125 C 520.125,81.125 520.375,82.625 521,83.5 C 521.625,84.375 521.125,83.75 522.125,84.25 C 523.125,84.75 522.125,85.125 522.125,86.5 C 522.125,87.875 522.875,86.75 522.875,86.75 C 522.875,86.75 523.375,87.375 523.75,88.625 C 524.125,89.875 523.875,89.125 524.75,91 C 525.625,92.875 526,90.875 526,90.875 C 526,90.875 526.75,91.5 527.25,92.5 C 527.75,93.5 529.625,93.125 529.625,93.125 C 529.625,93.125 530.625,92.125 531.375,91.5 C 532.125,90.875 531.875,91.125 532.875,90.75 C 533.875,90.375 532.92391,90.89674 533.54891,92.64674 C 534.17391,94.39674 533.97209,95.70467 534.04895,96.47326 C 534.12581,97.24185 534.51011,97.93359 535.12498,98.01045 C 535.73986,98.08731 536.35474,98.70218 537.20019,99.47077 C 538.04564,100.23937 538.04564,100.31623 538.35308,100.54681 C 538.66052,100.77739 540.04399,104.38978 540.04399,104.77408 C 540.04399,105.15837 540.582,106.77242 540.65886,107.23358 C 540.73572,107.69473 541.19688,107.23358 542.19605,107.23358 C 543.19523,107.23358 543.73324,107.84845 543.8101,109.15506 C 543.88696,110.46167 543.96382,111.38399 544.1944,112.3063 C 544.42498,113.22861 544.1944,114.3815 544.04068,115.1501 C 543.88696,115.91869 543.96382,116.84101 544.11754,117.2253 C 544.27126,117.6096 546.6539,118.22448 546.96134,118.60877 C 547.26878,118.99307 548.49853,119.53109 548.80596,120.29968 C 549.1134,121.06828 549.1134,121.29885 549.42084,121.76001 C 549.72828,122.22117 550.88117,123.14348 551.18861,123.37406 C 551.49604,123.60464 551.41918,124.91125 551.80348,125.44926 C 552.18778,125.98728 552.95637,126.60215 553.26381,126.98645 C 553.57125,127.37075 554.33984,129.83025 553.87869,130.59885 C 553.41753,131.36744 553.64811,132.52033 553.41753,133.9038 C 553.18695,135.28727 553.64811,134.6724 555.10844,135.51785 C 556.56877,136.3633 555.10844,136.05587 555.1853,136.82446 C 555.26216,137.59305 555.80017,137.90049 556.49191,138.59223 C 557.18364,139.28396 556.79934,139.2071 556.8762,140.28313 C 556.95306,141.35917 557.79852,142.12776 558.33653,142.97321 C 558.87455,143.81867 558.10596,143.97239 557.6448,144.8947 C 557.18364,145.81701 556.41505,145.50958 555.41587,146.50875 C 554.4167,147.50792 554.87786,148.27651 554.87786,149.04511 C 554.87786,149.8137 554.49356,151.27403 553.80183,152.04263 C 553.11009,152.81122 553.49439,150.65916 552.3415,152.27321 C 551.18861,153.88725 551.5729,156.03932 551.72662,156.88477 C 551.88034,157.73023 552.3415,157.65337 552.64894,157.80708 C 552.95637,157.9608 553.49439,157.34593 554.10926,156.42361 C 554.72414,155.5013 555.80017,155.80874 556.41505,155.8856 C 557.02992,155.96246 558.10596,156.73105 558.72083,157.57651 C 559.33571,158.42196 558.72083,160.8046 558.64397,161.1889 C 558.56711,161.5732 558.10596,162.49551 558.0291,163.41782 C 557.95224,164.34014 561.87207,164.26328 561.87207,164.26328 C 561.87207,164.26328 562.79438,166.79964 563.17868,166.79964 C 563.56297,166.79964 564.71587,166.79964 564.94644,167.56823 C 565.17702,168.33683 566.32991,170.41203 567.09851,170.71947 C 567.8671,171.02691 567.40595,171.25749 567.40595,171.71864 C 567.40595,172.1798 567.40595,172.25666 568.32826,173.56327 C 569.25057,174.86988 569.17371,177.55996 569.17371,178.78971 C 569.17371,180.01946 569.09685,179.71202 568.94314,180.40376 L 566.41304,180.60869 C 566.41304,180.60869 567.06522,184.84783 566.41304,185.17391 C 565.76087,185.5 562.6087,185.93478 562.6087,185.93478 C 562.6087,185.93478 562.5,189.19565 562.39131,189.73913 C 562.28261,190.28261 560.76087,191.26087 560.43478,191.80435 C 560.1087,192.34783 559.78261,192.34783 560.1087,193 C 560.43478,193.65217 560.65218,194.52174 560.54348,194.95652 C 560.43478,195.3913 561.08696,196.26087 559.89131,196.47826 C 558.69565,196.69565 558.15218,197.13043 557.5,196.58696 C 556.84783,196.04348 556.63044,194.84783 555.76087,194.41304 C 554.89131,193.97826 554.56522,193.97826 554.45652,193.10869 C 554.34783,192.23913 554.02174,190.93478 554.02174,190.93478 C 554.02174,190.93478 552.93478,189.30435 552.39131,189.30435 C 551.84783,189.30435 549.67391,189.84783 549.23913,189.52174 C 548.80435,189.19565 546.73913,189.41304 545.97826,188.76087 C 545.21739,188.10869 545.1087,187.56522 544.13044,188 C 543.15218,188.43478 541.41304,188.54348 541.41304,188.54348 L 539.78261,187.45652 C 539.78261,187.45652 538.91304,187.13043 538.04348,186.58696 C 537.17391,186.04348 537.06522,184.73913 536.73913,184.19565 C 536.41304,183.65217 535.76087,182.78261 535.32609,182.45652 C 534.89131,182.13043 534.45652,181.47826 533.91304,180.93478 C 533.36957,180.3913 532.71739,180.06522 531.95652,179.84783 C 531.19565,179.63043 530.54348,179.52174 530.32609,178.86956 C 530.1087,178.21739 530.32609,177.67391 529.89131,177.56522 C 529.45652,177.45652 528.36957,177.02174 528.36957,177.02174 C 528.36957,177.02174 528.26087,175.5 527.71739,175.17391 C 527.17391,174.84783 526.08696,173.97826 525.43478,173.65217 C 524.78261,173.32609 524.02174,173.21739 523.80435,172.34783 C 523.58696,171.47826 523.26087,171.15217 523.26087,171.15217 C 523.26087,171.15217 521.95652,170.28261 521.73913,169.73913 C 521.52174,169.19565 520.86957,168.10869 520.86957,168.10869 L 519.45652,166.58696 L 517.82609,166.04348 L 515.79395,165.91507 z"
    />
  );
};

Ural.defaultProps = {
  className: ''
};

Ural.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Ural;

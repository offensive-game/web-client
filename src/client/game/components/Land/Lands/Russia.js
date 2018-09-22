// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Russia = (props) => {
  const { onClick } = props;
  return (
    <path
      id="russia"
      onClick={onClick}
      d="M 430.44628,88.26083 C 429.20884,88.17244 428.32496,87.90727 428.32496,87.90727 C 428.32496,87.90727 429.25,91.875 428.625,92.375 C 428,92.875 429.375,96 428.625,96.5 C 427.875,97 427.5,102.75 427.5,105.375 C 427.5,108 428.875,112.125 428.5,114.25 C 428.125,116.375 429.125,119.375 429.125,119.375 C 429.125,119.375 429.75,120 429.75,121.625 C 429.75,123.25 430.625,124.125 430.625,124.125 C 430.625,124.125 431.0625,124.25 431.125,124.8125 C 431.1875,125.375 431.1875,126.25 430.9375,126.5 C 430.6875,126.75 430.125,127.1875 430.125,128.125 C 430.125,129.0625 430.375,129.4375 430.0625,129.875 C 429.75,130.3125 429.5,130.4375 429.375,131.5 C 429.25,132.5625 429.0625,134 429.3125,134.5625 C 429.5625,135.125 430,137.25 429.125,137 C 428.25,136.75 430.125,137.375 430.625,137.75 C 431.125,138.125 429.5,138.875 428.625,139.125 C 427.75,139.375 427,139.375 425.75,139.25 C 424.5,139.125 424.875,138.875 423.875,139 C 422.875,139.125 420.75,139.75 419.625,139.5 C 418.5,139.25 417.875,139.375 417.125,139.875 C 416.375,140.375 416.875,141.375 416.875,142.5 C 416.875,143.625 417.625,142.875 417.75,144.125 C 417.875,145.375 418.125,145.125 418.5,145.875 C 418.875,146.625 419.5,146 419.5,146 C 419.5,146 421.625,147.75 421.375,148.875 C 421.125,150 421.875,150.75 421.875,151.75 C 421.875,152.75 420.75,152 419.125,151.875 C 417.5,151.75 418.5,151 417.875,149.25 C 417.25,147.5 417.375,148.625 416.375,148.25 C 415.375,147.875 415.375,148.5 415.125,149.625 C 414.875,150.75 414.75,150.875 413.875,151.625 C 413,152.375 413.75,153 413.5,154.125 C 413.25,155.25 412.875,155.125 412.125,156 C 411.375,156.875 412.375,157.375 412.75,158.625 C 413.125,159.875 413.625,160.375 413.625,160.375 C 414.125,160.875 414,161.375 414,162.125 C 414,162.875 413.5,163.25 413,163.625 L 414.25,163.75 C 414.25,163.75 415.3125,164.6875 415.375,165 C 415.4375,165.3125 416.5625,166.25 416.5625,166.25 C 416.5625,166.25 419.0625,167.625 419.9375,167.625 C 420.8125,167.625 421.8125,167.0625 422.3125,167 C 422.8125,166.9375 422.25,167.875 422.25,168.1875 C 422.25,168.5 422.9375,171.4375 423.25,172.0625 C 423.5625,172.6875 423.625,180.125 423.6875,181.5 C 423.75,182.875 425.0625,184.25 425.4375,184.5625 C 425.8125,184.875 426.0625,185.625 426.0625,185.9375 C 426.0625,186.25 425.25,187.3125 425.1875,187.75 C 425.125,188.1875 425.3125,188.9375 425.25,189.5 C 425.1875,190.0625 424.75,190.3125 424.25,190.75 C 423.75,191.1875 423.875,192.1875 423.5625,192.8125 C 423.25,193.4375 422.75,193.4375 422.125,193.6875 C 421.5,193.9375 419.8125,197.3125 419.625,197.6875 C 419.4375,198.0625 417.6875,198.6875 417.125,198.6875 C 416.5625,198.6875 415.0625,199.125 414.875,199.625 C 414.6875,200.125 414.6875,201.125 414.6875,201.125 L 417,203.3125 C 417.25,203.25 417.5,202.5 417.75,202.125 C 418,201.75 418.9375,201.6875 418.9375,201.6875 C 418.9375,201.6875 420.5625,201.625 421.25,202.0625 C 421.9375,202.5 421.5,202.8125 421.5625,204.125 C 421.625,205.4375 421.625,205.1875 421.8125,205.8125 C 422,206.4375 422.3125,206.1875 423.4375,206.5 C 424.5625,206.8125 424.1875,206.6875 425.0625,206.8125 C 425.9375,206.9375 425.75,207.5625 426.1875,208.5 C 426.625,209.4375 426.6875,210.125 427.125,210.9375 C 427.5625,211.75 427.5625,212.25 427.5625,212.5 C 427.5625,212.75 427.25,214 427.1875,214.6875 C 427.125,215.375 426.8125,215.5 426.6875,215.8125 C 426.5625,216.125 426.625,217 426.625,217.3125 C 426.625,217.625 427.0625,218.0625 427.4375,218.5 C 427.8125,218.9375 427.8125,219.3125 427.8125,220 C 427.8125,220.6875 427.25,221.75 427.25,222.375 C 427.25,223 428.1875,223.4375 428.0625,224 C 427.9375,224.5625 430.25,226.25 430.25,226.25 L 431.25,225.5 C 431.25,225.5 432.25,225.375 433,224.625 C 433.75,223.875 433.5,223.5 433.5,223.5 C 433.5,223.5 433.75,221.125 434.125,220.625 C 434.5,220.125 435,220.375 436.625,220 C 438.25,219.625 437.625,220 438.375,220 C 439.125,220 439.625,220.5 440.375,220.75 C 441.125,221 441,221.5 441.25,222.5 C 441.5,223.5 441.75,224.125 441.875,225 C 442,225.875 442,226 442.375,226.875 C 442.75,227.75 443.125,227.625 444.125,228.25 C 445.125,228.875 444.5,228.75 446,229.5 C 447.5,230.25 446.75,228.375 447.25,227.5 C 447.75,226.625 448,226.625 448.5,226.375 C 449,226.125 449.375,225.875 450,225.375 C 450.625,224.875 450.375,224.875 450.75,224 C 451.125,223.125 450.625,222.75 450.375,222.25 C 450.125,221.75 449.625,222.375 449,222.375 C 448.375,222.375 447.625,221.625 447,220.875 C 446.375,220.125 446.875,219.875 446.875,219.875 C 446.875,219.875 447.75,218.875 448.625,218.25 C 449.5,217.625 449.375,217.75 450.125,217.5 C 450.875,217.25 451.375,217.25 452,217 C 452.625,216.75 453.125,216.625 454.375,216.375 C 455.625,216.125 455.125,216.375 456.5,216.375 C 457.875,216.375 458.125,216.125 458.125,216.125 C 458.125,216.125 458.5,215.625 459.125,215.25 C 459.75,214.875 460,215.125 460.375,215.625 C 460.75,216.125 460.125,216.875 460.125,216.875 C 460.125,216.875 459.5,217.5 458.625,218.375 C 457.75,219.25 457.625,218.75 456,219 C 454.375,219.25 455.5,219.25 455.375,220.125 C 455.25,221 454.625,221.75 454.625,221.75 L 454.125,223 L 455,223.5 C 455,223.5 455.375,224.25 455.625,225.25 C 455.875,226.25 456.375,225.625 457,225.875 C 457.625,226.125 456.875,226.875 456.875,227.625 C 456.875,228.375 458,229 458.625,229.625 C 459.25,230.25 459,230.5 459.625,231.625 C 460.25,232.75 460.125,231.25 460.625,231 C 461.125,230.75 461.375,230.75 462.5,230.625 C 463.625,230.5 463.75,230.75 463.75,230.75 L 463.125,232.25 C 463.125,232.25 463.875,232.75 464.75,233.625 C 465.625,234.5 465,235.25 466.125,235.25 C 467.25,235.25 466.875,235.75 467.375,236.125 C 467.875,236.5 468.375,237.125 469.25,237.875 C 470.125,238.625 470,238.375 470.75,238.5 C 471.5,238.625 471.125,238.625 471.5,241.5 C 471.875,244.375 472.25,241.75 472.25,241.75 C 472.25,241.75 472,242.5 471.625,243 C 471.25,243.5 470.75,243.75 470.25,244.25 C 469.75,244.75 469.125,245.25 469.125,245.75 C 469.125,246.25 469.75,246.25 471.125,247.25 C 472.5,248.25 472.5,246.75 472.5,246.75 C 472.5,246.75 473.125,246.375 474.75,246.5 C 476.375,246.625 476.125,246.125 476.125,246.125 C 476.125,246.125 476.875,245.25 477.875,245.125 C 478.875,245 478.75,245.125 479.625,245 C 480.5,244.875 480.5,244.5 481.125,244 C 481.75,243.5 482.375,243.875 483,243.75 C 483.625,243.625 484.875,243.5 484.875,243.5 C 487,243.125 485.125,243.125 485.25,242.25 C 485.375,241.375 486.25,241.375 486.25,241.375 C 486.25,241.375 487,241.5 487.5,241 C 488,240.5 488.25,240.25 488.25,239.625 C 488.25,239 487.625,238 487.625,238 C 487.625,238 486.75,237.375 486.75,236.625 C 486.75,235.875 486.875,235.625 487.125,235.125 C 487.375,234.625 487.125,233.75 487.125,232.25 C 487.125,230.75 487.125,230.625 487.25,229.625 C 487.375,228.625 488,229.125 488.75,228.625 C 489.5,228.125 488.5,226.875 488.5,226.875 C 488.5,226.875 488,226.875 486.875,226.5 C 485.75,226.125 485.25,226.125 484.5,224.625 C 483.75,223.125 484.125,223.5 484,222.875 C 483.875,222.25 483.25,222 483.5,220.5 C 483.75,219 482.50702,217.57298 482.50702,217.57298 L 481.44636,217.21943 C 481.44636,217.21943 480.73925,216.86587 480.56247,216.15877 C 480.3857,215.45166 480.73925,215.27488 480.91603,214.21422 C 481.0928,213.15356 480.3857,212.0929 480.3857,212.0929 L 479.14826,213.15356 C 479.14826,213.15356 480.91603,210.32514 481.0928,209.44125 C 481.26958,208.55737 481.0928,208.38059 481.44636,207.67348 C 481.79991,206.96638 482.15346,207.14315 483.21412,206.7896 C 484.27478,206.43605 484.62834,205.72894 484.62834,205.72894 C 484.62834,205.72894 485.15867,204.31473 484.98189,202.90051 C 484.80511,201.4863 484.62834,200.95597 484.62834,199.71853 C 484.62834,198.4811 483.21412,198.83465 483.21412,198.83465 L 482.15346,197.42044 C 482.15346,197.42044 481.0928,197.06688 480.56247,196.183 C 480.03214,195.29912 480.56247,194.76879 480.73925,193.70813 C 480.91603,192.64747 480.20892,192.29391 480.20892,192.29391 C 480.20892,192.29391 479.32504,190.17259 478.97148,189.11193 C 478.61793,188.05127 478.79471,187.52094 478.61793,186.63706 C 478.44115,185.75317 478.79471,185.22284 479.32504,184.51574 C 479.85537,183.80863 480.56247,182.74797 481.62313,182.39442 C 482.68379,182.04086 481.26958,180.80343 481.26958,180.80343 C 481.26958,180.80343 482.50702,177.09112 483.21412,177.09112 C 483.92123,177.09112 483.92123,177.09112 486.57288,176.91434 C 489.22453,176.73756 487.98709,176.03046 488.51742,175.32335 C 489.04775,174.61624 490.28519,174.79302 490.9923,174.61624 C 491.6994,174.43947 491.6994,174.61624 492.40651,174.61624 C 493.11362,174.61624 495.58849,173.90914 495.58849,173.90914 C 495.58849,173.90914 497.17948,172.49492 497.88659,172.14137 C 498.5937,171.78782 499.3008,171.25749 499.3008,171.25749 L 500.53824,172.49492 L 501.95245,172.6717 C 501.95245,172.6717 503.54344,173.37881 504.42733,173.55558 C 505.31121,173.73236 505.66476,173.90914 506.54865,173.73236 C 507.43253,173.55558 507.60931,173.20203 508.31641,171.78782 C 509.02352,170.3736 509.2003,170.02005 509.37707,168.78261 C 509.55385,167.54517 512.73583,167.54517 513.61972,167.19162 C 514.5036,166.83807 514.68038,166.48451 515.74104,165.95418 C 516.8017,165.42385 515.74104,164.36319 515.74104,162.59543 C 515.74104,160.82766 515.21071,160.65088 515.03393,159.41345 C 514.85715,158.17601 514.5036,157.82246 514.32682,156.93857 C 514.15005,156.05469 515.91781,155.17081 516.62492,153.75659 C 517.33203,152.34238 516.62492,151.81205 516.44814,150.57461 C 516.27137,149.33718 514.68038,149.33718 514.68038,149.33718 L 511.49839,147.21585 L 510.08418,146.50875 C 510.08418,146.50875 509.9074,145.09453 510.08418,143.50354 C 510.26096,141.91255 511.14484,141.38222 511.85195,140.14479 C 512.55905,138.90735 512.55905,137.49314 512.55905,136.60925 C 512.55905,135.72537 510.79129,135.37182 510.79129,135.37182 C 510.79129,135.37182 510.79129,132.18984 510.79129,131.30595 C 510.79129,130.42207 510.79129,127.77042 510.79129,126.53298 C 510.79129,125.29554 510.08418,122.99745 509.55385,122.11356 C 509.02352,121.22968 510.08418,119.63869 510.08418,119.63869 C 510.08418,119.63869 509.2003,117.69415 509.02352,116.81026 C 508.84674,115.92638 510.08418,112.03729 510.08418,112.03729 L 512.02872,107.26432 L 513.26616,105.143 C 513.26616,105.143 513.26616,101.96102 513.79649,101.25391 C 514.32682,100.54681 514.15005,97.18805 514.15005,97.18805 C 514.15005,97.18805 513.44294,90.47054 512.73583,90.02859 C 512.02873,89.58665 511.76356,89.05632 511.05645,88.17244 C 510.34935,87.28855 509.02352,88.08405 508.05125,88.08405 C 507.07898,88.08405 506.10671,87.99566 505.04605,87.81888 C 503.98539,87.64211 503.72022,87.37694 502.3944,87.11178 C 501.06857,86.84661 500.18469,87.99566 499.83113,88.70277 C 499.47758,89.40988 499.12403,89.67504 498.06337,91.26603 C 497.00271,92.85702 496.91432,91.61958 495.58849,92.2383 C 494.26267,92.85702 494.35106,91.35442 493.37878,91.00087 C 492.40651,90.64731 491.16908,91.35442 490.10841,91.35442 C 489.04775,91.35442 489.13614,91.08925 487.81032,90.20537 C 486.48449,89.32149 486.48449,89.67504 484.62834,91.44281 C 482.77218,93.21057 482.94896,92.59186 481.62313,92.32669 C 480.29731,92.06153 479.67859,93.56413 479.67859,93.56413 C 479.67859,93.56413 477.2921,95.86222 476.67339,96.21578 C 476.05467,96.56933 473.57979,97.27644 472.69591,98.51388 C 471.81203,99.75131 472.51913,99.30937 470.83976,100.19325 C 469.16038,101.07714 469.51393,100.28164 469.51393,99.22098 C 469.51393,98.16032 469.51393,98.77904 470.13265,97.36483 C 470.75137,95.95061 470.13265,96.74611 469.51393,96.48094 C 468.89521,96.21578 468.45327,95.68545 467.83455,94.80156 C 467.21583,93.91768 467.21583,93.56413 466.50873,92.85702 C 465.80162,92.14991 464.38741,93.65252 463.14997,93.47574 C 461.91253,93.29896 462.00092,93.47574 461.11704,93.56413 C 460.23315,93.65252 461.02865,94.35962 461.29381,95.15512 C 461.55898,95.95061 461.73576,95.86222 462.35447,96.56933 C 462.97319,97.27644 462.26609,98.51388 462.26609,99.22098 C 462.26609,99.92809 462.08931,100.01648 462.35447,100.81197 C 462.61964,101.60747 463.06158,101.3423 463.94546,101.96102 C 464.82935,102.57974 464.47579,102.93329 464.29902,103.72879 C 464.12224,104.52428 463.32675,103.6404 462.35447,103.55201 C 461.3822,103.46362 460.76348,104.87784 459.79121,105.40817 C 458.81894,105.9385 458.377,105.76172 457.40473,105.85011 C 456.43245,105.9385 456.60923,106.46883 455.01824,107.97143 C 453.42725,109.47403 453.33886,108.59015 452.18981,108.59015 C 451.04077,108.59015 451.48271,107.97143 450.15688,107.08754 C 448.83106,106.20366 449.53816,107.17593 448.56589,107.52949 C 447.59362,107.88304 448.65428,108.59015 449.273,109.56242 C 449.89172,110.53469 450.06849,111.2418 450.24527,111.59535 C 450.42205,111.9489 450.24527,112.03729 448.83106,113.53989 C 447.41684,115.0425 447.7704,113.62828 446.70974,113.62828 C 445.64908,113.62828 445.91424,113.71667 444.85358,113.80506 C 443.79292,113.89345 444.14647,113.36312 444.14647,112.65601 C 444.14647,111.9489 444.14647,112.03729 444.14647,110.53469 C 444.14647,109.03209 443.61614,109.38564 443.35098,109.03209 C 443.08581,108.67854 443.35098,108.23659 443.1742,107.79465 C 442.99743,107.35271 442.29032,106.73399 441.84838,106.73399 C 441.40644,106.73399 440.169,106.82238 439.90383,106.46883 C 439.63867,106.11527 439.10834,105.58494 438.31284,105.23139 C 437.51735,104.87784 436.63346,103.99395 436.27991,103.6404 C 435.92636,103.28685 436.27991,102.8449 436.3683,102.40296 C 436.45669,101.96102 438.04768,101.3423 439.3735,101.51908 C 440.69933,101.69586 443.52776,102.04941 445.73746,102.04941 C 447.94717,102.04941 449.00783,102.04941 449.89172,102.04941 C 450.7756,102.04941 452.89692,101.60747 454.04597,101.3423 C 455.19502,101.07714 456.69762,100.28164 457.22795,99.66292 C 457.75828,99.04421 457.40473,98.86743 457.31634,97.71838 C 457.22795,96.56933 456.8744,96.12739 456.0789,95.42028 C 455.28341,94.71318 455.37179,94.27123 452.01304,92.06153 C 448.65428,89.85182 448.83106,91.35442 447.50523,91.44281 C 446.17941,91.5312 446.35618,90.91248 445.38391,90.64731 C 444.41164,90.38215 442.37871,90.47054 440.69933,90.47054 C 439.01995,90.47054 438.93156,90.7357 437.60574,90.38215 C 436.27991,90.02859 436.89863,89.58665 435.74958,89.49826 C 434.60053,89.40988 434.33537,89.67504 433.3631,89.32149 C 432.39082,88.96793 432.12566,88.4376 431.41855,88.17244 C 430.71145,87.90727 431.68372,88.34922 430.44628,88.26083 z"
    />
  );
};

Russia.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Russia;
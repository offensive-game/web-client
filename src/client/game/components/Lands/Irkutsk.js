// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Irkutsk = (props) => {
  const { onClick } = props;

  return (
    <path
      id="irkutsk"
      onClick={onClick}
      d="M 657.42756,171.61104 C 657.69273,173.55558 657.33917,172.58331 657.33917,172.58331 C 657.33917,172.58331 656.4375,173.5 655.3125,173.1875 C 654.1875,172.875 653.4375,172.5 653.3125,171.625 C 653.1875,170.75 652.0625,170.3125 652.0625,170.3125 C 652.0625,170.3125 650.5,170.25 650.4375,169.75 C 650.375,169.25 650.125,168.875 649.9375,167.3125 C 649.75,165.75 649.875,165.375 649.25,165.375 C 648.625,165.375 647.875,165.5 647.625,165.25 C 647.375,165 647.0625,164.8125 647,164 C 646.9375,163.1875 646.875,162.375 646.5,162.25 C 646.125,162.125 645.5,161.8125 645.125,161.8125 C 644.75,161.8125 643.5,162.0625 643.375,161.5625 C 643.25,161.0625 643.125,160.375 643.25,159.875 C 643.375,159.375 643.5625,159.0625 643.5625,158.625 C 643.5625,158.1875 643.3125,157.1875 643.3125,157.1875 C 643.3125,157.1875 642.875,157.1875 642.4375,156.8125 C 642,156.4375 642,155.875 641.375,155.75 C 640.75,155.625 640.375,155.4375 639.8125,156.0625 C 639.25,156.6875 638.875,157.25 638.5625,157.375 C 638.25,157.5 636.375,157.6875 635.75,157.6875 C 635.125,157.6875 634.1875,157.3125 634.1875,157.3125 L 633.75,156.8125 C 633.75,156.8125 632.875,156.5 632.875,156.875 C 632.875,157.25 633.1875,157.625 632.875,158.125 C 632.5625,158.625 632.75,158.625 632.0625,159.1875 C 631.375,159.75 630.9375,159.875 630.875,160.3125 C 630.8125,160.75 630.8125,160.9375 631.1875,161.375 C 631.5625,161.8125 631.75,161.6875 631.9375,162.25 C 632.125,162.8125 632.1875,162.9375 632.1875,163.5625 C 632.1875,164.1875 632.25,165.0625 631.8125,165.4375 C 631.375,165.8125 631.25,165.75 630.9375,166.5625 C 630.625,167.375 630.375,167.5 630.1875,167.875 C 630,168.25 629.75,168.4375 630.125,169.1875 C 630.5,169.9375 630.875,170.4375 631.125,170.75 C 631.375,171.0625 631.6875,171.5625 631.4375,172.375 C 631.1875,173.1875 631.125,173.625 630.625,174.125 C 630.125,174.625 629.6875,175.6875 629.3125,176.125 C 628.9375,176.5625 629.0625,177.0625 628.4375,176.75 C 627.8125,176.4375 627.375,175.875 627.3125,175.625 C 627.25,175.375 627.1875,175.125 627,174.375 C 626.8125,173.625 626.5625,172.6875 626.4375,172.4375 C 626.3125,172.1875 624.72387,171.34587 624.32612,172.14137 C 623.92837,172.93686 624.06096,173.68816 623.44224,173.95333 C 622.82352,174.21849 622.69094,174.21849 622.42577,174.61624 C 622.16061,175.01399 621.40931,176.11884 620.83478,175.98626 C 620.26026,175.85368 620.12767,175.7211 619.1996,175.58851 C 618.27152,175.45593 617.52022,175.14657 617.12247,175.7211 C 616.72472,176.29562 615.70826,177.13531 615.00115,176.87015 C 614.29404,176.60498 613.36597,176.07465 613.145,175.85368 C 612.92402,175.63271 611.55401,175.01399 610.8469,175.10238 C 610.13979,175.19077 610.13979,175.36754 608.76977,175.27915 C 607.39975,175.19077 606.07393,174.66044 605.19004,174.66044 C 604.30616,174.66044 602.00806,173.51139 601.30096,173.64397 C 600.59385,173.77655 600.72643,173.77655 599.97513,174.08591 C 599.22383,174.39527 598.6935,173.90914 598.38414,174.43947 C 598.07478,174.9698 598.07478,175.7211 597.1467,175.58851 C 596.21863,175.45593 595.73249,175.45593 595.37894,175.10238 C 595.02538,174.74882 594.76022,174.21849 594.76022,174.21849 C 594.76022,174.21849 594.18569,173.99752 593.83214,174.08591 C 593.47859,174.1743 592.55051,174.08591 592.55051,174.08591 C 592.55051,174.08591 591.75502,173.29042 591.57824,173.24622 C 591.40146,173.20203 590.65016,172.76009 590.3408,172.80428 C 590.03144,172.84848 588.70562,173.06945 588.70562,173.06945 C 588.70562,173.06945 586.76107,173.20203 587.08196,173.64013 C 585.39105,173.02525 586.46709,173.17897 585.39105,172.71781 C 584.31502,172.25666 585.08362,171.33434 584.46874,169.79716 C 583.85386,168.25997 583.54643,170.10459 583.54643,170.10459 C 583.54643,170.10459 582.31668,170.10459 581.85552,168.25997 C 581.39436,166.41534 582.16296,167.33765 582.47039,165.80047 C 582.77783,164.26328 582.00924,164.417 582.00924,162.57237 C 582.00924,160.72774 583.08527,161.49634 583.08527,161.49634 C 583.08527,161.49634 583.39271,159.80543 583.54643,157.03849 C 583.70015,154.27155 582.16296,156.2699 581.54808,154.88643 C 580.93321,153.50296 581.54808,153.65668 581.85552,152.88808 C 582.16296,152.11949 582.62411,151.65833 583.54643,150.12114 C 584.46874,148.58395 584.1613,149.35255 586.46709,148.89139 C 588.77287,148.43023 587.85055,146.27817 589.69518,145.66329 C 591.53981,145.04842 590.31006,145.35586 591.53981,146.58561 C 592.76956,147.81536 593.38443,146.27817 594.92162,145.97073 C 596.45881,145.66329 596.15137,144.74098 598.30344,145.04842 C 600.4555,145.35586 599.53319,145.66329 600.14806,146.89305 C 600.76294,148.1228 601.68525,148.1228 603.52988,145.97073 C 605.37451,143.81867 603.83732,137.66991 602.60757,134.2881 C 601.37782,130.90628 605.5,123.25 605.5,123.25 C 605.5,123.25 610.375,121.75 611.625,121 C 612.875,120.25 612.75,120.125 613.125,118.375 C 613.5,116.625 613.625,113.75 615,113.5 C 616.375,113.25 616.125,115.25 616.125,115.25 C 616.25,116 617.625,115.75 619.125,116 C 620.183,116.17633 619.74851,115.2333 619.53218,114.31133 C 619.4418,113.92616 619.3895,113.54467 619.5,113.25 C 619.875,112.25 631.79494,113.36312 631.79494,113.36312 C 631.35299,114.42378 631.44138,115.83799 631.70655,116.27993 C 631.97171,116.72188 633.12076,119.19675 632.76721,121.22968 C 632.41365,123.26261 631.88332,129.36141 632.14849,130.51046 C 632.41365,131.65951 632.50204,134.48793 633.29754,135.28343 C 634.09303,136.07892 634.44659,136.69764 634.80014,137.40475 C 635.15369,138.11186 638.77762,139.2609 639.39633,140.76351 C 640.01505,142.26611 639.6615,142.61966 640.72216,143.23838 C 641.78282,143.8571 642.75509,145.18292 642.84348,146.42036 C 642.93187,147.6578 642.93187,149.51395 643.81575,149.24879 C 644.69963,148.98362 645.67191,147.74619 646.02546,147.39263 C 646.37901,147.03908 647.70484,146.59714 648.85389,147.03908 C 650.00294,147.48102 650.2681,147.48102 651.41715,147.30424 C 652.5662,147.12747 653.62686,147.48102 653.62686,147.48102 C 653.62686,147.48102 654.51074,148.80685 654.59913,149.51395 C 654.68752,150.22106 654.15719,150.75139 655.74818,150.663 C 657.33917,150.57461 657.69272,150.48622 657.8695,152.25399 C 658.04627,154.02176 659.01855,154.99403 659.01855,154.99403 C 659.01855,154.99403 659.28371,156.85019 659.19532,157.29213 C 659.10694,157.73407 658.48822,158.79473 658.75338,159.94378 C 659.01855,161.09283 659.63727,162.24187 659.10694,163.03737 C 658.5766,163.83286 657.69272,165.60063 657.69272,166.30774 C 657.69272,167.01485 657.51594,168.871 657.69272,169.48972 C 657.8695,170.10844 657.16239,169.6665 657.42756,171.61104 z"
    />
  );
};

Irkutsk.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Irkutsk;

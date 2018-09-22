// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Mongolia = (props) => {
  const { onClick } = props;

  return (
    <path
      id="mongolia"
      onClick={onClick}
      d="M 587.08196,173.64013 C 587.08196,173.64013 587.7737,173.64013 588.08113,174.56244 C 588.38857,175.48475 589.23403,176.94508 588.38857,178.09797 C 587.54312,179.25087 586.85138,181.40293 587.7737,183.47814 C 588.69601,185.55334 590.31006,185.78392 590.15634,187.01367 C 590.00262,188.24342 589.77204,187.93598 589.61832,189.62689 C 589.4646,191.3178 589.77204,192.39383 589.38137,193.10528 C 589.1875,194.0625 588.23485,195.16077 588.23485,195.16077 C 588.23485,195.16077 589.36853,197.06688 589.98725,197.24366 C 590.60597,197.42044 591.1363,203.69601 591.1363,203.69601 C 591.1363,203.69601 592.10857,203.07729 592.37373,203.87279 C 592.6389,204.66828 592.99245,205.99411 592.99245,205.99411 C 592.99245,205.99411 594.31828,206.7896 594.31828,207.23154 C 594.31828,207.67348 594.22989,208.73414 594.58344,208.91092 C 594.937,209.0877 596.35121,209.70642 596.35121,209.70642 L 596.70476,211.03224 C 596.70476,211.03224 596.88154,212.18129 597.41187,212.26968 C 597.9422,212.35807 598.20736,212.18129 598.91447,212.53484 C 599.62158,212.8884 599.79835,212.97679 600.41707,212.97679 C 601.03579,212.97679 601.30096,212.8884 601.30096,213.41873 C 601.30096,213.94906 601.21257,214.83294 601.56612,214.92133 C 601.91967,215.00972 602.80356,215.09811 602.80356,215.09811 C 602.80356,215.09811 603.06872,215.62844 603.42228,215.98199 C 603.77583,216.33554 604.83649,216.42393 605.01327,216.77748 C 605.19004,217.13104 605.27843,217.74976 605.36682,218.10331 C 605.45521,218.45686 605.10166,219.25236 606.42748,219.34075 C 607.75331,219.42913 615.44309,218.28009 615.44309,218.28009 L 615.97342,219.16397 C 615.97342,219.16397 616.50375,219.6943 617.12247,219.87108 C 617.74119,220.04785 618.89024,219.60591 619.86251,220.04785 C 620.83478,220.4898 621.63028,220.75496 622.07222,220.75496 C 622.51416,220.75496 623.39804,220.75496 623.39804,220.75496 C 623.39804,220.75496 623.66321,221.9924 624.10515,222.08079 C 624.54709,222.16917 626.31486,221.46207 626.31486,221.46207 C 626.31486,221.46207 626.66841,220.93174 627.19874,221.02013 C 627.72907,221.10851 627.81746,219.87108 628.78973,219.78269 C 629.762,219.6943 630.29233,219.6943 630.64589,219.6943 C 630.99944,219.6943 633.12076,218.63364 633.20915,219.51752 C 633.29754,220.40141 633.38593,220.93174 633.82787,221.46207 C 634.26981,221.9924 635.50725,222.34595 635.94919,222.34595 C 636.39113,222.34595 637.3634,221.72723 637.98212,221.37368 C 638.60084,221.02013 638.866,220.66657 639.6615,220.84335 C 640.45699,221.02013 641.25249,221.55046 641.60604,221.72723 C 641.9596,221.90401 642.13637,221.90401 643.19703,222.25756 C 644.25769,222.61112 645.67191,222.52273 645.67191,222.52273 C 645.67191,222.52273 648.23517,222.78789 649.13497,223.12028 C 649.5625,223.375 651.4375,224.0625 652.125,224 C 653.125,223.5 653,224.5 654.375,223 C 655.75,221.5 654.875,222.75 656.25,220.75 C 657.625,218.75 659.875,218.5 657.375,218.25 C 654.875,218 655.25,218.75 654.375,217.875 C 653.5,217 654.25,216.75 652.75,216.875 C 651.25,217 651.25,217.25 650.875,216.75 C 650.5,216.25 651.625,215.875 649.75,215.875 C 647.875,215.875 648.5,216.625 647,215.75 C 645.5,214.875 645.375,215.25 645.5,214.25 C 645.625,213.25 645.625,212.375 646.625,212.125 C 647.625,211.875 647.375,212.125 648,211.625 C 648.625,211.125 649,211 649,210.25 C 649,209.5 650.375,209.125 650.75,208.125 C 651.125,207.125 651.125,205.625 651.875,205.625 C 652.625,205.625 652.625,205.5 653.25,207.25 C 653.875,209 652.375,209.75 654.125,209.875 C 655.875,210 656.875,210.125 657.625,210 C 658.375,209.875 657.875,210.125 658.75,211.125 C 659.625,212.125 659.5,212.625 660.375,213.25 C 661.25,213.875 661.375,215 661.375,215 C 661.375,215 661.375,215.625 662.5,215.375 C 663.625,215.125 665.375,215.125 665.375,215.125 C 665.375,215.125 664.875,214.5 665.5,216.625 C 666.125,218.75 666.5,218.25 666.5,220.125 C 666.5,222 665.625,223 666.5,223.625 C 667.375,224.25 668.375,224.5 668.375,224.5 C 668.375,224.5 671,222 671.25,220.875 C 671.5,219.75 672.25,219.375 672.125,218.5 C 672,217.625 671.75,218.25 672.25,217.125 C 672.75,216 672.75,214 672.75,214 C 672.75,214 672.25,213.875 671.75,213.625 C 671.25,213.375 671,213.5 670.75,212.125 C 670.5,210.75 671,210.75 670.125,210.375 C 669.25,210 668.875,209.375 668.625,208.625 C 668.375,207.875 668.5,207.375 667.875,207.25 C 667.25,207.125 667.375,207 666,206 C 664.625,205 664.875,205.5 663.875,204.875 C 662.875,204.25 662.625,203.875 662.625,203 C 662.625,202.125 662.375,201.875 663,201.25 C 663.625,200.625 664,202 664.125,199.75 C 664.25,197.5 663.5,197.375 664.625,195.125 C 665.75,192.875 665.5,192 666.375,191.25 C 666.9375,190.8125 666.8125,191.25 668.46875,189.5 C 668.56449,189.55387 668.56449,189.64226 667.59222,189.46549 C 666.61994,189.28871 666.44317,187.43255 665.20573,187.34417 C 663.96829,187.25578 663.1728,186.54867 662.90763,185.5764 C 662.64247,184.60413 661.75859,181.7757 659.81404,181.86409 C 657.8695,181.95248 657.51594,179.38921 655.74818,177.26789 C 653.98041,175.14657 657.8695,175.32335 657.8695,174.61624 C 657.8695,173.90914 657.60433,174.52785 657.33917,172.58331 C 657.33917,172.58331 656.4375,173.5 655.3125,173.1875 C 654.1875,172.875 653.4375,172.5 653.3125,171.625 C 653.1875,170.75 652.0625,170.3125 652.0625,170.3125 C 652.0625,170.3125 650.5,170.25 650.4375,169.75 C 650.375,169.25 650.125,168.875 649.9375,167.3125 C 649.75,165.75 649.875,165.375 649.25,165.375 C 648.625,165.375 647.875,165.5 647.625,165.25 C 647.375,165 647.0625,164.8125 647,164 C 646.9375,163.1875 646.875,162.375 646.5,162.25 C 646.125,162.125 645.5,161.8125 645.125,161.8125 C 644.75,161.8125 643.5,162.0625 643.375,161.5625 C 643.25,161.0625 643.125,160.375 643.25,159.875 C 643.375,159.375 643.5625,159.0625 643.5625,158.625 C 643.5625,158.1875 643.3125,157.1875 643.3125,157.1875 C 643.3125,157.1875 642.875,157.1875 642.4375,156.8125 C 642,156.4375 642,155.875 641.375,155.75 C 640.75,155.625 640.375,155.4375 639.8125,156.0625 C 639.25,156.6875 638.875,157.25 638.5625,157.375 C 638.25,157.5 636.375,157.6875 635.75,157.6875 C 635.125,157.6875 634.1875,157.3125 634.1875,157.3125 L 633.75,156.8125 C 633.75,156.8125 632.875,156.5 632.875,156.875 C 632.875,157.25 633.1875,157.625 632.875,158.125 C 632.5625,158.625 632.75,158.625 632.0625,159.1875 C 631.375,159.75 630.9375,159.875 630.875,160.3125 C 630.8125,160.75 630.8125,160.9375 631.1875,161.375 C 631.5625,161.8125 631.75,161.6875 631.9375,162.25 C 632.125,162.8125 632.1875,162.9375 632.1875,163.5625 C 632.1875,164.1875 632.25,165.0625 631.8125,165.4375 C 631.375,165.8125 631.25,165.75 630.9375,166.5625 C 630.625,167.375 630.375,167.5 630.1875,167.875 C 630,168.25 629.75,168.4375 630.125,169.1875 C 630.5,169.9375 630.875,170.4375 631.125,170.75 C 631.375,171.0625 631.6875,171.5625 631.4375,172.375 C 631.1875,173.1875 631.125,173.625 630.625,174.125 C 630.125,174.625 629.6875,175.6875 629.3125,176.125 C 628.9375,176.5625 629.0625,177.0625 628.4375,176.75 C 627.8125,176.4375 627.375,175.875 627.3125,175.625 C 627.25,175.375 627.1875,175.125 627,174.375 C 626.8125,173.625 626.5625,172.6875 626.4375,172.4375 C 626.3125,172.1875 624.72387,171.34587 624.32612,172.14137 C 623.92837,172.93686 624.06096,173.68816 623.44224,173.95333 C 622.82352,174.21849 622.69094,174.21849 622.42577,174.61624 C 622.16061,175.01399 621.40931,176.11884 620.83478,175.98626 C 620.26026,175.85368 620.12767,175.7211 619.1996,175.58851 C 618.27152,175.45593 617.52022,175.14657 617.12247,175.7211 C 616.72472,176.29562 615.70826,177.13531 615.00115,176.87015 C 614.29404,176.60498 613.36597,176.07465 613.145,175.85368 C 612.92402,175.63271 611.55401,175.01399 610.8469,175.10238 C 610.13979,175.19077 610.13979,175.36754 608.76977,175.27915 C 607.39975,175.19077 606.07393,174.66044 605.19004,174.66044 C 604.30616,174.66044 602.00806,173.51139 601.30096,173.64397 C 600.59385,173.77655 600.72643,173.77655 599.97513,174.08591 C 599.22383,174.39527 598.6935,173.90914 598.38414,174.43947 C 598.07478,174.9698 598.07478,175.7211 597.1467,175.58851 C 596.21863,175.45593 595.73249,175.45593 595.37894,175.10238 C 595.02538,174.74882 594.76022,174.21849 594.76022,174.21849 C 594.76022,174.21849 594.18569,173.99752 593.83214,174.08591 C 593.47859,174.1743 592.55051,174.08591 592.55051,174.08591 C 592.55051,174.08591 591.75502,173.29042 591.57824,173.24622 C 591.40146,173.20203 590.65016,172.76009 590.3408,172.80428 C 590.03144,172.84848 588.70562,173.06945 588.70562,173.06945 C 588.70562,173.06945 586.76107,173.20203 587.08196,173.64013 z"
    />
  );
};

Mongolia.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Mongolia;
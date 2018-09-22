// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const GreatBritain = (props) => {
  const { onClick } = props;
  return (
    <path
      id="great_britain"
      onClick={onClick}
      d="M 316.5137,194.23847 C 316.5137,194.23847 316.16016,194.76879 314.74594,194.76879 C 313.33172,194.76879 313.15494,194.59201 312.27106,195.12235 C 311.38718,195.65267 310.32653,195.82945 309.44264,196.00623 C 308.55876,196.183 307.49809,197.24366 307.49809,197.24366 C 307.49809,197.24366 307.49809,197.95077 306.26066,198.30432 C 305.02321,198.65787 305.2,198.48111 303.96255,198.48111 C 302.72513,198.48111 303.07867,197.42044 302.9019,196.71333 C 302.9019,196.71333 298.75,197.125 300,196.375 C 301.25001,195.625 302.25001,196.125 301.37501,195.5 C 300.5,194.87501 299.12501,194.75 300.62501,194.5 C 302.125,194.25 302.5,194.5 302.5,194 C 302.5,193.5 301.5,194.625 302.5,193 C 303.50001,191.375 303.75,191.375 304.37501,190.875 C 305.00001,190.375 304.62501,188.87501 305.50001,189.125 C 306.375,189.37501 307.37501,189.625 307.37501,189.625 L 307.87501,188.625 C 307.87501,188.625 304.75,188.5 304.50001,188 C 304.50001,188 302.87501,186.875 302.37501,186.875 C 301.87501,186.875 300.75001,187 301.12501,186.5 C 301.5,186 302.25001,184.50001 302.25001,184.50001 C 302.25001,184.50001 300.62501,183.25 301.25001,182.75 C 301.87501,182.25001 302,182.375 302,181.5 C 302,180.62501 300.875,180.5 302.125,179.25 C 303.37501,178 303.625,178.25 304.50001,177.5 C 305.375,176.75 305.375,176.625 306,177.25 C 306.62501,177.87501 306.62501,178.875 307.75001,177.5 C 308.87501,176.125 309.00001,175.375 309.00001,175.375 C 309.00001,175.375 308.50001,175.5 310.375,174.5 C 312.25001,173.50001 310.75,172.625 313.5,173.00001 C 316.25,173.375 315.75,173.50001 316.375,173.375 C 317.00001,173.25 317.375,171.625 317.75001,173.00001 C 318.12501,174.375 317.25,174.62501 319,175.125 C 320.75,175.625 321.50001,175.375 321.00001,176.25001 C 320.50001,177.125 320.37501,177 320.87501,177.75 C 321.37501,178.50001 321.75,178.875 321.75,179.5 C 321.75,180.12501 321.37501,180.62501 320.50001,181 C 319.625,181.375 319.75001,180.875 318.62501,182 C 317.50001,183.125 316.875,182.87501 316.875,182.87501 C 316.875,182.87501 316.62501,182.25001 315.87501,182.75 C 315.125,183.25 315.50001,184 314.37501,183.25 C 313.25001,182.5 311.875,182.5 311.875,182.5 C 311.875,182.5 311.375,182.5 311.50001,183.25 C 311.62501,184 312.25001,186.5 312.25001,186.5 C 312.25001,186.5 313.37501,188.5 313,189.37501 C 312.62501,190.25 310.75,190.75 312.375,190.875 C 314,191.00001 313.87501,190.625 313.87501,191.75 C 313.87501,192.875 313.87501,193.5 314.87501,193.375 C 315.87501,193.25001 316.62501,194.375 316.5137,194.23847 z M 328.71129,183.2783 C 328.18096,182.65958 328.44613,182.74797 328.26935,182.12925 C 328.09257,181.51053 328.35774,181.42215 328.35774,180.80343 C 328.35774,180.18471 328.44613,179.91954 328.71129,179.12405 C 328.97646,178.32855 327.29708,177.62145 327.29708,177.00273 C 327.29708,176.38401 326.23642,175.58851 326.05964,175.23496 C 325.88286,174.88141 325.35253,174.43947 324.73382,174.52785 C 324.1151,174.61624 324.1151,174.9698 323.40799,175.32335 C 322.70088,175.6769 322.70088,175.14657 322.17055,174.70463 C 321.64022,174.26269 321.72861,173.73236 321.72861,172.76009 C 321.72861,171.78782 321.817,172.22976 322.17055,171.78782 C 322.52411,171.34587 322.6125,171.43426 323.14283,170.81554 C 323.67316,170.19683 323.40799,170.3736 323.40799,169.75488 C 323.40799,169.13616 323.40799,168.60583 323.14283,167.89873 C 322.87766,167.19162 322.17055,167.72195 321.90539,167.01484 C 321.64022,166.30774 321.55184,166.48451 321.10989,166.21935 C 320.66795,165.95418 320.49118,166.13096 319.5189,166.04257 C 318.54663,165.95418 319.25374,165.42385 319.16535,165.0703 C 319.07696,164.71675 319.07696,164.53997 318.90019,163.5677 C 318.72341,162.59543 318.28147,163.30253 317.75114,163.39092 C 317.22081,163.47931 317.04403,163.47931 316.86725,162.59543 C 316.69048,161.71154 316.86725,162.0651 316.77886,161.62316 C 316.69048,161.18121 316.60209,161.18121 315.98337,160.20894 C 315.36465,159.23667 316.07176,159.767 316.77886,159.23667 C 317.48597,158.70634 317.39758,158.44117 318.0163,157.99923 C 318.63502,157.55729 318.0163,157.38051 317.83952,156.67341 C 317.66275,155.9663 317.30919,155.78952 317.30919,155.78952 C 317.30919,155.78952 316.69048,155.9663 315.62982,155.9663 C 314.56916,155.9663 314.65754,155.78952 314.12721,155.08242 C 313.59688,154.37531 314.2156,154.37531 315.0111,153.75659 C 315.80659,153.13787 315.54143,152.78432 316.33692,151.90044 C 317.13242,151.01655 317.57436,151.10494 318.54663,150.92817 C 319.5189,150.75139 319.07696,150.22106 319.5189,149.1604 C 319.96085,148.09974 320.13762,147.92296 320.40279,147.30424 C 320.66795,146.68552 321.19828,145.89003 321.37506,144.74098 C 321.55184,143.59193 323,145.5 326,144.5 C 329,143.5 329,144.5 329,144.5 C 329,144.5 330.5,147 328,148 C 325.5,149 327,153 327,153 L 327.73902,153.04949 C 327.73902,153.04949 328.6229,152.34238 329.33001,152.25399 C 330.03712,152.1656 329.94873,152.60754 330.83261,152.60754 C 331.7165,152.60754 331.53972,152.07721 332.60038,151.37011 C 333.66104,150.663 333.39587,152.1656 333.39587,152.78432 C 333.39587,153.40304 334.81009,155.17081 334.81009,155.17081 L 334.45653,155.78952 C 334.45653,155.78952 333.83782,156.14308 333.83782,157.11535 C 333.83782,158.08762 333.57265,157.82246 333.39587,158.2644 C 333.2191,158.70634 332.86554,158.70634 332.4236,158.9715 C 331.98166,159.23667 332.51199,159.41345 332.68877,160.29733 C 332.86554,161.18121 332.60038,160.73927 332.15844,160.82766 C 331.7165,160.91605 331.27455,160.91605 330.921,161.53477 C 330.56745,162.15349 330.83261,162.24187 330.30228,162.94898 C 329.77195,163.65609 329.86034,163.39092 328.71129,163.74448 C 327.56224,164.09803 328.09257,164.09803 328.35774,165.42385 C 328.6229,166.74968 329.50679,164.98191 331.09778,164.80514 C 332.68877,164.62836 332.33521,164.80514 333.39587,164.80514 C 334.45653,164.80514 334.01459,164.89352 334.7217,165.42385 C 335.42881,165.95418 334.89848,166.21935 335.25203,166.83807 C 335.60558,167.45679 335.95914,167.10323 336.40108,167.72195 C 336.84302,168.34067 336.40108,168.95939 336.40108,169.84327 C 336.40108,170.72716 336.40108,170.63877 336.40108,170.63877 C 336.40108,170.63877 337.46174,173.82075 338.87595,174.61624 C 340.29017,175.41174 339.75984,175.41174 340.37855,175.94207 C 340.99727,176.4724 342.14632,179.38921 342.49987,179.83116 C 342.85343,180.2731 342.85343,180.62665 343.0302,182.21764 C 343.20698,183.80863 343.0302,183.45508 342.85343,184.0738 C 342.67665,184.69251 342.58826,184.60413 342.3231,185.5764 C 342.05793,186.54867 342.3231,186.72545 342.3231,187.079 C 342.3231,187.43255 342.85343,187.69772 344.62119,186.81383 C 346.38896,185.92995 345.68185,186.19512 346.8309,185.84156 C 347.97995,185.48801 347.71479,185.39962 348.77545,185.66479 C 349.83611,185.92995 349.65933,186.10673 350.6316,187.079 C 351.60387,188.05127 350.98516,188.22805 351.25032,188.93515 C 351.51549,189.64226 351.16193,189.55387 350.89677,190.26098 C 350.6316,190.96809 350.6316,190.8797 350.18966,191.76358 C 349.74772,192.64747 350.01288,192.47069 349.65933,193.00102 C 349.30578,193.53135 349.04061,193.26618 347.97995,193.53135 C 346.91929,193.79651 347.09607,194.41523 346.56574,194.94556 C 346.03541,195.47589 346.21218,195.65267 346.1238,196.09461 C 346.03541,196.53655 346.56574,197.33205 346.56574,197.33205 C 346.56574,197.33205 347.36123,197.6856 347.80317,198.12754 C 348.24512,198.56948 348.06834,198.92304 347.53801,199.80692 C 347.00768,200.69081 346.8309,200.24886 345.77024,200.69081 C 344.70958,201.13275 344.35603,200.69081 343.29537,200.60242 C 342.23471,200.51403 342.3231,200.95597 340.8205,201.4863 C 339.31789,202.01663 339.40628,201.57469 338.25723,201.4863 C 337.10818,201.39791 337.19657,201.39791 336.04752,201.4863 C 334.89848,201.57469 334.98686,201.92824 333.66104,202.72374 C 332.33521,203.51923 332.86554,202.72374 332.4236,202.37018 C 331.98166,202.01663 331.7165,201.92824 331.09778,201.30952 C 330.47906,200.69081 330.47906,200.95597 329.94873,201.13275 C 329.4184,201.30952 328.26935,203.34246 327.47385,203.69601 C 326.67836,204.04956 326.58997,203.87279 325.44092,203.87279 C 324.29187,203.87279 324.64543,203.87279 324.1151,203.96117 C 323.58477,204.04956 323.23121,204.93345 322.52411,205.72894 C 321.817,206.52444 321.99378,205.99411 320.66795,206.17088 C 319.34213,206.34766 319.43052,206.08249 319.25374,205.72894 C 319.07696,205.37539 319.43052,205.37539 319.87246,204.75667 C 320.3144,204.13795 321.10989,202.9889 321.64022,202.10502 C 322.17055,201.22114 322.43572,201.66308 323.76154,200.86758 C 325.08737,200.07209 324.02671,200.51403 324.64543,199.1882 C 325.26415,197.86238 325.35253,197.86238 326.67836,197.42044 C 326.67836,197.42044 327.25,196.25 326.125,195.625 C 325,195 324.5,195.25 323.375,194.75 C 322.25,194.25 321.375,194.5 321.625,193.8125 C 322.75,192.5 323,191.875 323.375,191.25 C 323.75,190.625 323.5,190 324,190 C 324.5,190 324.75,190.25 325.375,189.875 C 326,189.5 326.125,189.25 326.125,188.5 C 326.125,187.75 326,187.5 326.25,186.75 C 326.5,186 327.25,185.375 326.625,184.875 C 326,184.375 326.5,184.5 325.75,184.25 C 325,184 324.5,183.5 324.5,183.5 L 324.75,182.5 L 324.9375,180.75 C 324.9375,180.75 325.125,180.875 326.375,181.375 C 327.625,181.875 328.375,183.5 328.375,183.5 C 328.64075,183.97231 329.0265,183.95957 328.71129,183.2783 z"
    />
  );
};

GreatBritain.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default GreatBritain;
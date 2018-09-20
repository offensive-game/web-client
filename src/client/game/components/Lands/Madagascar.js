// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Madagascar = (props) => {
  const { onClick } = props;

  return (
    <path
      id="madagascar"
      onClick={onClick}
      d="M 509.75,434 C 510,435 510.75,434.75 510.75,437 C 510.75,439.25 511.25,442.5 509.75,440.5 C 508.25,438.5 508.25,437.75 508.25,439 C 508.25,440.25 508.5,442.5 508.5,442.5 C 508.5,442.5 509.73063,444.2007 508.13964,444.2007 C 506.54865,444.2007 506.37187,444.02393 506.37187,444.73103 C 506.37187,445.43814 506.54865,446.85235 506.54865,446.85235 L 505.48799,447.91301 L 504.95766,450.21111 C 504.95766,450.21111 506.72542,450.38789 505.66476,452.15565 C 504.6041,453.92342 504.25055,454.45375 504.25055,454.45375 C 504.25055,454.45375 504.42733,452.86276 504.07377,456.3983 C 503.72022,459.93383 503.72022,460.46416 503.72022,460.46416 C 503.72022,460.46416 504.78088,460.11061 503.36667,461.87837 C 501.95245,463.64614 501.42212,464.17647 501.06857,465.06035 C 500.71502,465.94424 501.42212,466.82812 500.36146,467.712 C 499.3008,468.59589 498.77047,469.30299 498.77047,469.30299 L 497.70981,470.36365 C 497.70981,470.36365 497.35626,471.77787 497.35626,472.48497 C 497.35626,473.19208 496.82593,473.72241 496.82593,473.72241 C 496.82593,473.72241 496.2956,474.25274 496.2956,474.95985 C 496.2956,475.66696 496.47238,476.02051 495.58849,476.72762 C 494.70461,477.43472 495.05816,477.6115 493.9975,478.49538 C 492.93684,479.37927 492.58329,478.14183 492.58329,480.08637 C 492.58329,482.03092 492.05296,482.9148 491.16907,482.9148 C 490.28519,482.9148 481.79991,483.09158 480.3857,482.9148 C 478.97148,482.73802 481.26958,475.66696 479.32504,474.42952 C 477.38049,473.19208 476.14306,468.94944 477.38049,468.06556 C 478.61793,467.18167 477.91082,468.06556 478.79471,467.18167 C 479.67859,466.29779 479.67859,466.29779 480.20892,465.23713 C 480.73925,464.17647 481.62313,464.17647 481.62313,464.17647 C 481.62313,464.17647 480.56247,461.87837 481.26958,461.87837 C 481.97669,461.87837 481.62313,459.22672 481.62313,459.22672 C 481.62313,459.22672 481.97669,457.98929 482.50702,457.1054 C 483.03735,456.22152 481.97669,455.33764 483.3909,455.16086 C 484.80511,454.98408 485.51222,455.33764 485.51222,454.45375 C 485.51222,453.56987 484.62834,453.39309 483.92123,453.21631 C 483.21412,453.03954 482.86057,453.21631 482.86057,451.97888 C 482.86057,450.74144 482.33024,451.27177 481.97669,450.03433 C 481.62313,448.7969 480.56247,449.504 481.79991,447.91301 C 483.03735,446.32202 483.03735,447.38268 483.3909,445.79169 C 483.74445,444.2007 482.33024,443.14004 484.09801,443.14004 C 485.86577,443.14004 486.3961,443.67037 488.16387,442.96327 C 489.93164,442.25616 487.98709,442.07938 490.81552,442.25616 C 493.64395,442.43294 493.82073,443.31682 494.88139,442.25616 C 495.94205,441.1955 496.47238,441.54905 496.64915,440.31162 C 496.82593,439.07418 496.64915,438.72063 497.88659,438.1903 C 499.12403,437.65997 499.12403,438.1903 500.00791,437.48319 C 500.89179,436.77608 501.5989,435.8922 501.42212,434.83154 C 501.24535,433.77088 500.36146,433.24055 501.95245,433.24055 C 503.54344,433.24055 503.36667,433.77088 504.07377,432.88699 C 504.78088,432.00311 504.6041,432.00311 504.95766,430.41212 C 505.31121,428.82113 504.95766,428.46758 505.84154,427.93725 C 506.72542,427.40692 508.31641,425.63915 508.31641,425.63915 C 508.31641,425.63915 508.84674,424.04816 509.55385,426.52303 C 510.26096,428.99791 509.55385,428.64435 510.43773,429.35146 C 511.32162,430.05857 511.49839,429.52824 511.49839,430.41212 C 511.49839,431.296 511.14484,433.06377 511.14484,433.06377 L 509.75,434 z"
    />
  );
};

Madagascar.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Madagascar;

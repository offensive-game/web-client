// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const EasternAustralia = (props) => {
  const { onClick } = props;

  return (
    <path
      id="eastern_australia"
      onClick={onClick}
      d="M 682.08791,409.72925 C 682.08791,409.72925 682.26468,410.25958 682.79501,408.13826 C 683.32534,406.01694 682.97179,404.95628 683.6789,403.36529 C 684.386,401.7743 684.73956,401.95107 686.15377,401.24397 C 687.56798,400.53686 687.92154,400.18331 688.27509,399.4762 C 688.62864,398.76909 689.6893,398.59232 690.74996,398.76909 C 691.81062,398.94587 692.34095,399.4762 693.22484,398.23876 C 694.10872,397.00133 693.93194,396.64777 694.81583,397.00133 C 695.69971,397.35488 695.16938,397.35488 696.40682,397.70843 C 697.64426,398.06199 698.88169,398.59232 701.35657,398.06199 C 703.83144,397.53166 704.00822,396.29422 704.18499,397.70843 C 704.36177,399.12265 704.36177,399.29942 705.24565,399.29942 C 706.12954,399.29942 706.12954,399.4762 705.59921,400.53686 C 705.06888,401.59752 705.42243,400.89041 704.00822,402.83496 C 702.594,404.7795 701.8869,404.95628 701.71012,406.37049 C 701.53334,407.7847 701.8869,408.66859 701.8869,408.66859 C 701.8869,408.66859 701.17979,410.61313 702.41723,410.61313 C 703.65466,410.61313 703.83144,410.0828 705.42243,409.90602 C 707.01342,409.72925 708.42763,409.55247 708.60441,411.14346 C 708.78119,412.73445 709.84185,415.73966 710.90251,415.91643 C 711.96317,416.09321 711.96317,416.44676 713.73093,416.09321 C 715.4987,415.73966 716.20581,416.62354 716.38258,415.03255 C 716.55936,413.44156 716.55936,413.08801 716.55936,411.85057 C 716.55936,410.61313 714.79159,412.55767 717.08969,409.02214 C 719.38779,405.48661 719.91812,407.7847 719.38779,403.89562 C 718.85746,400.00653 717.7968,400.36008 718.68068,397.88521 C 719.56457,395.41034 719.21101,395.41034 719.74134,395.58711 C 719.74134,395.58711 721.33233,395.41034 721.50911,397.88521 C 721.68589,400.36008 722.39299,402.4814 722.39299,403.54206 C 722.39299,404.60272 723.1001,408.49181 723.1001,408.49181 C 723.1001,408.49181 724.33754,409.90602 725.04464,409.37569 C 725.75175,408.84536 726.81241,408.66859 726.81241,407.43115 C 726.81241,406.19371 727.16596,404.7795 727.51952,405.48661 C 727.87307,406.19371 728.93373,406.72404 728.93373,407.7847 C 728.93373,408.84536 728.75695,409.90602 728.93373,410.96668 C 729.11051,412.02734 730.17117,413.08801 730.17117,413.08801 C 730.17117,413.08801 730.52472,415.20933 730.52472,415.91643 C 730.52472,416.62354 730.87827,417.15387 730.52472,418.92164 C 730.17117,420.6894 730.17117,420.86618 730.34794,422.45717 C 730.52472,424.04816 730.7015,424.75527 731.4086,424.93204 C 732.11571,425.10882 732.11571,425.10882 732.82282,425.10882 C 733.52992,425.10882 733.7067,424.40171 734.23703,425.2856 C 734.76736,426.16948 734.94414,426.69981 736.18157,426.87659 C 737.41901,427.05336 738.47967,426.87659 738.47967,426.87659 C 738.47967,426.87659 739.01,427.76047 739.01,428.82113 C 739.01,429.88179 738.83323,430.23534 739.18678,431.64956 C 739.54033,433.06377 739.54033,433.24055 740.42422,433.41733 C 741.3081,433.5941 741.83843,433.77088 741.83843,433.77088 C 741.83843,433.77088 742.01521,434.65476 742.01521,436.06898 C 742.01521,437.48319 742.36876,438.36707 742.36876,438.36707 L 743.78297,439.42773 C 743.78297,439.42773 744.13653,440.31162 744.84363,441.1955 C 745.55074,442.07938 746.25785,442.25616 746.25785,442.25616 C 746.25785,442.25616 746.78818,443.31682 746.96495,444.2007 C 747.14173,445.08459 746.6114,444.55426 747.67206,445.79169 C 748.73272,447.02913 748.9095,447.38268 748.9095,448.44334 C 748.9095,449.504 749.79338,450.21111 749.43983,451.62532 C 749.08627,453.03954 749.26305,453.56987 749.08627,455.33764 C 748.9095,457.1054 749.26305,454.98408 748.9095,457.98929 C 748.55594,460.99449 748.73272,461.87837 748.55594,462.93903 C 748.37917,463.99969 748.02561,463.11581 747.84884,465.06035 C 747.67206,467.0049 747.49528,468.59589 747.49528,468.59589 C 747.49528,468.59589 746.25785,470.36365 745.37396,470.36365 C 744.49008,470.36365 742.89909,469.65655 742.89909,470.54043 C 742.89909,471.42431 742.01521,472.13142 743.25264,472.48497 C 744.49008,472.83853 744.84363,471.77787 744.84363,473.0153 C 744.84363,474.25274 744.49008,474.6063 743.42942,475.49018 C 742.36876,476.37406 742.36876,476.19729 741.13132,476.90439 C 739.89389,477.6115 740.60099,476.55084 739.71711,478.84894 C 738.83323,481.14703 739.01,481.14703 738.3029,482.03092 C 737.59579,482.9148 737.41901,482.9148 737.06546,483.97546 C 736.7119,485.03612 736.7119,485.38967 736.7119,486.62711 C 736.7119,487.86455 736.35835,488.39488 736.35835,488.39488 C 736.35835,488.39488 734.94414,489.80909 734.94414,491.04653 C 734.94414,492.28396 735.82802,492.81429 735.12091,493.69818 C 734.41381,494.58206 735.12091,494.58206 733.52992,494.75884 C 731.93893,494.93562 731.23183,494.93562 731.23183,494.93562 L 728.75695,495.46595 C 728.75695,495.46595 728.4034,494.40528 727.51952,494.93562 C 726.63563,495.46595 726.98919,495.28917 726.28208,496.17305 C 725.57497,497.05694 725.3982,497.05694 724.51431,497.58727 C 723.63043,498.1176 724.51431,498.29437 723.98398,499.17826 C 723.45365,500.06214 723.27688,500.94602 722.21622,500.41569 C 721.15556,499.88536 720.802,500.06214 720.44845,499.00148 C 720.0949,497.94082 720.62523,497.76404 718.85746,497.23371 C 717.08969,496.70338 716.91291,496.70338 716.91291,496.70338 C 716.91291,496.70338 716.38258,497.05694 716.02903,497.94082 C 715.67548,498.8247 716.20581,499.17826 714.96837,499.70859 C 713.73093,500.23892 713.73093,500.76925 712.4935,499.88536 L 712.72892,499.61589 C 712.72892,499.61589 712.72892,493.95904 712.9057,492.54482 C 713.08248,491.13061 712.55215,491.30739 711.84504,490.24673 C 711.13793,489.18607 712.72892,447.9971 712.55215,447.11321 C 712.37537,446.22933 682.67689,447.46677 682.67689,447.46677 L 682.08791,409.72925 z"
    />
  );
};

EasternAustralia.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default EasternAustralia;

// Internal
import * as LANDS from './constants/lands';
import Afghanistan from './Lands/Afghanistan';
import Alaska from './Lands/Alaska';
import Alberta from './Lands/Alberta';
import Arabia from './Lands/Arabia';
import Argentina from './Lands/Argentina';
import Brazil from './Lands/Brazil';
import CentralAmerica from './Lands/CentralAmerica';
import China from './Lands/China';
import Congo from './Lands/Congo';
import EastAfrica from './Lands/EastAfrica';
import EasternAustralia from './Lands/EasternAustralia';
import EasternUS from './Lands/EasternUS';
import Egypt from './Lands/Egypt';
import France from './Lands/France';
import Germany from './Lands/Germany';
import GreatBritain from './Lands/GreatBritain';
import Greenland from './Lands/Greenland';
import Iceland from './Lands/Iceland';
import India from './Lands/India';
import Indonesia from './Lands/Indonesia';
import Irkutsk from './Lands/Irkutsk';
import Japan from './Lands/Japan';
import Kamchatka from './Lands/Kamchatka';
import Madagascar from './Lands/Madagascar';
import Mongolia from './Lands/Mongolia';
import NewGuinea from './Lands/NewGuinea';
import NorthAfrica from './Lands/NorthAfrica';
import NorthWestTerritory from './Lands/NorthWestTerritory';
import Ontario from './Lands/Ontario';
import Peru from './Lands/Peru';
import Quebec from './Lands/Quebec';
import Russia from './Lands/Russia';
import Scandinavia from './Lands/Scandinavia';
import Serbia from './Lands/Serbia';
import Siam from './Lands/Siam';
import Siberia from './Lands/Siberia';
import SouthAfrica from './Lands/SouthAfrica';
import Ural from './Lands/Ural';
import Venezuela from './Lands/Venezuela';
import WesternAustralia from './Lands/WesternAustralia';
import WesternUS from './Lands/WesternUS';
import Yakutsk from './Lands/Yakutsk';

const getLandByName = (name) => {
  switch (name) {
    case LANDS.AFGHANISTAN: {
      return Afghanistan;
    }

    case LANDS.ALASKA: {
      return Alaska;
    }

    case LANDS.ALBERTA: {
      return Alberta;
    }

    case LANDS.ARABIA: {
      return Arabia;
    }

    case LANDS.ARGENTINA: {
      return Argentina;
    }

    case LANDS.BRAZIL: {
      return Brazil;
    }

    case LANDS.CENTRAL_AMERICA: {
      return CentralAmerica;
    }

    case LANDS.CHINA: {
      return China;
    }

    case LANDS.CONGO: {
      return Congo;
    }

    case LANDS.EAST_AFRICA: {
      return EastAfrica;
    }

    case LANDS.EAST_AUSTRALIA: {
      return EasternAustralia;
    }

    case LANDS.EASTERN_US: {
      return EasternUS;
    }

    case LANDS.EGYPT: {
      return Egypt;
    }

    case LANDS.FRANCE: {
      return France;
    }

    case LANDS.GERMANY: {
      return Germany;
    }

    case LANDS.GREAT_BRITAIN: {
      return GreatBritain;
    }

    case LANDS.GREENLAND: {
      return Greenland;
    }

    case LANDS.ICELAND: {
      return Iceland;
    }

    case LANDS.INDIA: {
      return India;
    }

    case LANDS.INDONESIA: {
      return Indonesia;
    }

    case LANDS.IRKUTSK: {
      return Irkutsk;
    }

    case LANDS.JAPAN: {
      return Japan;
    }

    case LANDS.KAMCHATKA: {
      return Kamchatka;
    }

    case LANDS.MADAGASCAR: {
      return Madagascar;
    }

    case LANDS.MONGOLIA: {
      return Mongolia;
    }

    case LANDS.NEW_GUINEA: {
      return NewGuinea;
    }

    case LANDS.NORTH_AFRICA: {
      return NorthAfrica;
    }

    case LANDS.NORTH_WEST_TERRITORY: {
      return NorthWestTerritory;
    }

    case LANDS.ONTARIO: {
      return Ontario;
    }

    case LANDS.PERU: {
      return Peru;
    }

    case LANDS.QUEBEC: {
      return Quebec;
    }

    case LANDS.RUSSIA: {
      return Russia;
    }

    case LANDS.SCANDINAVIA: {
      return Scandinavia;
    }

    case LANDS.SERBIA: {
      return Serbia;
    }

    case LANDS.SIAM: {
      return Siam;
    }

    case LANDS.SIBERIA: {
      return Siberia;
    }

    case LANDS.SOUTH_AFRICA: {
      return SouthAfrica;
    }

    case LANDS.URAL: {
      return Ural;
    }

    case LANDS.VENEZUELA: {
      return Venezuela;
    }

    case LANDS.WESTERN_AUSTRALIA: {
      return WesternAustralia;
    }

    case LANDS.WESTERN_US: {
      return WesternUS;
    }

    case LANDS.YAKUTSK: {
      return Yakutsk;
    }

    default: {
      return null;
    }
  }
};

export { getLandByName };

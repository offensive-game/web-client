// Vendor
import React, { Component } from 'react';
import Afghanistan from '../Lands/Afghanistan';
import Alaska from '../Lands/Alaska';
import Alberta from '../Lands/Alberta';
import Arabia from '../Lands/Arabia';
import Argentina from '../Lands/Argentina';
import Brazil from '../Lands/Brazil';
import CentralAmerica from '../Lands/CentralAmerica';
import China from '../Lands/China';
import Congo from '../Lands/Congo';
import EastAfrica from '../Lands/EastAfrica';
import EasternAustralia from '../Lands/EasternAustralia';
import EasternUS from '../Lands/EasternUS';
import Egypt from '../Lands/Egypt';
import France from '../Lands/France';
import Germany from '../Lands/Germany';
import GreatBritain from '../Lands/GreatBritain';
import Greenland from '../Lands/Greenland';
import Iceland from '../Lands/Iceland';
import India from '../Lands/India';
import Indonesia from '../Lands/Indonesia';
import Irkutsk from '../Lands/Irkutsk';
import Japan from '../Lands/Japan';
import Kamchatka from '../Lands/Kamchatka';
import Madagascar from '../Lands/Madagascar';
import Mongolia from '../Lands/Mongolia';
import NewGuinea from '../Lands/NewGuinea';
import NorthAfrica from '../Lands/NorthAfrica';
import NorthWestTerritory from '../Lands/NorthWestTerritory';
import Ontario from '../Lands/Ontario';
import Peru from '../Lands/Peru';
import Quebec from '../Lands/Quebec';
import Russia from '../Lands/Russia';
import Serbia from '../Lands/Serbia';
import Siam from '../Lands/Siam';
import Siberia from '../Lands/Siberia';
import SouthAfrica from '../Lands/SouthAfrica';
import Ural from '../Lands/Ural';
import Venezuela from '../Lands/Venezuela';
import WesternAustralia from '../Lands/WesternAustralia';
import WesternUS from '../Lands/WesternUS';
import Yakutsk from '../Lands/Yakutsk';

// CSS
import styles from './styles.css';

// Constants
import { BOARD_INITIAL_HEIGHT, BOARD_INITIAL_WIDTH } from './constants';

class Board extends Component {
  boardRef = React.createRef();

  state = { scale: 1 };

  componentDidMount() {
    const board = this.boardRef.current;
    const scaleX = board.offsetWidth / BOARD_INITIAL_WIDTH;
    const scaleY = board.offsetHeight / BOARD_INITIAL_HEIGHT;
    const scale = Math.min(scaleX, scaleY);
    if (scale > 1) {
      this.setState({ scale: Math.max(1, scale) });
    }
  }

  render() {
    const { scale } = this.state;
    const style = { transform: `scale(${scale})` };

    return (
      <div className={styles.component} ref={this.boardRef}>
        <svg className={styles.lands} style={style}>
          <Argentina onClick={() => console.log('arg')} />
          <Brazil onClick={console.log} />
          <Peru onClick={console.log} />
          <Venezuela onClick={console.log} />

          <Alaska onClick={() => console.log('Alaska')} />
          <Ontario onClick={() => console.log('ontario')} />
          <NorthWestTerritory onClick={() => console.log('NWT')} />
          <Alberta onClick={() => console.log('alberta')} />
          <Quebec onClick={() => console.log('quebec')} />
          <Greenland onClick={() => console.log('greenland')} />
          <EasternUS onClick={() => console.log('eus')} />
          <WesternUS onClick={() => console.log('wus')} />
          <CentralAmerica onClick={() => console.log('central america')} />

          <Iceland onClick={() => console.log('iceland')} />
          <GreatBritain onClick={() => console.log('GB')} />
          <France onClick={() => console.log('France')} />
          <Serbia onClick={() => console.log('Serbia')} />
          <Germany onClick={() => console.log('Germany')} />
          <Russia onClick={() => console.log('russia')} />

          <NorthAfrica onClick={() => console.log('north africa')} />
          <Egypt onClick={() => console.log('egypt')} />
          <Congo onClick={() => console.log('congo')} />
          <EastAfrica onClick={() => console.log('East Africa')} />
          <SouthAfrica onClick={() => console.log('south africa')} />
          <Madagascar onClick={() => console.log('Madagascar')} />

          <Irkutsk onClick={() => console.log('irkutsk')} />
          <Yakutsk onClick={() => console.log('yakutsk')} />
          <Ural onClick={() => console.log('ural')} />
          <Siberia onClick={() => console.log('siberia')} />
          <Kamchatka onClick={() => console.log('kamchatka')} />
          <Japan onClick={() => console.log('japan')} />
          <China onClick={() => console.log('china')} />
          <Mongolia onClick={() => console.log('mongolia')} />
          <Siam onClick={() => console.log('siam')} />
          <India onClick={() => console.log('india')} />
          <Arabia onClick={() => console.log('arabia')} />
          <Afghanistan onClick={() => console.log('afghanistan')} />

          <Indonesia onClick={() => console.log('indonesia')} />
          <NewGuinea onClick={() => console.log('new guinea')} />
          <EasternAustralia onClick={() => console.log('eastern aus')} />
          <WesternAustralia onClick={() => console.log('western aus')} />
        </svg>
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;

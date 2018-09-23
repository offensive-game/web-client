// Vendorplayer_id
import { get } from 'lodash';

const selectCurrentGame = (state) => get(state, 'game', {});

export { selectCurrentGame };

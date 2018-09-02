// Vendor

// Internal
import { ssrHandler } from './handlers';

const setup = () => (req, res) => {
  ssrHandler(req, res);
};

export default setup;

import { AddressService } from '../api/address-rest-service';

const minimist = require('minimist');
const PORT = 3000;

/**
 * parse call arguments and provide application with dependencies and start listening.
 */
function start(): void {
  let argv = minimist(process.argv.slice(2));
  let port = argv.p || PORT;
  console.info(`port:${port.toString()}`);
  let app = new AddressService(port);
  app.listen();
}

/**
 * bootstrap.
 */
start();
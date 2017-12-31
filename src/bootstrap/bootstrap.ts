import { AddressService } from '../api/address-rest-service';
import {initDbAsync} from "./database-init";

const minimist = require('minimist');
const PORT = 3000;

/**
 * parse call arguments and provide application with dependencies and start listening.
 */
function start(): void {
  let argv = minimist(process.argv.slice(2));
  let port = argv.p || PORT;
  let app = new AddressService(port);
  app.listen();
}

/**
 * bootstrap.
 */
initDbAsync().then(() => start())
    .catch((err) =>{console.error('init returned error\n',err,'\n----------------------')});
import { join } from 'path';
import { NapiModule, NapiObject } from 'node-addon-api';

const addonPath = join(__dirname, 'build', 'Release', 'cpp-addon.node');
const addon: NapiObject = require(addonPath);

console.log(addon.greet());

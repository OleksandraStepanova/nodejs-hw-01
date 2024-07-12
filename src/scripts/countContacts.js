import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const countContacts = async () => {
      fs.readFile(PATH_DB, { encoding: 'utf8' }).then(data=>console.log(JSON.parse(data).length)).catch(console.error);
};

console.log(await countContacts());

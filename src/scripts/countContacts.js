import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const countContacts = async () => {
      return fs.readFile(PATH_DB, { encoding: 'utf8' }).then(data => {
            const count = JSON.parse(data).length;
            return count;
      }).catch(console.error);
};

console.log(await countContacts());

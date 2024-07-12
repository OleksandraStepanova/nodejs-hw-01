import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const getAllContacts = async () => {
   return fs.readFile(PATH_DB, { encoding: 'utf8' }).then(data => {
        const arr = JSON.parse(data);
        return arr;
    }).catch(console.error);
};

console.log(await getAllContacts());

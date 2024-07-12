import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const user = createFakeContact();
    fs.readFile(PATH_DB, { encoding: 'utf8' })
        .then(data => {
            const arr = JSON.parse(data);
            arr.push(user);
            fs.writeFile(PATH_DB, JSON.stringify(arr, undefined, 2)).then(data=>data).catch(console.error);
        })
        .catch(console.error);
};

addOneContact();

import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { faker } from "@faker-js/faker";
import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {
    
    const users = faker.helpers.multiple(createFakeContact, {
        count: number,
    });
       fs.readFile(PATH_DB, { encoding: 'utf8' })
        .then(data => {
            const arr = JSON.parse(data);
            const newArr = arr.concat(users);
            fs.writeFile(PATH_DB, JSON.stringify(newArr, undefined, 2)).then(data=>data).catch(console.error);
        })
        .catch(console.error);
};

generateContacts(5);

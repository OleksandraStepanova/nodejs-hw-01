import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
export const removeLastContact = async () => {
        fs.readFile(PATH_DB, { encoding: 'utf8' }).then(data => {
            const arr = JSON.parse(data);
            if (arr.length) {
                  arr.pop();
            }          
        fs.writeFile(PATH_DB, JSON.stringify(arr, undefined, 2)).then(data=>data).catch(console.error);            
        }).catch (console.error);    
};

removeLastContact();

import { stdin as input, stdout as output } from "process";
import readline from 'readline/promises';

console.log(" ---Sample Calculator---");

const rl = readline.createInterface({ input, output });

async function showManu() {
    console.log('\n\n++++++++++++++++++\nn: new contact\n l: contact list \n q: quite \n++++++++++++++++++\n\n');
    const action = await rl.question("action: ");
    if (action === 'n') {
        await createNewContract();
    }
    if (action === 'l') {
        contactList();
    }
    if (action === 'q') {
        quite();
        return;
    }
    showManu();
}

const contactLists = [];

async function createNewContract() {
    const firstName = await rl.question("firstName: ");
    const lastName = await rl.question("lastName: ");

    const newContact = {
        id: contactLists.length,
        firstName,
        lastName
    }
    contactLists.push(newContact);
}


function contactList() {
    console.log(contactLists.map(({ id, firstName, lastName }) => `#${id}: ${firstName} ${lastName}`).join('\n'));
}


function quite() {
    rl.close();
}

showManu();
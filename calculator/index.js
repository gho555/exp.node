import { stdin as input, stdout as output } from "process";
import readline from 'readline/promises';

console.log(" ---Sample Calculator---");

const rl = readline.createInterface({ input, output });

const input2 = await rl.question("input #2: ");
const input1 = await rl.question("input #1: ");

const result = Number(input1) + Number(input2);

console.log(`${input1} "+" ${input2} "=" ${result}`);

rl.close();
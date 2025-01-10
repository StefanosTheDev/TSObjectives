// Importing from tasks.ts
import { Task, tempList, addTask, checkIfExist } from './basicCrud';
import * as readline from 'readline'; // Why does this work?
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  /*
  The question method in Node.js's readline module only accepts one argument for the user input callback. 
  It cannot take both username and password in the same question call.
  */
  // Ask for username and password
  rl.question(
    `Welcome. Please Authenticate Yourself\nEnter your username: `,
    (username: string) => {
      rl.question(`Enter your password: `, (password: string) => {
        checkIfExist(username, password);
        rl.close(); // Close the readline interface after the input
      });
    }
  );
}
main();

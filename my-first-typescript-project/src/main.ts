import * as readline from 'readline';

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Dummy validation function
function checkIfExist(username: string, password: string): boolean {
  // Replace this with your actual validation logic
  return username === 'admin' && password === 'password123';
}

// Recursive function to handle re-prompting
function authenticate(attempts: number = 0): void {
  rl.question(
    `Welcome. Please Authenticate Yourself\nEnter your username: `,
    (username: string) => {
      rl.question(`Enter your password: `, (password: string) => {
        const isValid = checkIfExist(username, password);

        if (isValid) {
          console.log('Authentication successful. Welcome!');
          rl.close();
          nextStep(); // Call the next step
        } else {
          console.log('Authentication failed.');

          if (attempts < 1) {
            console.log('Please try again.');
            authenticate(attempts + 1); // Re-prompt
          } else {
            console.log('Too many failed attempts. Exiting...');
            rl.close();
          }
        }
      });
    }
  );
}

// Example of the next step function
function nextStep(): void {
  console.log('Proceeding to the next step...');
  // Add your logic here for the next step
}

// Main function
function main(): void {
  authenticate(); // Start authentication
}

main();

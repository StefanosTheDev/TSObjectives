// Importing from tasks.ts
import { Task, tempList, addTask } from './basicCrud';

try {
  const task1 = addTask({
    description: 'Learn TypeScript',
    status: 'incomplete',
  });
  console.log('Task added:', task1);

  const task2 = addTask({
    description: 'Build a task manager',
    status: 'complete',
  });
  console.log('Task added:', task2);

  console.log('All Tasks:', tempList);
} catch (error) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}

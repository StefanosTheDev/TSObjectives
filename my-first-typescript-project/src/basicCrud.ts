import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid'; // Optional: Use uuid for unique IDs

// Task Manager
//Purpose: Build a CLI-based application to manage tasks using basic TypeScript features.

/*
Adds a new task to the list.
Each task should have:
A unique ID (auto-increment or generated UUID).
A description (string).
A status ("completed" | "incomplete", default to "incomplete").
*/

// difference between [] / []
export let tempList: Task[] = [];
// Define the Task Interface
export interface Task {
  id: number;
  description: string;
  status: 'complete' | 'incomplete';
}
// Why does this need the interface
const loadTasks = (): Task[] => {
  const data = fs.readFileSync('tasks.json', 'utf-8');
  return JSON.parse(data);
};

// Load tasks & log them
const tasks = loadTasks();

// Add task function
export function addTask(task: Omit<Task, 'id'>): Task {
  // Validate input
  if (!task.description.trim()) {
    throw new Error('Task validation failed: Description cannot be empty.');
  }
  if (task.status !== 'complete' && task.status !== 'incomplete') {
    throw new Error(
      "Task validation failed: Invalid status. Must be 'completed' or 'incomplete'."
    );
  }

  // Generate unique ID // a bit confusedon this why does it need to be of (Task)
  const newTask: Task = {
    id: tempList.length + 1, // Generate unique string ID
    ...task,
  };

  // Add task to the list
  tempList.push(newTask);

  // Return the added task
  return newTask;
}

/*
Check A Key Value Dictionary Set. 
Read To See if 
*/

export function loadCredentials() {
  const credentials = new Map<string, string>();
  // Load users
  credentials.set('Stef', 'Tennis1');
  credentials.set('Bob', 'Check123');

  return credentials;
}
export function checkIfExist(username: string, password: string) {
  // Check The Mapped Function
  const credentials = loadCredentials();
  credentials.forEach((value, key) => {
    if (username === key && password == value) {
      return true;
    } else return false;
  });
}

console.log(checkIfExist('Stefanos', 'Stef'));

interface Task {
  title: string;
  description?: string;
  status: 'pending' | 'completed';
}

class TaskClass implements Task {
  title: string;
  description?: string;
  status: 'pending' | 'completed';

  constructor(
    title: string,
    description?: string,
    status: 'pending' | 'completed' = 'pending'
  ) {
    this.title = title;
    this.description = description;
    this.status = status;
  }
}

const taskList: Task[] = [];

// Add task function with destructuring
function addTask({ title, description, status }: Task) {
  console.log(`Task Added: Title = "${title}", Status = "${status}"`);
  taskList.push({ title, description, status });
}

// Create and add tasks
const task1 = new TaskClass('Learn TypeScript', 'Study the documentation');
addTask(task1);

const task2 = new TaskClass('Complete project', 'Work on backend', 'completed');
addTask(task2);

console.log('Current Task List:', taskList);
// Output:
// Task Added: Title = "Learn TypeScript", Status = "pending"
// Task Added: Title = "Complete project", Status = "completed"
// Current Task List:
// [
//   { title: 'Learn TypeScript', description: 'Study the documentation', status: 'pending' },
//   { title: 'Complete project', description: 'Work on backend', status: 'completed' }
// ]

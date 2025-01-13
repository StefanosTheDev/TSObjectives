interface Task {
  id?: number; // make ID Optional
  title: string;
  description?: string;
  status?: 'pending' | 'completed';
}

class TaskClass implements Task {
  id?: number; // make ID Optional When creating.
  title: string;
  description?: string;
  status?: 'pending' | 'completed';

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
function addTask({ title, description, status = 'pending' }: Omit<Task, 'id'>) {
  const id = taskList.length + 1;
  const newTask: Task = { id, title, description, status }; // Assign The ID here.
  taskList.push(newTask);
  return newTask;
}

// Get the ID destructured.
function deleteTask(num: number) {
  if (num) {
    console.log('Id does not exist');
  }
  const searchID = taskList.find((item) => item.id === num);
  console.log(`${searchID} is the ID `);
  return searchID;
}

const fakeTask: Task = {
  title: 'Stefanos',
  description: '40',
};

console.log(addTask(fakeTask));
console.log(deleteTask(1));

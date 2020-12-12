import { v4 as uuidv4 } from 'uuid';

export const PRIORITY_LOW = 1;
export const PRIORITY_NORMAL = 2;
export const PRIORITY_HIGH = 3;

export const createTask = (label) => ({
  id: uuidv4(),
  label,
  createdAt: new Date(),
  isComplete: false,
  priority: PRIORITY_NORMAL,
});

export const getSortedTasksAsArray = (tasksObject, sortBy) => {
  const tasks = Object.values(tasksObject);

  switch (sortBy) {
    case 'priority': {
      tasks.sort((a, b) => {
        if (a.priority !== b.priority) {
          return a.priority > b.priority ? -1 : 1;
        }

        return a.createdAt > b.createdAt ? -1 : 1;
      });
      break;
    }

    case 'name': {
      tasks.sort((a, b) => (a.label > b.label ? -1 : 1));
      break;
    }

    default: { // Sort by date
      tasks.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    }
  }

  return tasks;
};

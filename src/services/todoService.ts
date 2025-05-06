import { ref, push, set, get, update, remove, onValue } from 'firebase/database';
import { database } from '@/lib/firebase';
import { Todo } from '@/types';

const TODOS_REF = 'todos';

// Create a new todo
export const createTodo = async (todo: Omit<Todo, 'id' | 'createdAt'>): Promise<string> => {
  const todosRef = ref(database, TODOS_REF);
  const newTodoRef = push(todosRef);
  
  await set(newTodoRef, {
    ...todo,
    createdAt: Date.now(),
  });
  
  return newTodoRef.key || '';
};

// Subscribe to todos with realtime updates
export const subscribeTodos = (callback: (todos: Todo[]) => void) => {
  const todosRef = ref(database, TODOS_REF);
  
  // Set up realtime listener
  const unsubscribe = onValue(todosRef, (snapshot) => {
    const todos: Todo[] = [];
    
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        todos.push({
          id: childSnapshot.key || '',
          title: data.title,
          completed: data.completed,
          createdAt: new Date(data.createdAt),
        });
      });
      
      // Sort todos by createdAt in descending order (newest first)
      todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    
    callback(todos);
  });
  
  // Return the unsubscribe function
  return unsubscribe;
};

// Read all todos - kept for compatibility
export const getTodos = async (): Promise<Todo[]> => {
  const todosRef = ref(database, TODOS_REF);
  const snapshot = await get(todosRef);
  
  if (!snapshot.exists()) {
    return [];
  }
  
  const todos: Todo[] = [];
  
  snapshot.forEach((childSnapshot) => {
    const data = childSnapshot.val();
    todos.push({
      id: childSnapshot.key || '',
      title: data.title,
      completed: data.completed,
      createdAt: new Date(data.createdAt),
    });
  });
  
  // Sort todos by createdAt in descending order (newest first)
  return todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

// Read a single todo
export const getTodo = async (id: string): Promise<Todo | null> => {
  const todoRef = ref(database, `${TODOS_REF}/${id}`);
  const snapshot = await get(todoRef);
  
  if (!snapshot.exists()) {
    return null;
  }
  
  const data = snapshot.val();
  return {
    id: snapshot.key || '',
    title: data.title,
    completed: data.completed,
    createdAt: new Date(data.createdAt),
  };
};

// Update a todo
export const updateTodo = async (id: string, todo: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<void> => {
  const todoRef = ref(database, `${TODOS_REF}/${id}`);
  await update(todoRef, todo);
};

// Delete a todo
export const deleteTodo = async (id: string): Promise<void> => {
  const todoRef = ref(database, `${TODOS_REF}/${id}`);
  await remove(todoRef);
}; 
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy, Timestamp } from 'firebase/firestore';
import { firestore } from '@/lib/firestore';
import { Todo } from '@/types';

const COLLECTION_NAME = 'todos';
const todosCollection = collection(firestore, COLLECTION_NAME);

// Create a new todo
export const createTodo = async (todo: Omit<Todo, 'id' | 'createdAt'>): Promise<string> => {
  const docRef = await addDoc(todosCollection, {
    ...todo,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};

// Read all todos
export const getTodos = async (): Promise<Todo[]> => {
  const q = query(todosCollection, orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      completed: data.completed,
      createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    };
  });
};

// Read a single todo
export const getTodo = async (id: string): Promise<Todo | null> => {
  const docRef = doc(firestore, COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return null;
  }
  
  const data = docSnap.data();
  return {
    id: docSnap.id,
    title: data.title,
    completed: data.completed,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
  };
};

// Update a todo
export const updateTodo = async (id: string, todo: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<void> => {
  const docRef = doc(firestore, COLLECTION_NAME, id);
  await updateDoc(docRef, todo);
};

// Delete a todo
export const deleteTodo = async (id: string): Promise<void> => {
  const docRef = doc(firestore, COLLECTION_NAME, id);
  await deleteDoc(docRef);
}; 
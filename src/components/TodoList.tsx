'use client';

import { useState, useEffect } from 'react';
import { Todo } from '@/types';
import { subscribeTodos, createTodo, updateTodo, deleteTodo } from '@/services/todoService';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Subscribe to todos with realtime updates
  useEffect(() => {
    const unsubscribe = subscribeTodos((todosList) => {
      setTodos(todosList);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  // Add a new todo
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;

    try {
      await createTodo({
        title: newTodoTitle,
        completed: false,
      });
      setNewTodoTitle('');
      setError(null);
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
    }
  };

  // Toggle todo completion status
  const handleToggleComplete = async (id: string) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      if (!todoToUpdate) return;
      await updateTodo(id, { completed: !todoToUpdate.completed });
      setError(null);
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  // Delete a todo
  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setError(null);
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Todo List</h2>
      
      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </form>
      
      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 p-2 rounded mb-4">
          {error}
        </div>
      )}
      
      {/* Loading State */}
      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading todos...</p>
      ) : (
        /* Todo List */
        <ul className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">No todos yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <li 
                key={todo.id}
                className="flex items-center justify-between border p-3 rounded dark:border-gray-700 bg-gray-50 dark:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id!)}
                    className="h-5 w-5 accent-blue-500 dark:accent-blue-400"
                  />
                  <span className={`${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}`}>
                    {todo.title}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTodo(todo.id!)}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
} 
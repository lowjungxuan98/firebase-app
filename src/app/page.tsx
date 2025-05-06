import TodoApp from '../components/TodoApp';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] transition-colors">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Firebase CRUD Todo App</h1>
        <TodoApp />
      </main>
    </div>
  );
}

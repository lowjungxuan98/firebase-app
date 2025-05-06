import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Firebase CRUD Examples</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Link 
          href="/firestore" 
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Firestore</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Cloud Firestore is a NoSQL database with rich querying and realtime updates.
          </p>
          <div className="text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
            Try Firestore CRUD
          </div>
        </Link>
        
        <Link 
          href="/realtime" 
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Realtime Database</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Firebase Realtime Database with JSON storage and realtime sync.
          </p>
          <div className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors">
            Try Realtime CRUD
          </div>
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Firebase CRUD Examples</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Firestore</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Cloud Firestore is a flexible, scalable NoSQL cloud database to store and sync data. 
            It keeps your data in sync across client apps through realtime listeners.
          </p>
          <Link 
            href="/firestore" 
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
          >
            Try Firestore CRUD
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Realtime Database</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized 
            in realtime to every connected client.
          </p>
          <Link 
            href="/realtime" 
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
          >
            Try Realtime CRUD
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Firebase Todo App",
  description: "A simple todo app using Firebase Realtime Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors min-h-screen flex flex-col`}
      >
        <div className="flex flex-col md:flex-row flex-1">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 shadow-lg md:min-h-screen">
            <div className="mb-8">
              <h1 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Firebase Service</h1>
            </div>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/firestore" 
                    className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    Firestore
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/realtime" 
                    className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    Realtime Database
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          
          {/* Main content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

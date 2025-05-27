'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-8">We apologize for the inconvenience.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-black/80 transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/" 
          className="px-6 py-3 border border-black rounded-md hover:bg-black/5 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 
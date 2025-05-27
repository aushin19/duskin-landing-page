'use client';

import { useEffect, useState } from 'react';

// Using a simpler approach to avoid TS typing issues
export default function StageWise() {
  // Using type casting to address the ESLint issue
  const [StagewiseToolbar, setStagewiseToolbar] = useState<React.ElementType | null>(null);
  
  useEffect(() => {
    // Only run in development mode and on client side
    if (process.env.NODE_ENV === 'development') {
      // Dynamically import the toolbar to prevent it from being included in production builds
      import('@stagewise/toolbar-next').then(({ StagewiseToolbar }) => {
        setStagewiseToolbar(() => StagewiseToolbar);
      });
    }
  }, []);

  if (!StagewiseToolbar) return null;

  const stagewiseConfig = {
    plugins: []
  };

  return <StagewiseToolbar config={stagewiseConfig} />;
} 
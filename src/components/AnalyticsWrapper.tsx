'use client';

import { Suspense } from 'react';
import FirebaseAnalytics from './FirebaseAnalytics';

export default function AnalyticsWrapper() {
  return (
    <Suspense fallback={null}>
      <FirebaseAnalytics />
    </Suspense>
  );
} 
"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initAnalytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initFirebase = async () => {
      const analytics = await initAnalytics();
      if (analytics) {
        // Log page view
        logEvent(analytics, 'page_view', {
          page_path: pathname,
          page_location: `${window.location.origin}${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`,
          page_title: document.title,
        });
      }
    };

    initFirebase();
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
} 
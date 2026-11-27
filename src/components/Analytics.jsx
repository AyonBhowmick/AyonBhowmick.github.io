'use client';

import { useEffect } from 'react';
import { inject } from '@vercel/analytics';

// Vercel Web Analytics (free on the Hobby plan, no cookies). Only runs on the live
// Vercel address, so GitHub Pages and local testing don't load it.
export default function Analytics() {
  useEffect(() => {
    if (window.location.hostname === 'ayon-bhowmick-portfolio.vercel.app') inject();
  }, []);
  return null;
}

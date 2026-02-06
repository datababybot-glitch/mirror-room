'use client';

import Header from './Header';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ 
        paddingTop: '100px',
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh'
      }}>
        {children}
      </main>
    </>
  );
}

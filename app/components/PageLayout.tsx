'use client';

import Header from './Header';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
      </main>
    </>
  );
}

import { PropsWithChildren } from 'react';

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex min-h-screen flex-col">
      {children}
    </section>
  );
} 
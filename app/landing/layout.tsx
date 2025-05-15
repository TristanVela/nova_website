import { PropsWithChildren } from 'react';

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex min-h-screen flex-col">
      {children}
    </section>
  );
} 
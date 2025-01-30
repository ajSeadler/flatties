import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-5 flex-grow">
        {children}
      </main>
      {/* Footer */}
      <footer className="py-6 mt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Flatties Wheels. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

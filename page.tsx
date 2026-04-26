// app/page.tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <header>
        <Hero />
      </header>
    </main>
  );
}
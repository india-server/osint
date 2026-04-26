// app/about/page.tsx
export const metadata = {
  title: "About Aerivue",
  description:
    "Learn about Aerivue, a modern web development brand focused on performance and SEO.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white p-10">
      <h1 className="text-4xl font-bold">About Aerivue</h1>

      <p className="mt-4 text-gray-400 max-w-2xl">
        Aerivue is a modern web development brand focused on building
        high-performance websites with clean UI and strong SEO foundations.
      </p>
    </main>
  );
}
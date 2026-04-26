// app/services/page.tsx
export const metadata = {
  title: "Web Development Services | Aerivue",
  description:
    "Professional Next.js web development services in India. Fast, SEO-friendly and scalable websites.",
};

export default function ServicesPage() {
  return (
    <main className="bg-black text-white p-10">
      <h1 className="text-4xl font-bold">
        Web Development Services in India
      </h1>

      <p className="mt-4 text-gray-400 max-w-2xl">
        Aerivue provides modern web development services using Next.js, React
        and Tailwind CSS. We focus on speed, SEO and clean UI.
      </p>

      <ul className="mt-8 space-y-4 text-gray-300">
        <li>Next.js Website Development</li>
        <li>Landing Page Design</li>
        <li>SEO Optimization</li>
        <li>Portfolio Websites</li>
      </ul>
    </main>
  );
}
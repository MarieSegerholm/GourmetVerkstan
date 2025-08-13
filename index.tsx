// apps/web/pages/index.tsx
//
// Entry page for the GourmetVerkstan front‑end.  This simple page
// welcomes the user in Swedish.  In a full implementation you would
// fetch the weekly menu and featured chefs from the API.

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-4">Välkommen till GourmetVerkstan</h1>
      <p className="text-lg mb-8">Din personliga AI‑kock och kulinariska guide.</p>
      {/* TODO: Add navigation to recipes, kurser, and subscription plans */}
    </main>
  )
}
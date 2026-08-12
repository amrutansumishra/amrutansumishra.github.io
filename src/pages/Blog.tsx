export default function Blog() {
  return (
    <>
      <title>Blog — Amrutansu</title>
      <meta name="description" content="Articles and notes from Amrutansu on frontend engineering." />

      <main className="mx-auto flex min-h-[70vh] max-w-[1200px] flex-col items-center justify-center px-6 pt-40 text-center">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Blog</h1>
        <p className="mt-4 max-w-md text-base text-muted">
          {/* TODO: replace with real blog content / CMS integration */}
          Posts are on the way. Check back soon for articles on React, TypeScript, and frontend engineering.
        </p>
      </main>
    </>
  );
}

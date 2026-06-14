export default async function ArticlePage({ params }) {

    const { slug } = await params;
  
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-5xl font-bold">
          مقاله: {slug}
        </h1>
      </main>
    );
  }
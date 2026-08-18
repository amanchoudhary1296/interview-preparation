import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <section className="flex min-h-[80vh] items-center justify-center">
          <h1 className="text-5xl font-bold text-black">
            Hello World
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;
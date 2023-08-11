import { Footer } from "./components";
import { Header } from "./components/header";
import "@picocss/pico";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>

      <body>
        <Header />

        <main class="container">
          <h1>Qwik Blank App</h1>
        </main>

        <Footer />
      </body>
    </>
  );
};

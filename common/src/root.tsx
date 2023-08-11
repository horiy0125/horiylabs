import "@picocss/pico";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

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

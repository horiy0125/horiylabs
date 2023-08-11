import { Counter } from "./components/counter/counter";
import { Logo } from "./components/logo/logo";
import "@picocss/pico";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>

      <body>
        <main class="container">
          <Logo />
          <Counter />
        </main>
      </body>
    </>
  );
};

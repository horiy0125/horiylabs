import { component$ } from "@builder.io/qwik";
import {Counter, Logo} from "@horiy0125/common"

export default component$(() => {
  return (
    <div>
      <h2>@horiy0125/common</h2>
      <Logo />
      <Counter />
    </div>
  )
})
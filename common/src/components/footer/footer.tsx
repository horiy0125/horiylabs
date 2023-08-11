import { component$ } from "@builder.io/qwik";
import { BaseProps } from "../../types";

export const Footer = component$((props: BaseProps) => {
  return <footer class={props.class}></footer>;
});

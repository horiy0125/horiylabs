import { component$ } from "@builder.io/qwik";
import { BaseProps } from "../../types";

export const Header = component$((props: BaseProps) => {
  return <header class={props.class}></header>;
});

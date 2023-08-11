import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <Link href="/blog/posts/lsk8k8gpz">
        VOYAGE GROUPのTreasure 2021が最高だった
      </Link>

      <br />

      <Link href="/blog/posts/311ze4r8ztg3">
        CA Tech Challenge 2days Webフロント向け 開発型インターンシップ
        ONLINEを振り返る
      </Link>

      <br />

      <Link href="/blog/posts/csuho40r7wt">
        ReactからNuxt.jsに乗り換えてポートフォリオサイト+ブログを開発したらめちゃくちゃ快適だった件
      </Link>
    </>
  );
});

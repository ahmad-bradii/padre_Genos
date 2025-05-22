import { render } from "@testing-library/react";
import Pizza from "../Pizza";
import { expect, test } from "vitest";

test("all test renders on Pizza image", async () => {
  const name = "My favorite pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description="super cool Pizza" />
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

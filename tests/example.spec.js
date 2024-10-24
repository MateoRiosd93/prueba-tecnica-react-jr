// @ts-check
const { test, expect } = require("@playwright/test");

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
const LOCAL_HOST_URL = "http://localhost:5173/";

test("has title", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  // Expect a title "to contain" a substring.
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});

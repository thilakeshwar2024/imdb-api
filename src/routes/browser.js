const puppeteer = require('puppeteer');
import { Hono } from "hono";
const index = new Hono();

index.get("/send", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://blackbox.ai');
  const title = await page.title();
  await browser.close();
})();

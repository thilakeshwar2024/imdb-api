const puppeteer = require('puppeteer');
import { Hono } from "hono";
const sendRoutes = new Hono();

sendRoutes.get("/send", async (c) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://blackbox.ai');
  const title = await page.title();
  await browser.close();
  return c.json({
    status: "Running",
    title: title,
  });
});

export default sendRoutes;
